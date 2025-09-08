class Game {
    constructor() {
        this.buttons = [];
        this.buttonCount = 0;
        this.board = new Board();
        this.currentStep = 0;
        this.isActive = false;

        //list of hex colors provided by ChatGPT
        this.colors = [
            '#FF6B6B', // Coral Red
            '#4ECDC4', // Turquoise
            '#F7DC6F', // Golden Yellow
            '#45B7D1', // Sky Blue
            '#82E0AA', // Light Green
            '#BB8FCE', // Light Purple
            '#F1948A', // Salmon
            '#D5A6BD', // Rose
            '#85C1E9', // Light Blue
            '#98D8C8'  // Seafoam
          ];
    }

    startGame(count) {
        this.reset();
        this.buttonCount = count;
        this.createButtons();
        this.showNumbersFirst();
    }

    createButtons() {
        const gameArea = document.getElementById('game-area');
        gameArea.innerHTML = '';
        this.board.calculateGrid();
        
        const shuffledColors = [...this.colors].sort(() => Math.random() - 0.5);
        
        for (let i = 0; i < this.buttonCount; i++) {
            const button = new Button(i + 1, shuffledColors[i]);
            button.element.style.position = 'absolute';
            button.element.style.left = (i * 240 + 50) + 'px'; 
            button.element.style.top = '100px';
            
            gameArea.appendChild(button.element);
            this.buttons.push(button);
        }
    }

    showNumbersFirst() {
        this.buttons.forEach(btn => btn.showNumber());
        
        setTimeout(() => {
            this.buttons.forEach(btn => btn.hideNumber());
            this.startScramblingAnimation();
        }, this.buttonCount * 1000);
    }

    startScramblingAnimation() {
        let scrambleCount = 0;
        
        const scramble = () => {
            if (scrambleCount >= this.buttonCount) {
                this.startMemoryTest();
                return;
            }
            
            this.board.calculateGrid();
            this.arrangeButtons();
            scrambleCount++;
            setTimeout(scramble, 2000);
        };
        
        scramble();
    }

    arrangeButtons() {
        this.buttons.forEach(btn => {
            const position = this.board.getRandomPosition();
            btn.element.style.left = position.x + 'px';
            btn.element.style.top = position.y + 'px';
        });
    }

    startMemoryTest() {
        this.isActive = true;
        this.currentStep = 0;
        
        this.buttons.forEach(btn => {
            btn.element.onclick = () => this.handleClick(btn);
        });
    }

    handleClick(clickedButton) {
        if (!this.isActive) return;
        
        if (clickedButton.number === this.currentStep + 1) {
            clickedButton.showNumber();
            this.currentStep++;
            
            if (this.currentStep === this.buttonCount) {
                alert(window.MESSAGES?.EXCELLENT_MEMORY || 'Excellent memory!');
                this.reset();
            }
        } else {
            alert(window.MESSAGES?.WRONG_ORDER || 'Wrong order!');
            this.buttons.forEach(btn => btn.showNumber());
            this.reset();
        }
    }

    reset() {
        this.buttons = [];
        this.currentStep = 0;
        this.isActive = false;
    }
}