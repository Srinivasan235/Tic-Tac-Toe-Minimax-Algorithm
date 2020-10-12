// function require(jspath) {
// 	document.write('<script type="text/javascript" src="' + jspath + '"></script>');
// }
// require('check_winner.js');

//Initialising variables 
var board;  //It is an array which will store the values 'X' and 'O'
const huplayer = 'O';
const aiplayer = 'X';

const cells = document.querySelectorAll('.cell');
startGame();

//Function to start the game , it is also called when the replay button is clicked
function startGame() {
	board = [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ];
	// console.log(board);

	//It adds event listener to all the cells and the display property is set to none
	for (var i = 0; i < cells.length; i++) {
		cells[i].innerText = '';
		cells[i].addEventListener('click', click);
	}
	document.getElementById('endgame').innerHTML = ' ';
}

//it is called when the cell is clicked which in turn generates the cell id and passes it to turn function
//it also mediates the turns of human and AI player
function click(square) {
	if (typeof board[square.target.id] == 'number') {
		turn(square.target.id, huplayer);
		if (!checkResult(board, huplayer) && !checkTie()) {
			turn(bestSpot(), aiplayer);  // AI player gets the best spot to play using minmax algorithm
		}
	}
}

//Using this function 'O' or 'X' can be seen on the grid.
// After every turn it also checks if the game is over or not.
function turn(squareId, player) {
	board[squareId] = player;
	document.getElementById(squareId).innerText = player;
	let gameWon = checkResult(board, player);
	if (gameWon) {
		gameOver(gameWon);
	}
}

// It checks for all the winning conditions and if a players has won it sends the name of player to gameover function
// else it sends the null value
function checkResult(a, player) {
	let gameWon = null;
	
	let c = player;
	
	        if (a[0] == a[1] && a[1] == a[2] && a[0]==c) {
					gameWon = { player: player };
					
			}
			else if (a[3] == a[4] && a[4] == a[5] && a[3]==c) {
				gameWon = { player: player };
			}
			else if (a[6] == a[7] && a[7] == a[8]&& a[6]==c) {
				gameWon = { player: player };
			}
		
			else if (a[0] == a[3] && a[3] == a[6] && a[0]==c) {
				gameWon = { player: player };
			}
			else if (a[1] == a[4] && a[4] == a[7] && a[1]==c) {
				gameWon = { player: player };
			}
			else if (a[2] == a[5] && a[5] == a[8] && a[2]==c) {
				gameWon = { player: player };
			}
			else if (a[0] == a[4] && a[4] ==a[8] && a[0]==c) {
				gameWon = { player: player };
			}
			else if (a[2] == a[4] && a[4] ==a[6] && a[2]==c) {
				gameWon = { player: player };
			}

	return gameWon;
}
 
// It displays the final 
function gameOver(gameWon) {
	for (var i = 0; i < cells.length; i++) {
		cells[i].removeEventListener('click', click);
	}
	if (gameWon.player == huplayer) {
		document.getElementById('endgame').innerHTML = 'YOU WIN';
	} else {
		document.getElementById('endgame').innerHTML = 'YOU LOSE';
	}
}

// This function iterates all the elements of the board and see if there are any empty spaces 
// and return the array of empty spaces
function emptySquares() {
	b=[]
	for(var t=0;t<board.length;t++){
		if(board[t]==t){
			b.push(t);
		}
	}
	return b;
	
	
}

// It returns the index where AI player should play .
function bestSpot() {
	console.log(minimax(board, aiplayer));
	return minimax(board, aiplayer).index;
}

// It checks if the board array doesnot have any empty spaces than it returns true
// saying that the game is tie and remove all the eventlistens from the cell.
function checkTie() {
	console.log(emptySquares());
	if (emptySquares().length == 0) {
		for (var i = 0; i < cells.length; i++) {
			cells[i].removeEventListener('click', click);
		}
		document.getElementById('endgame').innerHTML = 'Tie';
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
