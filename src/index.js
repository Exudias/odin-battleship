import "./styles.css";
import {Game} from "./scripts/game";
import {Ship} from "./scripts/ship";
import { DomManager } from "./scripts/dommanager";

const board1 = DomManager.findElementById("gameboard-1");
const board2 = DomManager.findElementById("gameboard-2");
const resetButton = DomManager.findElementById("button-restart");

(() => {
    resetButton.onclick = function(){resetGame()};

    const game = beginGame();
    setUpDOM(game);
})();

function beginGame()
{
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
    populateDOMBoard(board1);
    populateDOMBoard(board2, game);

    populateBoard(game.p1.board);
    populateBoard(game.p2.board);

    DomManager.renderBoardOnGrid(game.p1.board, board1);
    DomManager.renderBoardOnGrid(game.p2.board, board2);
}

function resetDOM()
{
    DomManager.removeAllChildren(board1);
    DomManager.removeAllChildren(board2);
}

function populateDOMBoard(board, game)
{
    for (let i = 0; i < 10; i++)
    {
        for (let j = 0; j < 10; j++)
        {
            let div = DomManager.createAndAddDiv(board);
            if (game)
            {
                const boardEntity = game.p2.board;
                div.onclick = function()
                {
                    let attackResult = boardEntity.receiveAttack([i, j]);
                    if (attackResult !== null)
                    {
                        DomManager.renderBoardOnGrid(boardEntity, board);
                        if (attackResult === false)
                        {
                            game.p2.attackAI(game.p1.board);
                            DomManager.renderBoardOnGrid(game.p1.board, board1);
                        }
                    }
                };
            }
        }
    }
}

function populateBoard(board)
{
    board.place(new Ship(5), [0, 0], true);
    board.place(new Ship(4), [0, 1], true);
    board.place(new Ship(3), [0, 2], true);
    board.place(new Ship(3), [0, 3], true);
    board.place(new Ship(2), [0, 4], true);
}