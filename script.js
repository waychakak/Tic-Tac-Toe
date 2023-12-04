console.log("welcome to tic tac toe");

let turn = "X";
let gameOver = false;

const changeTurn = () => {
	return turn === "X"?"0": "X"
}

// Function for win logic 
const checkWin = () => {
	let boxtext = document.getElementsByClassName("boxtext");	
	let wins = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	]
	wins.forEach(e => {
		if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== '')) {
			document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
			gameOver = true;
		}
	})
}

// Game Logic 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
	let boxtext = element.querySelector('.boxtext');
	console.log(boxtext);
	element.addEventListener('click', ()=> {
		if(boxtext.innerText === ''){
			boxtext.innerText = turn;
			turn = changeTurn();
			checkWin();
			if (!gameOver) {
				document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
			}
		}
	})
})

