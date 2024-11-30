let min = 0;
let max = 10;
let attempt = 3;
let randomnum;

document.getElementById('start').addEventListener('click', startGame);
document.getElementById('submit').addEventListener('click', checkGuess);

function startGame() {
    attempt = 3;
    randomnum = Math.floor(Math.random() * 10);

    document.getElementById('start').classList.add('hidden');
    document.getElementById('game').classList.remove('hidden');
    document.getElementById('guessed').disabled = false;
    document.getElementById('submit').disabled = false;

    document.getElementById('attempts').textContent = `Number of attempts available: ${attempt}`;
    document.getElementById('feedback').textContent = '';
}

function checkGuess() {
    let guess = parseInt(document.getElementById('guessed').value);
    if (attempt > 1) {
        attempt--;
        if (isNaN(guess) || guess < 0 || guess > 9) {
            document.getElementById('feedback').textContent = `Please enter a valid number between 0 and 9.`;
        } else {
            if (guess === randomnum) {
                document.getElementById('feedback').textContent = `🎉🎉😍 Yay!! you guessed the correct number`;
                endGame();
            } else if (guess < randomnum) {
                document.getElementById('feedback').textContent = `Guess a bigger number`;
            } else {
                document.getElementById('feedback').textContent = `Guess a smaller number`;
            }
        }
        document.getElementById('attempts').textContent = `Number of attempts available: ${attempt}`;
    } else {
        attempt--;
        document.getElementById('feedback').textContent = `You ran out of attempts T-T`;
        document.getElementById('attempts').textContent = `Number of attempts available: ${attempt}`;
        endGame();
    }
}

function endGame() {
    document.getElementById('guessed').disabled = true;
    document.getElementById('submit').disabled = true;
    alert('Game over! Click OK to restart.');
    startGame();
}

// Disable inspect element
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.shiftKey && e.key === 'J') || (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
    }
});