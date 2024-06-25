/**
 * @jest-environment jsdom
 */

import { DomManager } from "../scripts/dommanager";
import { Gameboard } from "../scripts/gameboard";
import { Ship } from "../scripts/ship";

it("createAndAddDiv should return a div that is a child of the input", () => {
    const dummyParent = document.createElement("div");

    const spyAppendChild = jest.spyOn(dummyParent, "appendChild");

    expect(spyAppendChild).toHaveBeenCalledTimes(0);

    const newDiv = DomManager.createAndAddDiv(dummyParent);
    
    expect(newDiv).toBeInstanceOf(HTMLDivElement);
    expect(spyAppendChild).toHaveBeenCalledTimes(1);
    expect(spyAppendChild.mock.calls[0][0]).toBe(newDiv);
});

it("findElementById should return the element with the supplied ID", () => {
    const dummyElement = document.createElement("div");
    dummyElement.id = "test";
    document.body.appendChild(dummyElement);

    expect(DomManager.findElementById("test")).toBe(dummyElement);
});

it("renderBoardOnGrid should take a board state and a grid div and render the state on the div", () => {
    const gameboard = new Gameboard();
    const ship = new Ship(2);
    gameboard.place(ship, [0, 0], false);

    const dummyGrid = document.createElement("div");
    for (let i = 0; i < 10; i++)
    {
        for (let j = 0; j < 10; j++)
        {
            DomManager.createAndAddDiv(dummyGrid);
        }
    }

    gameboard.receiveAttack([8, 8]);
    gameboard.receiveAttack([0, 1]);

    DomManager.renderBoardOnGrid(gameboard, dummyGrid);
    expect(dummyGrid.children[0].classList).toContain("ship");
    expect(dummyGrid.children[1].classList).toContain("hit");
    expect(dummyGrid.children[88].classList).toContain("miss");
});