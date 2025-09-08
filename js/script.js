document.addEventListener('DOMContentLoaded', function() {
    const game = new Game();
    
    if (window.MESSAGES) {
        document.getElementById('game-title').textContent = window.MESSAGES.GAME_TITLE;
        document.getElementById('button-count-label').textContent = window.MESSAGES.BUTTON_COUNT_PROMPT;
        document.getElementById('go-button').textContent = window.MESSAGES.CREATE_BUTTONS;
    }
    
    document.getElementById('go-button').addEventListener('click', function() {
        const count = parseInt(document.getElementById('button-count').value);
        
        if (count >= 3 && count <= 7) {
            game.startGame(count);
        } else {
            alert(window.MESSAGES ? window.MESSAGES.INVALID_INPUT : 'Please enter a number between 3 and 7');
        }
    });
});