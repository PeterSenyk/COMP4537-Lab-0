class Button {
    constructor(number, color) {
        this.number = number;
        this.color = color;
        this.element = document.createElement('button');
        this.element.textContent = number;
        this.element.style.backgroundColor = color;
    }

    showNumber() {
        this.element.textContent = this.number;
    }

    hideNumber() {
        this.element.textContent = '';
    }
}