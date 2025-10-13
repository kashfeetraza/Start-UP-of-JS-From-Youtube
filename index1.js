let randomNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
let guess = prompt("Guess a number between 1 and 10:");

if (Number(guess) === randomNumber) {
  console.log("🎉 Correct! You guessed the number!");
} else {
  console.log("❌ Wrong! The number was " + randomNumber);
}
