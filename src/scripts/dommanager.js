class DomManager
{
    static createAndAddDiv(parent)
    {
        const newDiv = document.createElement("div");
        parent.appendChild(newDiv);
        return newDiv;
    }

    static findElementById(id)
    {
        return document.getElementById(id);
    }
}

export {DomManager};