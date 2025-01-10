// PSEUDOCODE
// START
// Define variables for user input and computer input
let userInput;
let validSelection;
const computerInput = computerSelection();

// 	Ask user for to select between "Rock", "Paper" or "Scissors
function askUser() {
	let userInput = prompt("Choose \"Rock\" \"Paper\" or \"Scissors\": ");
	return userInput;
}
// Check to see if user entered a valid selection
function checkUserInput(userInput) {
	let validSelection;
	if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
		validSelection = true;
	} else {
		validSelection = false;
	}
	return validSelection;
}
// Randomly generate computer input
function computerSelection() {
	const validOptions = ["Rock", "Paper", "Scissors"];
	const computerInput = Math.floor(Math.random() * validOptions.length);
	return validOptions[computerInput];
}
// Declare function to check for win condition
// Define variable for result
// If user input and computer input are equal, then result equals "Tie"
// Else
// 					If user input equals "Rock" and computer input equals "Paper" then result equals "Lose" 
// 						Else result equals "Win"
// 					If user input equals "Paper" and computer input equals "Scissors" then result equals "Lose" 
// 						Else result equals "Win"
// 					If user input equals "Scissors" and computer input equals "Rock" then result equals "Lose" 
// 						Else result equals "Win"
// 			Return result
function winCondition(userInput, computerInput) {
	let winMessage;
	if (userInput.toLowerCase() === computerInput.toLowerCase()) {
		winMessage = "Tie";
	} else if (userInput.toLowerCase() === "rock" && computerInput.toLowerCase() === "paper") {
		winMessage = "You lose!";
	} else if (userInput.toLowerCase() === "paper" && computerInput.toLowerCase() === "scissors") {
		winMessage = "You lose!";
	} else if (userInput.toLowerCase() === "scissors" && computerInput.toLowerCase() === "rock") {
		winMessage = "You lose!";
	} else {
		winMessage = "You win!";
	}
	return winMessage;
}
// Activate functions
userInput = askUser();
validSelection = checkUserInput(userInput.toLowerCase());

// not working correctly if user cancels after second failed input
	while (validSelection === false) {
		if (confirm("Invalid selection, try again?") === true) {
			userInput = askUser();
			validSelection = checkUserInput(userInput.toLowerCase());
		} else {
			console.log("Game cancelled.")
			break;
		}
	}
// Print result from invoking win condition function
console.log(`You chose ${userInput.toLowerCase()} and the computer chose ${computerInput.toLowerCase()}.`);
console.log(winCondition(userInput, computerInput));
//     END