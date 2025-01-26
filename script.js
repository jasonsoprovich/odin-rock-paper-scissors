// function playGame() {
// 	// const maxRounds = 5;
// 	let humanScore = 0;
// 	let computerScore = 0;
// 	let gameCancelled = false;

// 	// for (let i = 0; i < maxRounds; i++) {
// 		const humanSelection = getHumanChoice();
		
// 		// end game loop if input is cancelled by user
// 		if (humanSelection === null) {
// 			gameCancelled = true;
// 			// break;
// 		}

// 		const computerSelection = getComputerChoice().toLowerCase();
// 		const result = playRound(humanSelection, computerSelection);

// 		// keep track of total scores
// 		if (result  === "win") {
// 			++humanScore;
// 		} else if (result === "lose") {
// 			++computerScore;
// 		} else {
// 			// do nothing if tied
// 		}

// 		// display result from current round
// 		// console.log(`Round ${i + 1}: You chose ${humanSelection.toLowerCase()} and the computer chose ${computerSelection.toLowerCase()} -  You ${result}.`);
// 		console.log(`Human Score: ${humanScore} - Computer Score: ${computerScore}`);
// 	}
// 	// return the scores as an array since only one variable can be returned? May be a better way to do this?
// 	// return [humanScore, computerScore, gameCancelled];
// // }

// function finalResult(finalScore) {
// 	const [humanScore, computerScore, gameCancelled] = finalScore; // split array
// 	if (gameCancelled === true) {
// 		console.log("Game was cancelled by the user.");
// 		return;
// 	}

// 	console.log(`Final Result - Human Score: ${humanScore} - Computer score: ${computerScore}.`);
// 	if (humanScore > computerScore) {
// 		console.log("You won the game.");
// 	} else if (humanScore < computerScore) {
// 		console.log("You lost the game.");
// 	} else {
// 		console.log("Tie game.");
// 	}
// }

function getComputerChoice() {
	const validOptions = ["Rock", "Paper", "Scissors"];
	const computerChoice = Math.floor(Math.random() * validOptions.length);
	return validOptions[computerChoice];
}

function playRound(humanChoice, computerChoice) {
	let result;
	if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
		result = "tied";	
	} else if (humanChoice === ""){
		result = null;
	} else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper") {
		result = "lose";
	} else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors") {
		result = "lose";
	} else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock") {
		result = "lose";
	} else {
		result = "win";
	}
	return result;
}

// NEW CODE

const buttons = document.getElementById('button-container');
const results = document.getElementById('results-container');

const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');
const result = document.createElement('h3');

const rockClick = rockButton.textContent = 'Rock';
const paperClick = paperButton.textContent = 'Paper';
const scissorsClick = scissorsButton.textContent = 'Scissors';

buttons.appendChild(rockButton);
buttons.appendChild(paperButton);
buttons.appendChild(scissorsButton);


results.appendChild(document.createTextNode('RESULT'));

rockButton.addEventListener('click', function(){
	const computerChoice = getComputerChoice();
	const result = playRound(rockClick, computerChoice);
	console.log(result);
});

paperButton.addEventListener('click', function(){
	const computerChoice = getComputerChoice();
	const result = playRound(paperClick, computerChoice);
	console.log(result);
});

scissorsButton.addEventListener('click', function(){
	const computerChoice = getComputerChoice();
	const result = playRound(scissorsClick, computerChoice);
	console.log(result);
});



