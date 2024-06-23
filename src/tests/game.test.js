import {Game} from "../scripts/game";
import {Gameboard} from "../scripts/gameboard";

it("Upon game creation, have 2 players with gameboards", () => {
    let game = new Game();

    expect(game.p1).toBeDefined();
    expect(game.p2).toBeDefined();
    expect(game.p1.board).toBeInstanceOf(Gameboard);
    expect(game.p2.board).toBeInstanceOf(Gameboard);
});

it("Upon game creation, player 1 is human, player 2 is not", () => {
    let game = new Game();

    expect(game.p1.human).toBe(true);
    expect(game.p2.human).toBe(false);
});