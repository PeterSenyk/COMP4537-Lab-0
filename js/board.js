class Board {
    constructor() {
        this.gridPositions = [];
        this.usedPositions = [];
    }

    calculateGrid() {
        this.gridPositions = [];
        this.usedPositions = [];
        
        const cellWidth = 180;
        const cellHeight = 100;
        const maxX = window.innerWidth - 200;
        const maxY = window.innerHeight - 200;
        
        const cols = Math.floor(maxX / cellWidth);
        const rows = Math.floor(maxY / cellHeight);

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                this.gridPositions.push({
                    x: col * cellWidth + 20,
                    y: row * cellHeight + 20
                });
            }
        }
    }

    getRandomPosition() {
        const availablePositions = this.gridPositions.filter(pos => 
            !this.usedPositions.some(used => 
                used.x === pos.x && used.y === pos.y
            )
        );
        
        if (availablePositions.length === 0) {
            return {
                x: Math.random() * (window.innerWidth - 200) + 20,
                y: Math.random() * (window.innerHeight - 200) + 20
            };
        }
        
        const randomIndex = Math.floor(Math.random() * availablePositions.length);
        const selectedPosition = availablePositions[randomIndex];
        this.usedPositions.push(selectedPosition);
        return selectedPosition;
    }
}
