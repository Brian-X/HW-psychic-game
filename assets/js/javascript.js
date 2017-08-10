
	console.log("hello world");
//There must be an alphabet for the computer and user to choose from
	var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//the computer must initiate the game by guessing a letter.
	var secret = alphabet[Math.floor(Math.random() * alphabet.length)];
	console.log(secret);

//Variables to show up in the game screen
	var wins = 0;
	var losses = 0;
	var guessRemain = 10;
	var guessCount = 0;

//When a key is depressed
	document.onkeydown = function(event) {

		var userGuess = event.key;

		if (userGuess === secret) {
			wins++
			secret
		} else {
			//The guessRemain needs to go down 1 unit, and the secret needs to reset
			guessRemain--
			secret
		}

		if (guessRemain = 0) {
			//The losses need to advance and the guesses remaining needs to be reset
			console.log(guessRemain);
			losses++

			guessRemain = 10;
			console.log(guessRemain);
		}


		console.log(wins);
		console.log(losses);
		console.log(guessRemain);
		console.log(guessCount);

	

	var html =
		"<p>Wins: " + wins + "</p>" +
		"<p>Losses: " + losses + "</p>" +
		"<p>Guesses Remaining: " + guessRemain + "</p>" +
		"<p>Your Guesses so far: " + guessCount + "</p>";

	// Set the inner HTML contents of the #game div to our html string
	document.querySelector("#game").innerHTML = html;
	};



// document.querySelector("#game").innerHTML = html;

// 	document.getElementById("wins").innerHTML = "Wins: " + wins;
//     document.getElementById("losses").innerHTML = "Losses:  " + losses;
//     document.getElementById("guessRemain").innerHTML = "Guesses Remaining: " + guessRemain;
//     document.getElementById("guessCount").innerHTML = "Your guesses so far: " + guesses;
