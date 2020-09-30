function require(jspath) {
	document.write('<script type="text/javascript" src="' + jspath + '"></script>');
}

require('check_winner.js');

let huplayer = 'X';
let aiplayer = 'O';
let index = 0;
let player;
let board;

const cells = document.querySelectorAll('.cell');

startGame();

function startGame() {
	board = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
	document.getElementById('endgame').innerHTML = ' ';
	player = huplayer;
	for (var i = 0; i < cells.length; i++) {
		cells[i].innerHTML = ' ';
		cells[i].addEventListener('click', turn, false);
	}
}

function emptylist() {
	let empty = [];
	for (var i = 0; i < board.length; i++) {
		if (board[i] == 0) {
			empty.push(i);
		}
	}
	return empty;
}

function turn(event) {
	click(event.target.id, huplayer);
	if (!(checkResult(board) == 'X' || checkResult(board) == 'O')) {
		click(bestmove(), aiplayer);
	}

	console.log(board);
	console.log(emptylist());

	// if (player == huplayer) {
	// 	click(event.target.id, huplayer);
	// 	player = aiplayer;
	// } else {

	// 	click(, aiplayer);
	// 	player = huplayer;
	// }
}

function bestmove() {
	// index = minimax(board, aiplayer);
	return emptylist()[0];
}

function click(id, player) {
	document.getElementById(id).innerHTML = player;
	board[id] = player;
	cells[id].removeEventListener('click', turn);
	winner = checkResult(board);

	if (winner == 'X' || winner == 'O' || winner == 'tie') {
		document.getElementById('endgame').innerHTML = winner + 'Wins';
		for (var i = 0; i < cells.length; i++) {
			cells[i].removeEventListener('click', turn);
		}
	}
}

function minimax(newBoard, player) {
	let availSpots = emptylist();
	console.log(availSpots);
	if (checkResult(newBoard) == 'X') {
		return { score: 10 };
	} else if (checkResult(newBoard) == 'O') {
		return { score: -10 };
	} else if (checkResult(newBoard) == 'tie') {
		return { score: 0 };
	}

	var moves = [];
	for (var i = 0; i < availSpots.length; i++) {
		var move = {};
	}
}
