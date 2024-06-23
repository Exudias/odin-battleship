import "./styles.css";
import {Game} from "./scripts/game";
import {Ship} from "./scripts/ship";
import { DomManager } from "./scripts/dommanager";

(() => {
    const game = beginGame();
    // TODO: Populate DOM boards with 10x10 divs, store them somewhere appropriate 
    populateBoard(game.p1.board);
    populateBoard(game.p2.board);
})();

function beginGame()
{
    const game = new Game();
    return game;
}

function populateBoard(board)
{
    board.place(new Ship(5), [0, 0], true);
    board.place(new Ship(4), [0, 1], true);
    board.place(new Ship(3), [0, 2], true);
    board.place(new Ship(3), [0, 3], true);
    board.place(new Ship(2), [0, 4], true);
}