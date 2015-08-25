// Battleship
var prompt = require('prompt');

// Battleship
var newPlayers = {
	'playerOne': {board: null, grid: null, fleet: null},
	'playerTwo': {board: null, grid: null, fleet: null},
};

var newGrid = {	A1: null, A2: null, A3: null, A4: null, A5: null, A6: null, A7: null, A8: null, A9: null, A10: null, 
					B1: null, B2: null, B3: null, B4: null, B5: null, B6: null, B7: null, B8: null, B9: null, B10: null, 
					C1: null, C2: null, C3: null, C4: null, C5: null, C6: null, C7: null, C8: null, C9: null, C10: null, 
					D1: null, D2: null, D3: null, D4: null, D5: null, D6: null, D7: null, D8: null, D9: null, D10: null, 
					E1: null, E2: null, E3: null, E4: null, E5: null, E6: null, E7: null, E8: null, E9: null, E10: null, 
					F1: null, F2: null, F3: null, F4: null, F5: null, F6: null, F7: null, F8: null, F9: null, F10: null, 
					G1: null, G2: null, G3: null, G4: null, G5: null, G6: null, G7: null, G8: null, G9: null, G10: null, 
					H1: null, H2: null, H3: null, H4: null, H5: null, H6: null, H7: null, H8: null, H9: null, H10: null, 
					I1: null, I2: null, I3: null, I4: null, I5: null, I6: null, I7: null, I8: null, I9: null, I10: null, 
					J1: null, J2: null, J3: null, J4: null, J5: null, J6: null, J7: null, J8: null, J9: null, J10: null, 
					}

var newFleet = {
	arcraft_carrier: {health: 5, position: [], sunk: false}, 
	battleship: {health: 4, position: [], sunk: false}, 
	submarine: {health: 3, position: [], sunk: false}, 
	destroyer: {health: 3, position: [], sunk: false}, 
	cruiser: {health: 2, position: [], sunk: false}
}

function playBattleship() {
    function newGame() {    
		var game = newPlayers;
// 		game.playerOne.board = newGrid;
	// 	game.playerOne.grid = newGrid;
		game.playerOne.fleet = newFleet;
	// 	game.playerTwo.board = newGrid;
	// 	game.playerTwo.grid = newGrid;
	// 	game.playerTwo.fleet = newFleet;  

		return game;
	}

	game = newGame();
	game.playerOne.fleet.arcraft_carrier.position = ['A1', 'A2', 'A3', 'A4', 'A5'];
	game.playerOne.fleet.battleship.position = ['B1', 'B2', 'B3', 'B4'];
	game.playerOne.fleet.submarine.position = ['C1', 'C2', 'C3'];
	game.playerOne.fleet.destroyer.position = ['D1', 'D2', 'D3'];
	game.playerOne.fleet.cruiser.position = ['E1', 'E2'];
	
	console.log(game.playerOne.fleet);
// 	console.log(game.playerOne);
}

// Shots that miss are marked with a white peg, while...
//..shots that hit are marked with a red peg

var newGame = {};
