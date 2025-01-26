let humanScore = 0;
let computerScore = 0;
const buttons = document.getElementById('button-container');
const resultsDiv = document.getElementById('results-container');

const resultsTable = document.createElement('table');
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');

const rockClick = rockButton.textContent = 'Rock';
const paperClick = paperButton.textContent = 'Paper';
const scissorsClick = scissorsButton.textContent = 'Scissors';

buttons.appendChild(rockButton);
buttons.appendChild(paperButton);
buttons.appendChild(scissorsButton);

rockButton.addEventListener('click', function(){
	const computerChoice = getComputerChoice();
	const result = playRound(rockClick, computerChoice);
	addTableRows(rockClick, computerChoice, result, humanScore, computerScore);
});

paperButton.addEventListener('click', function(){
	const computerChoice = getComputerChoice();
	const result = playRound(paperClick, computerChoice);
	addTableRows(paperClick, computerChoice, result, humanScore, computerScore);
});

scissorsButton.addEventListener('click', function(){
	const computerChoice = getComputerChoice();
	const result = playRound(scissorsClick, computerChoice);
	addTableRows(scissorsClick, computerChoice, result, humanScore, computerScore);
});
		
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
	const maxScore = 5;

		if (result === 'win') {
			humanScore++;
		} else if (result === 'lose') {
			computerScore++;
		}

	return [humanScore,computerScore];
}

//CREATE RESULTS TABLE
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

function addTableRows(humanChoice, computerChoice, result, humanScore, computerScore) {
	const addRow = document.createElement('tr');

	const userCell = document.createElement('td');
	userCell.textContent = humanChoice;
	
	const computerCell = document.createElement('td');
	computerCell.textContent = computerChoice;

	const resultCell = document.createElement('td');
	const resultOutput = result === 'win' ? 'You won!':
		result === 'lose' ? 'Computer won!':
		'Tie game!';
	resultCell.textContent = resultOutput;

	const scoreCell = document.createElement('td');
	scoreCell.textContent = `${humanScore} - ${computerScore}`;

	addRow.appendChild(userCell);
	addRow.appendChild(computerCell);
	addRow.appendChild(resultCell);
	addRow.appendChild(scoreCell);

	resultsTable.appendChild(addRow);
}