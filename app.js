function require(jspath) {
	document.write('<script type="text/javascript" src="' + jspath + '"></script>');
}

require('check_winner.js');

var count = 0;
var origBoard;
const cells = document.querySelectorAll('.cell');

const huPlayer = 'O';
const aiPlayer = 'X';
const cells = document.querySelectorAll('.cell');
startGame();

function startGame() {
	count = 0;

	for (var i = 0; i <= 8; i++) {
		cells[i].innerText = '';
		cells[i].style.removeProperty('background-color');
		cells[i].addEventListener('click', clicked, false);
		origBoard[i] = 0;
	}
	document.getElementById('endgame').innerHTML = '';
	console.log('start new game');
}
function clicked() {
	if (count % 2 === 0) {
		document.getElementById(id).innerHTML = 'X';
		count = count + 1;
		console.log(id);
		bestMove();
	}
	checkResult();
}

function emptySquares() {
	return origBoard.filter((s) => typeof s == 'number');
}

function bestSpot() {
	return minimax(origBoard, aiPlayer).index;
}
function bestMove() {
	for (var i = 0; i <= 8; i++) {
		if (document.getElementById(i).innerHTML === '') {
			document.getElementById(i).innerHTML = 'O';
			count = count + 1;
			break;
		}
	}
}
