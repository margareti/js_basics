function solve(arr){
	var i, times,
	initial,
	winningDistance = 0,
	winner,
	positionPostJump = 0,
	board = [],
	distance,
	personal,
	track = parseInt(arr[1]),
	jumps = parseInt(arr[0]),
	separator = new Array(track + 1).join("#");
	console.log( separator );
	console.log( separator );
	if ( track === 1) {
		for (i = 2; i < arr.length; i ++) {
			var flea = arr[i].split(",");
			initial = flea[0][0].toUpperCase();
			

			distance = parseInt(flea[1]);
			positionPostJump = (distance);

			personal = new Array(track);
			if ( positionPostJump > winningDistance) {
				winner = flea[0];
				winningDistance = positionPostJump;
			}
			
			if ( positionPostJump <= track) {
				personal[0] = initial;
				board[initial] = personal[0];
			} else {
				
				personal[0] = initial;
				board[initial] = personal[0];
				winner = flea[0];
				for (var key in board) {
					console.log(board[key])
				}
				console.log( separator );
				console.log( separator );
				console.log("Winner: "+ winner);
				return;
			}
		} 

	} else {
		for ( times = 1; times <= jumps; times ++) {
			for (i = 2; i < arr.length; i ++) {
				var flea = arr[i].split(",");
				initial = flea[0][0].toUpperCase();
				

				distance = parseInt(flea[1]);
				positionPostJump = (distance * times) + 1;
				if ( positionPostJump >= winningDistance && positionPostJump < track) {
					winner = flea[0];
					winningDistance = positionPostJump;
				}
				personal = new Array(track);
				if ( positionPostJump < track) {
					personal[distance * times] = initial;
					board[initial] = (personal.join("."));
				} else {
					
					personal[track - 1] = initial;
					board[initial] = (personal.join("."));
					winner = flea[0];
					for (var key in board) {
						console.log(board[key])
					}
					console.log( separator );
					console.log( separator );
					console.log("Winner: "+ winner);
					return;
				}
			} 
		}
	}
	
	for (var key in board) {
		console.log(board[key])
	}
	console.log( separator );
	console.log( separator );
	console.log("Winner: "+ winner);

}

var output2 = [3,5,["cura", 1],["Pepi", 1],["UlTraFlea", 1],["Boiko", 1]]
var output3 = [10,19, "angel, 9", "Boris, 10","Georgi, 3","Dimitar, 7"];
var output7 = [1, 1, "pesho, 1", "gosho, 1"]
solve(output7)