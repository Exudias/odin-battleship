import {Gameboard} from "./gameboard";

class Player
{
    constructor(human)
    {
        this.human = human;
        this.board = new Gameboard();
    }

    attackAI(enemyBoard)
    {
        const boardSize = enemyBoard.grid.length;
        let result = null;
        while (result === null)
        {
            let x = Math.floor(Math.random() * boardSize);
            let y = Math.floor(Math.random() * boardSize);
            result = enemyBoard.receiveAttack([y, x]);
        }
        if (result === true)
        {
            this.attackAI(enemyBoard);
        }
    }
}

export {Player};