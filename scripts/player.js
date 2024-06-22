const Gameboard = require("./gameboard");

class Player
{
    constructor(human)
    {
        this.human = human;
        this.board = new Gameboard();
    }
}

module.exports = Player;