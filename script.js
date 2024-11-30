let min = 0;
let max = 10;
let attempt = 3;
let randomnum;

document.getElementById('start').addEventListener('click',startGame);
document.getElementById('submit').addEventListener('click',checkGuess);

function startGame(){
    //hide start button
    attempt = 3;
    randomnum = Math.floor(Math.random() * 10);

    document.getElementById('start').classList.add('hidden');

    //show game
    document.getElementById('game').classList.remove('hidden');

    //show attempts left
    document.getElementById('attempts').textContent = `Number of attempts available: ${attempt}`;
}

function checkGuess(){
    let guess = parseInt(document.getElementById('guessed').value);
    if(attempt>1){
        attempt--;
        if(isNaN(guess) || guess < 0 || guess > 9){
            //give the idiot feedback
            document.getElementById('feedback').textContent = `Dumb shit give correct input, IDIOT!!`;
        }
        else{
            if(guess === randomnum){
                document.getElementById('feedback').textContent = `🎉🎉😍 Yay!! you guessed the correct number`;
                endGame();
            }
            else if(guess < randomnum){
                document.getElementById('feedback').textContent = `Guess a bigger number`;
            }
            else{
                document.getElementById('feedback').textContent = `Guess a smaller number`;
            }
        }
        //show attempts left
        document.getElementById('attempts').textContent = `Number of attempts available: ${attempt}`;
}
    else{
        attempt--;
        document.getElementById('feedback').textContent = `You ran out of attempts T-T`;
        document.getElementById('attempts').textContent = `Number of attempts available: ${attempt}`;
        endGame();
    }
}

function endGame(){
    document.getElementById('guessed').disabled = true;
    document.getElementById('submit').disabled = true;
}