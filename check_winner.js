function checkResult(a) {
	var count = 0;
	for (var i = 0; i < a.length; i++) {
		if (board[i] != 0) {
			count += 1;
		}
	}

	if (a[0] === a[1] && a[1] === a[2]) {
		if (a[0] === 'X' || a[0] === 'O') {
			return a[0];
		}
	}
	if (a[3] === a[4] && a[4] === a[5]) {
		if (a[3] === 'X' || a[3] === 'O') {
			return a[3];
		}
	}
	if (a[6] === a[7] && a[7] === a[8]) {
		if (a[6] === 'X' || a[6] === 'O') {
			return a[6];
		}
	}

	if (a[0] === a[3] && a[3] === a[6]) {
		if (a[0] === 'X' || a[0] === 'O') {
			return a[0];
		}
	}
	if (a[1] === a[4] && a[4] === a[7]) {
		if (a[1] === 'X' || a[1] === 'O') {
			return a[1];
		}
	}
	if (a[2] === a[5] && a[5] === a[8]) {
		if (a[2] === 'X' || a[2] === 'O') {
			return a[2];
		}
	}
	if (a[0] === a[4] && a[4] === a[8]) {
		if (a[0] === 'X' || a[0] === 'O') {
			return a[0];
		}
	}
	if (a[2] === a[4] && a[4] === a[6]) {
		if (a[2] === 'X' || a[2] === 'O') {
			return a[2];
		}
	}
	if (count == 9) {
		return 'tie';
	}
}
