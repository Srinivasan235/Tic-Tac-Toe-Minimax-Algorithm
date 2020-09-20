function checkResult() {
	var a = [];
	for (var j = 0; j <= 8; j++) {
		a[j] = document.getElementById(j).innerHTML;
	}
	if (a[0] === a[1] && a[1] === a[2]) {
		if (a[0] === 'X' || a[0] === 'O') {
			document.getElementById('endgame').innerHTML = a[0] + 'won the game';
		}
	}
	if (a[3] === a[4] && a[4] === a[5]) {
		if (a[3] === 'X' || a[3] === 'O') {
			document.getElementById('endgame').innerHTML = a[3] + ' won the game';
		}
	}
	if (a[6] === a[7] && a[7] === a[8]) {
		if (a[6] === 'X' || a[6] === 'O') {
			document.getElementById('endgame').innerHTML = a[6] + ' won the game';
		}
	}

	if (a[0] === a[3] && a[3] === a[6]) {
		if (a[0] === 'X' || a[0] === 'O') {
			document.getElementById('endgame').innerHTML = a[0] + ' won the game';
		}
	}
	if (a[1] === a[4] && a[4] === a[7]) {
		if (a[1] === 'X' || a[1] === 'O') {
			document.getElementById('endgame').innerHTML = a[1] + ' won the game';
		}
	}
	if (a[2] === a[5] && a[5] === a[8]) {
		if (a[2] === 'X' || a[2] === 'O') {
			document.getElementById('endgame').innerHTML = a[2] + ' won the game';
		}
	}

	if (a[0] === a[4] && a[4] === a[8]) {
		if (a[0] === 'X' || a[0] === 'O') {
			document.getElementById('endgame').innerHTML = a[0] + ' won the game';
		}
	}
	if (a[2] === a[4] && a[4] === a[6]) {
		if (a[2] === 'X' || a[2] === 'O') {
			document.getElementById('endgame').innerHTML = a[2] + ' won the game';
		}
	}
}
