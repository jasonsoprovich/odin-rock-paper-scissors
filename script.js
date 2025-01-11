// main game loop function
function playGame() {
	const maxRounds = 5;
	let humanScore = 0;
	let computerScore = 0;

	for (let i = 0; i < maxRounds; i++) {
		// get human and computer selections for each round
		const humanSelection = getHumanChoice();
		if (humanSelection === null) {
			break;
		}

		const computerSelection = getComputerChoice().toLowerCase();
		const result = playRound(humanSelection, computerSelection);

		//keep track of total scores
		if (result  === "win") {
			++humanScore;
		} else if (result === "lose") {
			++computerScore;
		} else {
			// do nothing if tied
		}

		// display result from current round
		console.log(`Round ${i + 1}: You chose ${humanSelection} and the computer chose ${computerSelection} -  You ${result}.`);
		console.log(`Human Score: ${humanScore} - Computer Score: ${computerScore}`);
	}
	// return the scores as an array since only one variable can be returned? I'm sure there is a better way to do this...
	return [humanScore, computerScore];
}

//display final results at end of game
function finalResult(finalScore) {
	const [humanScore, computerScore] = finalScore; // split array
	console.log(`Final Result - Human Score: ${humanScore} - Computer score: ${computerScore}.`);
	if (humanScore === 0 && computerScore === 0) {
		console.log("Game cancelled by user.");
	} else if (humanScore > computerScore) {
		console.log("You win.");
	} else if (humanScore < computerScore) {
		console.log("You lose.");
	} else if (humanScore === computerScore) {
		console.log("Tie game.");
	} else {
		console.log("Game cancelled by user.");
	}
}

// 	Ask user for to select between "Rock", "Paper" or "Scissors"
function getHumanChoice() {
	// Check if user input is valid
	const validOptions = ["rock", "paper", "scissors"];
	let humanChoice = "";
	while (!validOptions.includes((humanChoice || "").toLowerCase())) {
		humanChoice = prompt("Please enter a valid selection (Rock, Paper, or Scissors):");
	// Check if user cancels with out making any selection
		if (humanChoice === null) {
			return null;
		}
	// Invalid entry, re-select
		if (!validOptions.includes(humanChoice.toLowerCase())) {
			alert("Invalid entry. Please re-enter your selection.");
		}
	}
	return humanChoice;
}

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
		roundResult = "tie";	
	} else if (humanChoice === ""){
		roundResult = null;
	} else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper") {
		roundResult = "lose";
	} else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors") {
		roundResult = "lose";
	} else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock") {
		roundResult = "lose";
	} else {
		roundResult = "win";
	}
	return roundResult;
}

// invoke functions
const finalScore = playGame(); // initiate the game and return the final score as an array
finalResult(finalScore); // display final result of game using an array from playGame()