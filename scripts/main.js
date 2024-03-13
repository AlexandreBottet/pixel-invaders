// Creation of a basic grid.

const pixelGrid = document.getElementById('pixel-grid');

let numOfRows = 8;
let numOfColumns = 8;

function createGrid() {
    pixelGrid.display = 'none';

    for (let i = 0; i < numOfRows; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
    
        for (let j = 0; j < numOfColumns; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
    
            cell.addEventListener('click', () => {
                const currentColor = cell.style.backgroundColor;
                cell.style.backgroundColor = currentColor === 'white' ? 'black' : 'white';
            })
    
            row.appendChild(cell);
        }
    
        pixelGrid.appendChild(row);
    }    
}

createGrid();

// Creation of a form for changing the size of a grid.

const form = document.getElementById('configuration');
const inputContainer = document.createElement('div');
inputContainer.classList.add('input-container');
const sizeInput = document.createElement('input');
sizeInput.classList.add('size-input');
sizeInput.placeholder = 'Taille de la grille';
const button = document.createElement('button');
button.innerText = 'Valider';

form.appendChild(inputContainer);
inputContainer.appendChild(sizeInput);
inputContainer.appendChild(button);

button.addEventListener('click', changeSizeOfGrid);

function changeSizeOfGrid () {
    numOfRows = sizeInput.value;
    numOfColumns = sizeInput.value;

    createGrid();
}
