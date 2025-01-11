// Define variables
const humanSelection = getHumanChoice();
//let validSelection = false;;
const computerSelection = getComputerChoice();
let humanScore = 0;
let computerScore = 0;

// 	Ask user for to select between "Rock", "Paper" or "Scissors"
function getHumanChoice() {
	// Check if user input is valid
	const validOptions = ["rock", "paper", "scissors"];
	let humanChoice = "";
	while (!validOptions.includes((humanChoice || "").toLowerCase())) {
		humanChoice = prompt("Please enter a valid selection (Rock, Paper, or Scissors):");
	// Check if user cancels with out making any selection
		if (humanChoice === null) {
			return "";
		}
	// Invalid entry, re-select
		if (!validOptions.includes(humanChoice.toLowerCase())) {
			alert("Invalid entry. Please re-enter your selection.");
		}
	}
	console.log(`You chose ${humanSelection.toLowerCase()} and the computer chose ${computerSelection.toLowerCase()}.`);
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
	let roundResult;
	if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
		roundResult = "Tie";	
	} else if (humanChoice === ""){
		roundResult = "You cancelled the game. Goodbye.";
	} else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper") {
		roundResult = "You lose!";
	} else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors") {
		roundResult = "You lose!";
	} else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock") {
		roundResult = "You lose!";
	} else {
		roundResult = "You win!";
	}
	return roundResult;
}

// Invoke new game
console.log(playRound(humanSelection, computerSelection));