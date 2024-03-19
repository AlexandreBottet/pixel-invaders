const app = {
    pixelGrid: document.getElementById('pixel-grid'),
    form: document.getElementById('configuration'),
    sizeInput: null,
    pixelInput: null,
    button: null,
    numOfRows: 8,
    numOfColumns: 8,
    pixelWidth: '15px',
    pixelHeigth: '15px',

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
        cell.style.width = this.pixelWidth;
        cell.style.height = this.pixelHeigth;
    
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
        
        this.pixelInput = document.createElement('input');
        this.pixelInput.classList.add('pixel-input');
        this.pixelInput.placeholder = 'Taille des pixels';

        this.button = document.createElement('button');
        this.button.innerText = 'Valider';

        inputContainer.appendChild(this.sizeInput);
        inputContainer.appendChild(this.pixelInput)
        inputContainer.appendChild(this.button);
        this.form.appendChild(inputContainer);

        this.form.addEventListener('submit', this.changeConfigurationOfGrid.bind(this));
    },

    changeSizeOfGrid() {
        const newSize = this.sizeInput.value;

        this.numOfRows = newSize;
        this.numOfColumns = newSize;
    },
    
    changePixelSize() {
        const newSize = this.pixelInput.value;

        this.pixelWidth = `${newSize}px`;
        this.pixelHeigth = `${newSize}px`;
    },

    changeConfigurationOfGrid(e) {
        e.preventDefault();

        if (!this.sizeInput.value || !this.pixelInput.value) {
            this.showError('Veuillez remplir les deux champs.');
            return;
        } else if (this.sizeInput.value < 4 || this.sizeInput.value > 40) {
            this.showError('Veuillez entrer une valeur comprise entre 4 et 40 pour la taille de la grille.');
            return;
        } else if (this.pixelInput.value < 10 || this.pixelInput.value > 20) {
            this.showError('Veuillez entrer une valeur comprise entre 10 et 20 pour pouvoir changer la taille des pixels.');
            return;
        }

        this.changePixelSize();
        this.changeSizeOfGrid();
        this.createGrid();
    },

    showError(message) {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = message;
        errorMessage.id = 'error-message';
        this.form.appendChild(errorMessage);
        setTimeout(() => {
            this.form.removeChild(errorMessage);
        }, 3000)
    },

    init() {
        this.createInputContainer();
        this.createGrid();
    }
}

app.init();