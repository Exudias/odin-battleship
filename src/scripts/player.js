import {Gameboard} from "./gameboard";

class Player
{
    constructor(human)
    {
        this.human = human;
        this.board = new Gameboard();
    }
}

export {Player};