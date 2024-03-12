// Creation of a board.

const pixelGrid = document.getElementById('pixel-grid');

let numOfRows = 8;
let numOfColumns = 8;

for (let i = 0; i < numOfRows; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < numOfColumns; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        row.appendChild(cell);
    }

    pixelGrid.appendChild(row);
}
