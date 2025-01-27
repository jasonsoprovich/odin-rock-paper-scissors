// SETUP
let humanScore = 0;
let computerScore = 0;
const maxScore = 5;

const buttons = document.getElementById('button-container');
const resultsDiv = document.getElementById('results-container');

const resultsTable = document.createElement('table');
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');
const resetButton = document.createElement('button');

const rockClick = rockButton.textContent = 'Rock';
const paperClick = paperButton.textContent = 'Paper';
const scissorsClick = scissorsButton.textContent = 'Scissors';
resetButton.textContent = 'Reset Game';

buttons.appendChild(rockButton);
buttons.appendChild(paperButton);
buttons.appendChild(scissorsButton);
buttons.appendChild(resetButton);

rockButton.addEventListener('click', () => playGame(rockClick));
paperButton.addEventListener('click', () => playGame(paperClick));
scissorsButton.addEventListener('click', () => playGame(scissorsClick));
resetButton.addEventListener('click', resetGame);

// GAME LOGIC

function playGame(humanChoice) {
	if (humanScore >= maxScore || computerScore >= maxScore) {
			return;
	}

	const computerChoice = getComputerChoice();
	const result = playRound(humanChoice, computerChoice);
	addTableRows(humanChoice, computerChoice, result, humanScore, computerScore);

	if (humanScore >= maxScore || computerScore >= maxScore) {
		endGame();
	}
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
	scoreTracker(result);
	return result;
}

function getComputerChoice() {
	const validOptions = ["Rock", "Paper", "Scissors"];
	const computerChoice = Math.floor(Math.random() * validOptions.length);
	return validOptions[computerChoice];
}

function scoreTracker(result) {
		if (result === 'win') {
			humanScore++;
		} else if (result === 'lose') {
			computerScore++;
		}
}

function endGame() {
	rockButton.disabled = true; 
	paperButton.disabled = true; 
	scissorsButton.disabled = true; 

	const result = humanScore > computerScore ? 'win' : 'lose';
	const finalResult = result === 'win' ? "You won the game!" : "Computer won the game!";

	addTableRows('Game Over', '', finalResult, humanScore, computerScore, true, result);
}

// DISPLAY RESULTS TABLE
const headers = ['User','Computer','Result','Score'];
const headerRow = createTableHeaders(headers);

function createTableHeaders() {
	const headerRow = document.createElement('tr');
	headers.forEach(headerText => {
		const headerCell = document.createElement('th');
		headerCell.textContent = headerText;
		headerRow.appendChild(headerCell);
	});
	return headerRow;
}

resultsTable.appendChild(headerRow);
resultsDiv.appendChild(resultsTable);

function addTableRows(humanChoice, computerChoice, result, humanScore, computerScore, isFinalRow = false, resultType = null) {
	const addRow = document.createElement('tr');

	const userCell = document.createElement('td');
	userCell.textContent = humanChoice;
	
	const computerCell = document.createElement('td');
	computerCell.textContent = computerChoice;

	const resultCell = document.createElement('td');
	const resultOutput = result === 'win' ? 'You won!':
		result === 'lose' ? 'Computer won!':
		result === 'tied' ? 'Tie game!':
		result;

	resultCell.textContent = resultOutput;

	const scoreCell = document.createElement('td');
	scoreCell.textContent = `${humanScore} - ${computerScore}`;

	addRow.appendChild(userCell);
	addRow.appendChild(computerCell);
	addRow.appendChild(resultCell);
	addRow.appendChild(scoreCell);

	// highlight final result based on win/lose condition
	if (isFinalRow && resultType) {
		if (resultType === 'win') {
			addRow.classList.add('win-final'); 
		} else if (resultType === 'lose') {
			addRow.classList.add('lose-final');
		}
	}
	
	resultsTable.appendChild(addRow);
}

function resetGame() {
	humanScore = 0;
	computerScore = 0;

	resultsTable.innerHTML = ''; // clear table
	resultsTable.appendChild(headerRow); // re-add header row

	rockButton.disabled = false;
	paperButton.disabled = false;
	scissorsButton.disabled = false;

	addTableRows('Game Reset', '', 'Start a new game!', humanScore, computerScore);
}