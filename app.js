function require(jspath) {
	document.write('<script type="text/javascript" src="' + jspath + '"></script>');
}

require('check_winner.js');

var count = 0;
function clicked(id) {
	if (count % 2 === 0) {
		document.getElementById(id).innerHTML = 'X';
		board[i][j] = human;
		count = count + 1;
		console.log(id);
		bestMove();
	}
	checkResult();
}

function startGame() {
	count = 0;

	for (var i = 0; i <= 8; i++) {
		document.getElementById(i).innerHTML = '';
	}
	document.getElementById('endgame').innerHTML = '';
	console.log('start new game');
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
