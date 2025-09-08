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
    }

    showNumber() {
        this.element.textContent = this.number;
    }

    hideNumber() {
        this.element.textContent = '';
    }
}