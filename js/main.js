const createAnswer = gm => {
	// Create answer from gamemode (gm)
	const n1 = Math.floor(Math.random() * 10 + 1);
	const n2 = Math.floor(Math.random() * 10 + 1);

	if (n1 >= n2) {
		document.getElementById("v1").value = n1;
		document.getElementById("v2").value = n2;
	} else {
		document.getElementById("v1").value = n2;
		document.getElementById("v2").value = n1;
	}

	if (gm === "addition") {
		window.ans = n1 + n2;
		return;
	}
	if (gm === "multiplication") {
		window.ans = n1 * n2;
		return;
	}
	if (gm === "subtraction") {
		window.ans = n1 - n2;
		return;
	}
}

let gamemode = "addition";

const jsGame = () => {
	let user = document.getElementById("answer").value;

	const gmHeader = document.getElementById("gmHeader");
	if (user == window.ans) {
		gmHeader.innerText = `Correct!`;
		gmHeader.style.color = "green";
	} else {
		gmHeader.innerText = `Wrong. The correct answer was ${ans}.`;
		gmHeader.style.color = "red";
	}
	setTimeout(() => {
		gmHeader.innerText = gamemode;
		gmHeader.style.color = "white";
	}, 2000);

	document.getElementById("answer").value = "";
	createAnswer(gamemode);
};

const switchGamemode = newGamemode => {
	if (newGamemode === gamemode) {
		// so user can't skip questions
		return;
	}

	gamemode = newGamemode;
	createAnswer(gamemode);
	const gmAsTitleCase = gamemode.charAt(0).toUpperCase() +
		gamemode.substring(1).toLowerCase();

	window.title = "Math Quiz | " + gmAsTitleCase;
	document.getElementById('gmHeader').innerText = gmAsTitleCase;

	const gmToSymb = {
		'addition': '+',
		'multiplication': '×',
		'subtraction': '-',
	}

	const cSymb = gmToSymb[gamemode];
	document.getElementById("symb").innerText = cSymb;
}

createAnswer(gamemode);