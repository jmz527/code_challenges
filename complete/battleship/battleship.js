// Battleship
// var prompt = require('prompt');

// Battleship
var newPlayers = {
	'playerOne': {board: null, grid: null, fleet: null, wins: false},
	'playerTwo': {board: null, grid: null, fleet: null, wins: false}
};

var newGrid = {	
	a: {1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null, 10: null},
	b: {1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null, 10: null},
	c: {1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null, 10: null},
	d: {1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null, 10: null},
	e: {1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null, 10: null},
	f: {1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null, 10: null},
	g: {1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null, 10: null},
	h: {1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null, 10: null},
	i: {1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null, 10: null},
	j: {1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null, 10: null}
}


var newFleet = {
	arcraft_carrier: {health: 5, position: [], sunk: false}, 
	battleship: {health: 4, position: [], sunk: false}, 
	submarine: {health: 3, position: [], sunk: false}, 
	destroyer: {health: 3, position: [], sunk: false}, 
	cruiser: {health: 2, position: [], sunk: false}
}

function newGame() {
	var game = newPlayers;
	game.playerOne.board = newGrid;
	// game.playerOne.grid = newGrid;
	game.playerOne.fleet = newFleet;
	// game.playerTwo.board = newGrid;
	// game.playerTwo.grid = newGrid;
	// game.playerTwo.fleet = newFleet;  

	return game;
}

function shipPlacement() {
	game.playerOne.fleet.arcraft_carrier.position = ['a1', 'a2', 'a3', 'a4', 'a5'];
	game.playerOne.fleet.battleship.position = ['b1', 'b2', 'b3', 'b4'];
	game.playerOne.fleet.submarine.position = ['c1', 'c2', 'c3'];
	game.playerOne.fleet.destroyer.position = ['d1', 'd2', 'd3'];
	game.playerOne.fleet.cruiser.position = ['e1', 'e2'];
}

function printBoard(board) {
	keyArr = Object.keys(board)

	for (i=0; i < 10; i++) {
		// console.log(keyArr[i]);
		letter = keyArr[i];

		// for (i=0; i < 10; i++) {
			
		// }
		console.log(board[letter]);
	}

	// console.log(keyArr);
	// console.log(board);
}

function playBattleship() {
	game = newGame();
	shipPlacement();

	printBoard(game.playerOne.board);
}

// console.log(game.playerOne.fleet);
// console.log(game.playerOne.board.j[2]);
// console.log(game.playerOne);

// Shots that miss are marked with a white peg, while...
//..shots that hit are marked with a red peg

// var newGame = {};
