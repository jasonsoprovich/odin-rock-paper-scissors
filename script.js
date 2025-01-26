function playGame() {
	const maxRounds = 5;
	let humanScore = 0;
	let computerScore = 0;
	let gameCancelled = false;

	for (let i = 0; i < maxRounds; i++) {
		const humanSelection = getHumanChoice();
		
		// end game loop if input is cancelled by user
		if (humanSelection === null) {
			gameCancelled = true;
			break;
		}

		const computerSelection = getComputerChoice().toLowerCase();
		const result = playRound(humanSelection, computerSelection);

		// keep track of total scores
		if (result  === "win") {
			++humanScore;
		} else if (result === "lose") {
			++computerScore;
		} else {
			// do nothing if tied
		}

		// display result from current round
		console.log(`Round ${i + 1}: You chose ${humanSelection.toLowerCase()} and the computer chose ${computerSelection.toLowerCase()} -  You ${result}.`);
		console.log(`Human Score: ${humanScore} - Computer Score: ${computerScore}`);
	}
	// return the scores as an array since only one variable can be returned? May be a better way to do this?
	return [humanScore, computerScore, gameCancelled];
}

function finalResult(finalScore) {
	const [humanScore, computerScore, gameCancelled] = finalScore; // split array
	if (gameCancelled === true) {
		console.log("Game was cancelled by the user.");
		return;
	}

	console.log(`Final Result - Human Score: ${humanScore} - Computer score: ${computerScore}.`);
	if (humanScore > computerScore) {
		console.log("You won the game.");
	} else if (humanScore < computerScore) {
		console.log("You lost the game.");
	} else {
		console.log("Tie game.");
	}
}

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

function getComputerChoice() {
	const validOptions = ["Rock", "Paper", "Scissors"];
	const computerChoice = Math.floor(Math.random() * validOptions.length);
	return validOptions[computerChoice];
}

function playRound(humanChoice, computerChoice) {
	let roundResult;
	if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
		roundResult = "tied";	
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

const finalScore = playGame(); // initiate the game and return the final score as an array
finalResult(finalScore); // display final result of game using an array from playGame()

const buttons = document.getElementById('button-container');

const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');

rockButton.textContent = 'Rock';
paperButton.textContent = 'Paper';
scissorsButton.textContent = 'Scissors';

buttons.appendChild(rockButton);
buttons.appendChild(paperButton);
buttons.appendChild(scissorsButton);


