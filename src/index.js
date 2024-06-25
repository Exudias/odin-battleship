import "./styles.css";
import {Game} from "./scripts/game";
import {Ship} from "./scripts/ship";
import { DomManager } from "./scripts/dommanager";

const board1 = DomManager.findElementById("gameboard-1");
const board2 = DomManager.findElementById("gameboard-2");
const resetButton = DomManager.findElementById("button-restart");
const verticalButton = DomManager.findElementById("button-vertical");
const horizontalButton = DomManager.findElementById("button-horizontal");
const headerContainer = DomManager.findElementById("header-container");

let placingVertical = true;
let gameOver = false;

const SHIPS = [5, 4, 3, 3, 2];

(() => {
    resetButton.onclick = function(){resetGame()};
    verticalButton.onclick = function()
    {
        DomManager.hideElement(verticalButton);
        DomManager.showElement(horizontalButton);
        placingVertical = true;
    };
    horizontalButton.onclick = function()
    {
        DomManager.showElement(verticalButton);
        DomManager.hideElement(horizontalButton);
        placingVertical = false;
    };

    const game = beginGame();
    setUpDOM(game);
})();

function beginGame()
{
    const shipCount = SHIPS.length;
    DomManager.setDivText(headerContainer, `Place your ships (${shipCount} remain)!`);
    gameOver = false;
    const game = new Game();
    return game;
}

function resetGame()
{
    const game = beginGame();
    resetDOM();
    setUpDOM(game);
}

function setUpDOM(game)
{
    populateDOMBoard(board1, game, false);
    populateDOMBoard(board2, game, true);

    populateBoard(game.p2.board);

    DomManager.renderBoardOnGrid(game.p1.board, board1);
    DomManager.renderBoardOnGrid(game.p2.board, board2, true);
}

function resetDOM()
{
    DomManager.removeAllChildren(board1);
    DomManager.removeAllChildren(board2);
    DomManager.hideElement(verticalButton);
    DomManager.showElement(horizontalButton);
    placingVertical = true;
}

function checkWin(game)
{
    if (game.p1.board.allShipsSunk())
    {
        gameEnd(false);
    }
    else if (game.p2.board.allShipsSunk())
    {
        gameEnd(true);
    }
}

function gameEnd(win)
{
    gameOver = true;
    if (win)
        DomManager.setDivText(headerContainer, `You win!`);
    else
        DomManager.setDivText(headerContainer, `You lose!`);
}

function populateDOMBoard(board, game, isEnemy)
{
    for (let i = 0; i < 10; i++)
    {
        for (let j = 0; j < 10; j++)
        {
            let div = DomManager.createAndAddDiv(board);
            if (isEnemy)
            {
                const boardEntity = game.p2.board;
                div.onclick = function()
                {
                    if (game.p1.board.ships.length < SHIPS.length) return;
                    if (gameOver) return;
                    let attackResult = boardEntity.receiveAttack([i, j]);
                    if (attackResult !== null)
                    {
                        DomManager.renderBoardOnGrid(boardEntity, board, true);
                        if (attackResult === false)
                        {
                            game.p2.attackAI(game.p1.board);
                            DomManager.renderBoardOnGrid(game.p1.board, board1);
                            checkWin(game);
                        }
                        else
                        {
                            checkWin(game);
                        }
                    }
                };
            }
            else
            {
                const boardEntity = game.p1.board;
                div.onclick = function()
                {
                    if (boardEntity.ships.length >= SHIPS.length) return;

                    let ship = new Ship(SHIPS[boardEntity.ships.length]);
                    boardEntity.place(ship, [i, j], placingVertical);
                    DomManager.renderBoardOnGrid(boardEntity, board, false);

                    const shipCount = SHIPS.length - boardEntity.ships.length;
                    if (shipCount > 0)
                    {
                        DomManager.setDivText(headerContainer, `Place your ships (${shipCount} remain)!`);
                    }
                    else
                    {
                        DomManager.setDivText(headerContainer, `Attack by pressing an enemy square!`);
                        DomManager.hideElement(verticalButton);
                        DomManager.hideElement(horizontalButton);
                    }
                };
            }
        }
    }
}

function populateBoard(board)
{
    let placed = 0;
    let boardSize = board.grid.length;
    while (placed < SHIPS.length)
    {
        let ship = new Ship(SHIPS[placed]);
        let x = Math.floor(Math.random() * boardSize);
        let y = Math.floor(Math.random() * boardSize);
        let vert = Math.random() >= 0.5;
        if (board.place(ship, [y, x], vert)) placed++;
    }
}