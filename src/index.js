import "./styles.css";
import {Game} from "./scripts/game";
import {Ship} from "./scripts/ship";
import { DomManager } from "./scripts/dommanager";

(() => {
    const game = beginGame();
    
    const board1 = DomManager.findElementById("gameboard-1");
    const board2 = DomManager.findElementById("gameboard-2");

    populateDOMBoard(board1);
    populateDOMBoard(board2);

    populateBoard(game.p1.board);
    populateBoard(game.p2.board);

    DomManager.renderBoardOnGrid(game.p1.board, board1);
    DomManager.renderBoardOnGrid(game.p2.board, board2);

    game.p1.board.receiveAttack([0, 0]);
    game.p2.board.receiveAttack([6, 0]);

    DomManager.renderBoardOnGrid(game.p1.board, board1);
    DomManager.renderBoardOnGrid(game.p2.board, board2);
})();

function beginGame()
{
    const game = new Game();
    return game;
}

function populateDOMBoard(board)
{
    for (let i = 0; i < 10; i++)
    {
        for (let j = 0; j < 10; j++)
        {
            DomManager.createAndAddDiv(board);
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