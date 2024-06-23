import {Player} from "./player";

class Game
{
    constructor()
    {
        this.p1 = new Player(true);
        this.p2 = new Player(false);
    }
}

export {Game};