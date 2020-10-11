var board;
const huplayer = 'O';
const aiplayer = 'X';
const winCombos = [
	[ 0, 1, 2 ],
	[ 3, 4, 5 ],
	[ 6, 7, 8 ],
	[ 0, 3, 6 ],
	[ 1, 4, 7 ],
	[ 2, 5, 8 ],
	[ 0, 4, 8 ],
	[ 6, 4, 2 ]
];

const cells = document.querySelectorAll('.cell');
startGame();

function startGame() {
	board = Array.from(Array(9).keys());
	for (var i = 0; i < cells.length; i++) {
		cells[i].innerText = '';
		cells[i].style.removeProperty('background-color');
		cells[i].addEventListener('click', click, false);
	}
}

function click(square) {
	if (typeof board[square.target.id] == 'number') {
		turn(square.target.id, huplayer);
		if (!checkResult(board, huplayer) && !checkTie()) turn(bestSpot(), aiplayer);
	}
}

function turn(squareId, player) {
	board[squareId] = player;
	document.getElementById(squareId).innerText = player;
	let gameWon = checkResult(board, player);
	if (gameWon) {
		gameOver(gameWon);
	}
}

function checkResult(board, player) {
	let plays = board.reduce((a, e, i) => (e === player ? a.concat(i) : a), []);
	let gameWon = null;
	for (let [ index, win ] of winCombos.entries()) {
		if (win.every((elem) => plays.indexOf(elem) > -1)) {
			gameWon = { index: index, player: player };
			break;
		}
	}

	return gameWon;
}

function gameOver(gameWon) {
	for (let index of winCombos[gameWon.index]) {
		document.getElementById(index).style.backgroundColor = gameWon.player == huplayer ? 'blue' : 'red';
	}
	for (var i = 0; i < cells.length; i++) {
		cells[i].removeEventListener('click', click, false);
	}
	declareWinner(gameWon.player == huplayer ? 'You win!' : 'You lose.');
}

function declareWinner(who) {
	document.querySelector('.endgame').style.display = 'block';
	document.querySelector('.endgame .text').innerText = who;
}

function emptySquares() {
	return board.filter((s) => typeof s == 'number');
}

function bestSpot() {
	console.log(minimax(board, aiplayer));
	return minimax(board, aiplayer).index;
}

function checkTie() {
	if (emptySquares().length == 0) {
		for (var i = 0; i < cells.length; i++) {
			cells[i].style.backgroundColor = 'green';
			cells[i].removeEventListener('click', click, false);
		}
		declareWinner('Tie Game!');
		return true;
	}
	return false;
}

function minimax(newBoard, player) {
	var availSpots = emptySquares();

	if (checkResult(newBoard, huplayer)) {
		return { score: -10 };
	} else if (checkResult(newBoard, aiplayer)) {
		return { score: 10 };
	} else if (availSpots.length === 0) {
		return { score: 0 };
	}
	var moves = [];
	for (var i = 0; i < availSpots.length; i++) {
		var move = {};
		move.index = newBoard[availSpots[i]];
		newBoard[availSpots[i]] = player;

		if (player == aiplayer) {
			var result = minimax(newBoard, huplayer);
			move.score = result.score;
		} else {
			var result = minimax(newBoard, aiplayer);
			move.score = result.score;
		}

		newBoard[availSpots[i]] = move.index;

		moves.push(move);
	}

	var bestMove;
	if (player === aiplayer) {
		var bestScore = -10000;
		for (var i = 0; i < moves.length; i++) {
			if (moves[i].score > bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	} else {
		var bestScore = 10000;
		for (var i = 0; i < moves.length; i++) {
			if (moves[i].score < bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	}

	return moves[bestMove];
}
