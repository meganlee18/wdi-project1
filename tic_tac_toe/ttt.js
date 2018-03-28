console.log("test")
/*

We'll be making tic tac toe (knots and crosses).

- Render a game in the browser
- Switch turns between more than one player
- Design logic for winning & visually display which player won
- Include separate HTML / CSS / JavaScript files
- Stick with KISS (Keep It Simple Stupid) principles
- Use Javascript for DOM manipulation
- Deploy your game online, where the rest of the world can access it
- Use semantic markup for HTML and CSS (adhere to best practices)

*/

  //Things we will need: 
  //game grid (3 by 3)
  //Two player avatars (border highlight comes on during player's turn)
  //score board
  //game objects - 9 crosses and 9 circles
  

  //My game strategy:
  //1. Game starts - user's turn (player 1's border lights up)
  //2. Game board -  showing message e.g "Click on a square" (optional: depending on difficulty)
  //3. When user clicks on a square of the grid, cross/circle appears
  //4. The other player representative's border lights up
  //5. Player 2  - pick a square
  //6. Once the third cross/circle has been selected in a row, game says "PLAYER WINS"
  //7. Button to restart game


var game = [ 
            ['', '', ''],
            ['', '', ''],
            ['', '', ''] 
          ];

//game [0][0] = "X" or "O"


var selectCellOne = document.querySelector(".cellone")
var selectCellTwo = document.querySelector(".celltwo")
var selectCellThree = document.querySelector(".cellthree")
var selectCellFour = document.querySelector(".cellfour")
var selectCellFive = document.querySelector(".cellfive")
var selectCellSix = document.querySelector(".cellsix")
var selectCellSeven = document.querySelector(".cellseven")
var selectCellEight = document.querySelector(".celleight")
var selectCellNine = document.querySelector(".cellnine")



var revealcellOne = function () {
	//var cellChoice = ?
	selectCellOne.textContent = cellChoice;
}
selectCellOne.addEventListener('click', cellChoice);
