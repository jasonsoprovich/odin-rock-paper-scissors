// main game loop function
function playGame() {
	const maxRounds = 5;
	let humanScore = 0;
	let computerScore = 0;

	for (let i = 0; i < maxRounds; i++) {
		// get human and computer selections for each round
		const humanSelection = getHumanChoice().toLowerCase();
		const computerSelection = getComputerChoice().toLowerCase();
		const result = playRound(humanSelection, computerSelection)

		if (result  === "win") {
			++humanScore;
		} else if (result === "lose") {
			++computerScore;
	// exit loop and game if user cancels
		// } else if (result === "") {
		// 	console.log("Game cancelled by user.")
		// 	break; 
		} else {
			// do nothing if tied or cancelled
		}
		// display result from current round
		console.log(`Round ${i + 1}: You chose ${humanSelection} and the computer chose ${computerSelection} -  You ${result}.`);
		console.log(`Human Score: ${humanScore} - Computer Score: ${computerScore}`);
	}
	console.log(`At the end of ${maxRounds} rounds, you had a score of ${humanScore} and the computer had a score of ${computerScore}.`);
	if (humanScore > computerScore) {
		console.log("You win!");
	} else if (humanScore < computerScore) {
		console.log("You lose!");
	} else {
		console.log("Tie game!");
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
			return ""; // avoid null error
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
		roundResult = "exit";
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

// start game
playGame();

// errors need to be fixed regarding the game loop and the user canceling out of the prompts