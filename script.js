// Generate a random number between 1 and 10
const userName = prompt("What is your name?");
const randomNumber = Math.floor(Math.random() * 5) + 1;
let userInput = document.querySelector(".userInput");
const chkbtn = document.getElementById("chkbtn");
let ansDisplay = document.getElementById("ansDisplay");
const container = document.getElementById("container");
const body = document.getElementById("body");
const description = document.getElementById("description");


// Initialize the number of guesses to zero
let guesses = 0;
console.log( "random number is "+randomNumber);

chkbtn.addEventListener("click", function(e) {
    // Loop three times to give the user three chances to guess the number
    // Prompt the user to enter their guess
    const guess = parseInt(userInput.value);
    console.log( "Guess is " + guess );
    console.log(typeof guess);
    userInput.value = ""
   
  
    // If the user's guess is correct, display a message and break out of the loop
    if (guess === randomNumber) {
        description.innerHTML = `Hello ${userName} ♥`
        ansDisplay.innerHTML = `Congratulations🍾. Your guess was correct. The hidden number is ${randomNumber} Refresh to play again` ;
        body.style.backgroundColor = "black";
        body.style.color = "#00ff00";
        userInput.style.display = "none"
        chkbtn.style.display = "none"

        
      
      
    } 
    else
    {
         // If the user's guess is incorrect, increment the number of guesses and display a message
           guesses++;
         ansDisplay.innerHTML = `Incorrect, you have ${3 - guesses} guesses remaining.`;
         console.log(guesses);
    }
    // If the user has used up all their guesses and has not guessed correctly, display a message with the correct answer
if (guesses === 3) {
    ansDisplay.innerHTML = `Sorry, you have run out of guesses. The correct number was ${randomNumber}. Refresh the page to start again`;
        description.innerHTML = `Hello ${userName} ♥`
        body.style.backgroundColor = "black";
        body.style.color = "red";
        userInput.style.display = "none"
        chkbtn.style.display = "none"
  }
   
    
})


