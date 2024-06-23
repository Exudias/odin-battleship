import {Ship} from "./ship";

class Gameboard
{
    constructor()
    {
        const GRID_SIZE = 10;

        this.ships = [];
        this.grid = this._createGrid(GRID_SIZE);
    }

    place(ship, coords, vertical)
    {
        // Check if ship already on board
        if (this.ships.includes(ship)) return false;

        let gridSize = this.grid.length;

        let startX = coords[1];
        let startY = coords[0];
        let endX = startX + (ship.length - 1) * !vertical;
        let endY = startY + (ship.length - 1) * vertical;

        // Check if OOB
        if (endX >= gridSize || endY >= gridSize) return false;

        // Check if overlaps other ships
        for (let i = 0; i < ship.length; i++)
        {
            let posY = startY + (i * vertical);
            let posX = startX + (i * !vertical);
            if (this.grid[posY][posX] instanceof Ship)
            {
                return false;
            }
        }

        this.ships.push(ship);

        for (let i = 0; i < ship.length; i++)
        {
            let posY = startY + (i * vertical);
            let posX = startX + (i * !vertical);
            this.grid[posY][posX] = ship;
        }

        return true;
    }

    receiveAttack(coords)
    {
        let attackX = coords[1];
        let attackY = coords[0];

        let hitSquare = this.grid[attackY][attackX];
        if (hitSquare === "H" || hitSquare === "X") return null;

        if (hitSquare instanceof Ship)
        {
            hitSquare.hit();
            this.grid[attackY][attackX] = "H"
            return true;
        }

        this.grid[attackY][attackX] = "X";
        return false;
    }

    allShipsSunk()
    {
        for (let i = 0; i < this.ships.length; i++)
        {
            if (!this.ships[i].isSunk()) return false;
        }

        return true;
    }

    _createGrid(size)
    {
        let grid = [];
        for (let i = 0; i < size; i++)
        {
            let row = [];
            for (let j = 0; j < size; j++)
            {
                row.push(null);
            }
            grid.push(row);
        }

        return grid;
    }
}

export {Gameboard};