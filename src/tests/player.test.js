import {Player} from "../scripts/player";
import {Gameboard} from "../scripts/gameboard";

it("Player should be able to be a human", () => {
    const p = new Player(true);

    expect(p.human).toBe(true);
});

it("Player should be able to be a CPU", () => {
    const p = new Player(false);

    expect(p.human).toBe(false);
});

it("Player should hold a board to represent its state", () => {
    const p = new Player(false);

    expect(p.board).toBeInstanceOf(Gameboard);
})