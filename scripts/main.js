const pixelGrid = document.getElementById('pixel-grid');
const inputContainer = document.createElement('div');
const form = document.getElementById('configuration');
const sizeInput = document.createElement('input');
const button = document.createElement('button');


inputContainer.classList.add('input-container');
sizeInput.classList.add('size-input');
sizeInput.placeholder = 'Taille de la grille';
button.innerText = 'Valider';

form.appendChild(inputContainer);
inputContainer.appendChild(sizeInput);
inputContainer.appendChild(button);

button.addEventListener('click', changeSizeOfGrid);

function createCell() {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    
    cell.addEventListener('click', () => {
        const currentColor = cell.style.backgroundColor;
        cell.style.backgroundColor = currentColor === 'white' ? 'black' : 'white';
    });
    return cell;
}

function createGrid() {
    while (pixelGrid.firstChild) {
        pixelGrid.removeChild(pixelGrid.firstChild);
    }

    for (let i = 0; i < numOfRows; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
    
        for (let j = 0; j < numOfColumns; j++) {
            row.appendChild(createCell());
        }
    
        pixelGrid.appendChild(row);
    }    
}

function changeSizeOfGrid () {
    numOfRows = parseInt(sizeInput.value);
    numOfColumns = parseInt(sizeInput.value);

    createGrid();
}

let numOfRows = 8;
let numOfColumns = 8;
createGrid();