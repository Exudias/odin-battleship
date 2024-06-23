const Gameboard = require("../scripts/gameboard");
const Ship = require("../scripts/ship");

it("Gameboard should place ships into an array", () => {
    const gameboard = new Gameboard();
    gameboard.place(new Ship(3), [0, 0], false);

    expect(gameboard.ships.length).toBe(1);
});

it("Gameboard should place ships horizontally at coordinates and store them", () => {
    const gameboard = new Gameboard();
    const ship = new Ship(3);
    gameboard.place(ship, [1, 1], false);

    expect(gameboard.grid[1][1]).toBe(ship);
    expect(gameboard.grid[1][2]).toBe(ship);
    expect(gameboard.grid[1][3]).toBe(ship);
});

it("Gameboard should place ships vertically at coordinates and store them", () => {
    const gameboard = new Gameboard();
    const ship = new Ship(3);
    gameboard.place(ship, [1, 1], true);

    expect(gameboard.grid[1][1]).toBe(ship);
    expect(gameboard.grid[2][1]).toBe(ship);
    expect(gameboard.grid[3][1]).toBe(ship);
});

it("Gameboard should reject horizontal OOB placements", () => {
    const gameboard = new Gameboard();
    const ship = new Ship(2);
    expect(gameboard.place(ship, [9, 9], false)).toBe(false);

    expect(gameboard.ships.length).toBe(0);
    expect(gameboard.grid[9][9]).toBe(null);
});

it("Gameboard should reject vertical OOB placements", () => {
    const gameboard = new Gameboard();
    const ship = new Ship(2);
    expect(gameboard.place(ship, [9, 9], true)).toBe(false);

    expect(gameboard.ships.length).toBe(0);
    expect(gameboard.grid[9][9]).toBe(null);
});

it("Gameboard should allow corner placements (bottom-right)", () => {
    const gameboard = new Gameboard();
    const ship = new Ship(1);
    expect(gameboard.place(ship, [9, 9], true)).toBe(true);

    expect(gameboard.ships.length).toBe(1);
    expect(gameboard.grid[9][9]).toBe(ship);
});

it("Gameboard should allow corner placements (top-left)", () => {
    const gameboard = new Gameboard();
    const ship = new Ship(1);
    expect(gameboard.place(ship, [0, 0], true)).toBe(true);

    expect(gameboard.ships.length).toBe(1);
    expect(gameboard.grid[0][0]).toBe(ship);
});

it("Gameboard should be able to handle attacks properly - hit ship/don't", () => {
    const gameboard = new Gameboard();
    const ship = new Ship(2);
    gameboard.place(ship, [2, 3], false);

    const spyHit = jest.spyOn(ship, "hit");

    expect(spyHit).toHaveBeenCalledTimes(0);

    expect(gameboard.receiveAttack([2, 3])).toBe(true);
    expect(spyHit).toHaveBeenCalledTimes(1);

    expect(gameboard.receiveAttack([3, 5])).toBe(false);
    expect(spyHit).toHaveBeenCalledTimes(1);

    expect(gameboard.receiveAttack([3, 5])).toBe(null);
    expect(spyHit).toHaveBeenCalledTimes(1);
})

it("Gameboard should be able to record attacks properly", () => {
    const gameboard = new Gameboard();
    const ship = new Ship(2);
    gameboard.place(ship, [2, 3], false);

    gameboard.receiveAttack([2, 3]);
    expect(gameboard.grid[2][3]).toBe("H");

    gameboard.receiveAttack([3, 5]);
    expect(gameboard.grid[3][5]).toBe("X");

    gameboard.receiveAttack([3, 5]);
    expect(gameboard.grid[3][5]).toBe("X");
});

it("Gameboard should report if all ships are sunk", () => {
    const gameboard = new Gameboard();
    const ship = new Ship(2);
    gameboard.place(ship, [2, 3], false);

    expect(gameboard.allShipsSunk()).toBe(false);

    gameboard.receiveAttack([2, 3]);

    expect(gameboard.allShipsSunk()).toBe(false);

    gameboard.receiveAttack([2, 4]);

    expect(gameboard.allShipsSunk()).toBe(true);
});

it("Gameboard should not allow the same ship to be placed twice", () => {
    const gameboard = new Gameboard();
    const ship = new Ship(2);

    expect(gameboard.ships.length).toBe(0);
    expect(gameboard.place(ship, [2, 3], false)).toBe(true);
    expect(gameboard.ships.length).toBe(1);
    expect(gameboard.place(ship, [7, 4], false)).toBe(false);
    expect(gameboard.ships.length).toBe(1);
});

it("Gameboard should not allow overlapping ships to be placed", () => {
    const gameboard = new Gameboard();
    const ship1 = new Ship(2);
    const ship2 = new Ship(2);

    expect(gameboard.ships.length).toBe(0);
    expect(gameboard.place(ship1, [2, 3], false)).toBe(true);
    expect(gameboard.ships.length).toBe(1);
    expect(gameboard.place(ship2, [2, 4], false)).toBe(false);
    expect(gameboard.ships.length).toBe(1);
});