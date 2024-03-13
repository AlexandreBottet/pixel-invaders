const app = {
    pixelGrid: document.getElementById('pixel-grid'),
    form: document.getElementById('configuration'),
    sizeInput: null,
    button: null,
    numOfRows: 8,
    numOfColumns: 8,

    createGrid() {
        while (this.pixelGrid.firstChild) {
            this.pixelGrid.removeChild(this.pixelGrid.firstChild);
        }

        for (let i = 0; i < this.numOfRows; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
        
            for (let j = 0; j < this.numOfColumns; j++) {
                row.appendChild(this.createCell());
            }
        
            this.pixelGrid.appendChild(row);
        }    
    },

    createCell() {
        const cell = document.createElement('div');
        cell.classList.add('cell');
    
        cell.addEventListener('click', () => {
            const currentColor = cell.style.backgroundColor;
            cell.style.backgroundColor = currentColor === 'white' ? 'black' : 'white';
        });
        return cell;
    },

    createInputContainer() {
        const inputContainer = document.createElement('div');
        inputContainer.classList.add('input-container');
        this.sizeInput = document.createElement('input');
        this.sizeInput.classList.add('size-input');
        this.sizeInput.placeholder = 'Taille de la grille';
        this.button = document.createElement('button');
        this.button.innerText = 'Valider';
        this.button.addEventListener('click', this.changeSizeOfGrid.bind(this));
        inputContainer.appendChild(this.sizeInput);
        inputContainer.appendChild(this.button);
        this.form.appendChild(inputContainer);
    },

    changeSizeOfGrid() {
        const newSize = this.sizeInput.value;
 
        this.numOfRows = newSize;
        this.numOfColumns = newSize;
        this.createGrid();
            
    },

    init() {
        this.createInputContainer();
        this.createGrid();
    }
}

app.init();