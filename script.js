// Define variables
const humanSelection = getHumanChoice();
let validSelection = false;;
const computerSelection = getComputerChoice();
let humanScore = 0;
let computerScore = 0;

// 	Ask user for to select between "Rock", "Paper" or "Scissors"
function getHumanChoice() {
	let humanChoice = prompt("Choose \"Rock\" \"Paper\" or \"Scissors\": ");
	return humanChoice;
}

// Check to see if user entered a valid selection
// function checkHumanChoice(humanChoice) {
// 	let validSelection;
// 	if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
// 		validSelection = true;
// 	} else {
// 		validSelection = false;
// 	}
// 	return validSelection;
// }

// Randomly generate computer input
function getComputerChoice() {
	const validOptions = ["Rock", "Paper", "Scissors"];
	const computerChoice = Math.floor(Math.random() * validOptions.length);
	return validOptions[computerChoice];
}

// Declare function to start a new round and  check for win condition
function playRound(humanChoice, computerChoice) {
	let winMessage;
	if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
		winMessage = "Tie";
	} else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper") {
		winMessage = "You lose!";
	} else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors") {
		winMessage = "You lose!";
	} else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock") {
		winMessage = "You lose!";
	} else {
		winMessage = "You win!";
	}
	return winMessage;
}

// Activate functions
// humanChoice = getHumanChoice();
// validSelection = checkHumanChoice(humanChoice.toLowerCase());

// not working correctly if user cancels after second failed input
	// while (validSelection === false) {
	// 	if (confirm("Invalid selection, try again?") === true) {
	// 		humanChoice = getHumanChoice();
	// 		validSelection = checkHumanChoice(humanChoice.toLowerCase());
	// 	} else {
	// 		console.log("Game cancelled.")
	// 		break;
	// 	}
	// }
// Print result from invoking win condition function
console.log(`You chose ${humanSelection.toLowerCase()} and the computer chose ${computerSelection.toLowerCase()}.`);
console.log(playRound(humanSelection, computerSelection));
//     END