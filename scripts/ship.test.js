const Ship = require("./ship");

it("Ship class exists", () => expect(Ship).toBeTruthy());

it("Ship length is correct after constructing", () => {
    const ship = new Ship(5);

    expect(ship.length).toBe(5);
});

it("Ship should have no hits after constructing", () => {
    const ship = new Ship(5);

    expect(ship.hits).toBe(0);
});

it("Ship should track hits appropriately", () => {
    const ship = new Ship(5);

    expect(ship.hits).toBe(0);
    ship.hit();
    expect(ship.hits).toBe(1);
    ship.hit();
    expect(ship.hits).toBe(2);
});

it("Ship should sink when appropriate", () => {
    const ship = new Ship(2);
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
});