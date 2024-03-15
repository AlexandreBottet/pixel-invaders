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

        if (newSize <= 45) {
            this.numOfRows = newSize;
            this.numOfColumns = newSize;
        } else {
            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Il ne faut pas abuser des bonnes choses. S\'il te plaît, veille à ne rentrer qu\'une valeur inférieure à 46. Merci.';
            errorMessage.id = 'error-message';
            this.form.appendChild(errorMessage);
            setTimeout(() => {
                this.form.removeChild(errorMessage);
            }, 5000)
        }
    },
    
    changePixelSize() {
        const newSize = this.pixelInput.value;

        this.pixelWidth = `${newSize}px`;
        this.pixelHeigth = `${newSize}px`;    
    },

    changeConfigurationOfGrid(e) {
        e.preventDefault();
        this.changeSizeOfGrid();
        this.changePixelSize();
        this.createGrid();
    },

    init() {
        this.createInputContainer();
        this.createGrid();
    }
}

app.init();