function checkResult(a, player) {
	if (a[0] === a[1] && a[1] === a[2]) {
		if (a[0] == 'X') {
			return { player: aiplayer };
		} else {
			return { player: huplayer };
		}
	}
	if (a[3] === a[4] && a[4] === a[5]) {
		if (a[3] == 'X') {
			return { player: aiplayer };
		} else {
			return { player: huplayer };
		}
	}
	if (a[6] === a[7] && a[7] === a[8]) {
		if (a[6] == 'X') {
			return { player: aiplayer };
		} else {
			return { player: huplayer };
		}
	}

	if (a[0] === a[3] && a[3] === a[6]) {
		if (a[0] == 'X') {
			return { player: aiplayer };
		} else {
			return { player: huplayer };
		}
	}
	if (a[1] === a[4] && a[4] === a[7]) {
		if (a[1] == 'X') {
			return { player: aiplayer };
		} else {
			return { player: huplayer };
		}
	}
	if (a[2] === a[5] && a[5] === a[8]) {
		if (a[2] == 'X') {
			return { player: aiplayer };
		} else {
			return { player: huplayer };
		}
	}
	if (a[0] === a[4] && a[4] === a[8]) {
		if (a[0] == 'X') {
			return { player: aiplayer };
		} else {
			return { player: huplayer };
		}
	}
	if (a[2] === a[4] && a[4] === a[6]) {
		if (a[2] == 'X') {
			return { player: aiplayer };
		} else {
			return { player: huplayer };
		}
	}
}
