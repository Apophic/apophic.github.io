const secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
  const userGuess = document.getElementById('guessInput').value;

  if (!userGuess || userGuess < 1 || userGuess > 10) {
    alert('Please enter a valid number between 1 and 10.');
    return;
  }

  attempts++;

  if (userGuess == secretNumber) {
    displayResult(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
  } else {
    displayResult(`Incorrect! Try again.`);
  }
}

function displayResult(message) {
  document.getElementById('result').innerHTML = message;
  document.getElementById('guessInput').value = '';
}