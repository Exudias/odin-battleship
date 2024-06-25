import { Ship } from "./ship";

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

    static renderBoardOnGrid(board, grid)
    {
        const boardGrid = board.grid;
        const boardSize = boardGrid.length;
        for (let i = 0; i < boardSize; i++)
        {
            for (let j = 0; j < boardSize; j++)
            {
                const gridIndex = i * boardSize + j;
                if (boardGrid[i][j] === null)
                {
                    grid.children[gridIndex].className = "";
                }
                else if (boardGrid[i][j] instanceof Ship)
                {
                    grid.children[gridIndex].className = "ship";
                }
                else if (boardGrid[i][j] === "H")
                {
                    grid.children[gridIndex].className = "hit";
                }
                else if (boardGrid[i][j] === "X")
                {
                    grid.children[gridIndex].className = "miss";
                }
            }
        }
    }

    static removeAllChildren(node)
    {
        node.innerHTML = "";
    }
}

export {DomManager};