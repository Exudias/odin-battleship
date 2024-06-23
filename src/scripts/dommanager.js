class DomManager
{
    static createAndAddDiv(parent)
    {
        const newDiv = document.createElement("div");
        parent.appendChild(newDiv);
        return newDiv;
    }
}

export {DomManager};