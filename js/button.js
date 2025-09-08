class Button {
    constructor(number, color) {
        this.number = number;
        this.color = color;
        this.element = null;
    }

    createElement() {
        this.element = document.createElement('button');
        this.element.textContent = this.number;
        this.element.style.backgroundColor = this.color;
        this.element.style.width = '10em';
        this.element.style.height = '5em';
        this.element.style.border = '2px solid #333';
        this.element.style.borderRadius = '8px';
        this.element.style.cursor = 'pointer';
        this.element.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
        this.element.style.transition = 'transform 0.1s ease';
        this.element.style.fontSize = '1.5em';
        this.element.style.fontWeight = 'bold';
        this.element.style.color = 'white';
        this.element.style.textShadow = '1px 1px 2px rgba(0,0,0,0.5)';
        
        // Add hover effect
        this.element.addEventListener('mouseenter', () => {
            this.element.style.transform = 'scale(1.05)';
        });
        
        this.element.addEventListener('mouseleave', () => {
            this.element.style.transform = 'scale(1)';
        });
    }

    showNumber() {
        this.element.textContent = this.number;
    }

    hideNumber() {
        this.element.textContent = '';
    }
}