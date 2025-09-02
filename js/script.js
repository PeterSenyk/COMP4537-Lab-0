class Game {
    constructor(amount) {
        this.amount = amount
        for (let i = 0; i < amount; i++){
            const button = new Button
        }

    }
}




class Button {
      constructor(number, color) {
        this.number = number;
        this.color = color;
        this.height = 5;
        this.width = 10;
      }
    }

function CreateButton(nuber) {
    return new Button{
        number: number;
        color: RandomHexColor;
    }
}

function RandomHexColor() {
    // 16777215 = FFFFFF(hex)
    let randomHex = Math.floor(Math.random() * 16777215)
    let hexColor = randomNum.toString(16);
    hexColor = hexColor.padStart(6, '0');

    return '#' + hexColor;
}

