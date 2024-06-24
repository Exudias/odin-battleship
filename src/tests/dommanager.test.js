/**
 * @jest-environment jsdom
 */

import { DomManager } from "../scripts/dommanager";

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