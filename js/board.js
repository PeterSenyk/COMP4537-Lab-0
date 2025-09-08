class Board {
    constructor() {
        this.buttonWidth = 10 * 16; 
        this.buttonHeight = 5 * 16; 
        this.gridPositions = [];
        this.usedPositions = [];
    }

    calculateGrid() {
        this.gridPositions = [];
        this.usedPositions = []; 
        
        const cellWidth = 180; 
        const cellHeight = 100; 
        
        const maxX = window.innerWidth - this.buttonWidth - 20; 
        const maxY = window.innerHeight - this.buttonHeight - 20; 
        
        const cols = Math.floor(maxX / cellWidth);
        const rows = Math.floor(maxY / cellHeight);
        

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const x = col * cellWidth + 20;
                const y = row * cellHeight + 20;
                
                if (x <= maxX && y <= maxY) {
                    this.gridPositions.push({ x, y });
                }
            }
        }
    }

    getRandomPosition() {
        if (this.gridPositions.length === 0) {
            console.log('No grid positions available, using fallback');
            const maxX = window.innerWidth - this.buttonWidth - 20;
            const maxY = window.innerHeight - this.buttonHeight - 20;
            return {
                x: Math.random() * Math.max(0, maxX) + 20,
                y: Math.random() * Math.max(0, maxY) + 20
            };
        }
        
        const availablePositions = this.gridPositions.filter(pos => 
            !this.usedPositions.some(used => 
                used.x === pos.x && used.y === pos.y
            )
        );
        
        console.log('Available positions:', availablePositions.length, 'out of', this.gridPositions.length);
        
        if (availablePositions.length === 0) {
            console.log('All positions used, using fallback');
            const maxX = window.innerWidth - this.buttonWidth - 20;
            const maxY = window.innerHeight - this.buttonHeight - 20;
            return {
                x: Math.random() * Math.max(0, maxX) + 20,
                y: Math.random() * Math.max(0, maxY) + 20
            };
        }
        
        const randomIndex = Math.floor(Math.random() * availablePositions.length);
        const selectedPosition = availablePositions[randomIndex];
        
        this.usedPositions.push(selectedPosition);
        
        console.log('Selected position:', selectedPosition);
        return selectedPosition;
    }
}