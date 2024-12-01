let min = 0;
let max = 10;
let attempt = 3;
let randomnum = 0;
let curr_streak = 0;
let max_streak = 0;

document.getElementById('start').addEventListener('click', startGame);
document.getElementById('submit').addEventListener('click', checkGuess);
document.getElementById('restart').addEventListener('click', restartGame);

function startGame() {
    attempt = 3; // Reset the number of attempts
    randomnum = Math.floor(Math.random() * (max - min) + min); // Generate a random number between min and max

    document.getElementById('start').classList.add('hidden'); // Hide the start button
    document.getElementById('game').classList.remove('hidden'); // Show the game container
    document.getElementById('restart').classList.add('hidden'); // Hide the restart button
    
    document.getElementById('cstreak').textContent = `Current streak = ${curr_streak}`;
    document.getElementById('mstreak').textContent = `Max streak = ${max_streak}`;
    document.getElementById('streak').classList.remove('hidden');

    document.getElementById('guessed').disabled = false; // Enable the input field
    document.getElementById('submit').disabled = false; // Enable the submit button

    document.getElementById('attempts').textContent = `Number of attempts available: ${attempt}`; // Reset attempts display
    document.getElementById('feedback').textContent = ''; // Clear feedback
}

function checkGuess() {
    let guess = parseInt(document.getElementById('guessed').value); // Get the guessed value

    if (isNaN(guess) || guess < min || guess >= max) { // Validate input
        document.getElementById('feedback').textContent = `Please enter a valid number between ${min} and ${max - 1}.`;
        return;
    }

    if (guess === randomnum) { // Correct guess
        document.getElementById('feedback').textContent = `🎉🎉😍 Yay!! You guessed the correct number!`;
        
        curr_streak++;
        max_streak = max_streak < curr_streak ? curr_streak : max_streak;
        document.getElementById('cstreak').textContent = `Current streak = ${curr_streak}`;
        document.getElementById('mstreak').textContent = `Max streak = ${max_streak}`;
        
        endGame(); // End the game if the user guesses correctly
    } else {
        attempt--; // Decrease the number of attempts
        if (attempt > 0) {
            document.getElementById('feedback').textContent = guess < randomnum ? `Guess a bigger number` : `Guess a smaller number`;
            document.getElementById('attempts').textContent = `Number of attempts available: ${attempt}`;
        } else {
            document.getElementById('feedback').textContent = `You ran out of attempts. T-T The number was ${randomnum}.`;
            document.getElementById('attempts').textContent = `No attempts left.`;
            curr_streak = 0;
            document.getElementById('cstreak').textContent = `Current streak = ${curr_streak}`;
            endGame(); // End the game if attempts are over
        }
    }

    document.getElementById('guessed').value = ''; // Clear input field after each attempt
}

function endGame() {
    document.getElementById('guessed').disabled = true; // Disable input field
    document.getElementById('submit').disabled = true; // Disable submit button
    document.getElementById('restart').classList.remove('hidden'); // Show the restart button
}

function restartGame() {
    // Immediately start a new game
    startGame(); 
}

// Disable right-click menu to prevent inspecting
document.addEventListener('contextmenu', function (e) {
    e.preventDefault(); // Prevent the default context menu from appearing
    // alert('Right-click is disabled on this page.');
});

// Disable inspect element shortcuts
document.addEventListener('keydown', function (e) {
    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, and Ctrl+U
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) || 
        (e.ctrlKey && e.key === 'U')) {
        e.preventDefault(); // Prevent the default behavior of these keys
        // alert('Inspecting is disabled on this page.');
    }
});