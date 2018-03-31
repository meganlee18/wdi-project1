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
 
  My game strategy:
  1. Player 1's turn (border lights up)
  3. When Player 1 clicks on a square, cross appears
  4. Player 2's border lights up
  5. Player 2 clicks on a square, circle appears
  6. Once 3 crosses or 3 circles reached a row, alert "PLAYER 1 or 2 WINS"
  7. Points on scoreboard for winning player
*/

var cellOne = document.querySelector(".cellone")
var cellTwo = document.querySelector(".celltwo")
var cellThree = document.querySelector(".cellthree")
var cellFour = document.querySelector(".cellfour")
var cellFive = document.querySelector(".cellfive")
var cellSix = document.querySelector(".cellsix")
var cellSeven = document.querySelector(".cellseven")
var cellEight = document.querySelector(".celleight")
var cellNine = document.querySelector(".cellnine")

var allCells = [cellOne, cellTwo, cellThree, cellFour, cellFive, cellSix, cellSeven, cellEight, cellNine]

var playerOneScore = document.querySelector(".playerOneScore")
var playerTwoScore = document.querySelector(".playerTwoScore")

var playerOneLogo = document.querySelector(".playeronelogo")
var playerTwoLogo = document.querySelector(".playertwologo")

var currentPlayer = 1

var playerOneMoves = []
var playerTwoMoves = []


if (currentPlayer === 1) {
  playerOneLogo.classList.add('playerturn');
}

//When cell is clicked
var revealCell = function (event) {

  //Select specific classlist
  cell = event.target  // cell/ element where the click event happened
  cellClass = cell.classList[1]
  //pushing clicked target into the array

  if (cell.textContent === "X" || cell.textContent === "O") {
    alert("The cell is already marked")
  } else if (currentPlayer === 1) {
    cell.textContent = "X"
    playerOneMoves.push(cellClass)

  } else if (currentPlayer === 2) {
    cell.textContent = "O"
    playerTwoMoves.push(cellClass)
  }

  console.log(playerOneMoves)
  console.log(playerTwoMoves)
}

//resetting the game after wins
//clearing all cells and player arrays
function resetGame() {
  for (var i = 0; i < allCells.length; i++) {
    var cell = allCells[i]
    cell.textContent = ""
  }
  playerOneMoves = []
  playerTwoMoves = []
}

//checking the game for draws
//If so, apply the reset function at the end of the game
function checkDraw() {
  var hasEmptyCells = false;
  for (var i = 0; i < allCells.length; i++) {
    var cell = allCells[i]
    if (cell.textContent == "") {
      hasEmptyCells = true
    }
  }

  if (hasEmptyCells == false) {
    alert("Its a draw")
    resetGame();
  }
}

// check for wins
var winningCombos = [
  ['row-1box-1', 'row-1box-2', 'row-1box-3'],
  ['row-2box-1', 'row-2box-2', 'row-2box-3'],
  ['row-3box-1', 'row-3box-2', 'row-3box-3'],
  ['row-1box-1', 'row-2box-1', 'row-3box-1'],
  ['row-1box-2', 'row-2box-2', 'row-3box-2'],
  ['row-1box-3', 'row-2box-3', 'row-3box-3'],
  ['row-1box-1', 'row-2box-2', 'row-3box-3'],
  ['row-1box-3', 'row-2box-2', 'row-3box-1']
];

var countPlayerOneWins = 0;
var countPlayerTwoWins = 0;

function checkWin() {
  for (var i = 0; i < winningCombos.length; i++) {
    var combo = winningCombos[i] //['row-1box-1', 'row-1box-2', 'row1-box-3'],

    if ((playerOneMoves.indexOf(combo[0]) > -1)
      && (playerOneMoves.indexOf(combo[1]) > -1)
      && (playerOneMoves.indexOf(combo[2]) > -1)) {
      alert("Player One Wins!")
      resetGame();

      //count wins for Player One
      countPlayerOneWins = countPlayerOneWins + 1

      // DISPLAY COUNT WINS FOR PLAYER ONE
      playerOneScore.textContent = Number(playerOneScore.textContent) + Number(countPlayerOneWins)

    } else if ((playerTwoMoves.indexOf(combo[0]) > -1)
      && (playerTwoMoves.indexOf(combo[1]) > -1)
      && (playerTwoMoves.indexOf(combo[2]) > -1)) {
      alert("Player Two Wins!")
      resetGame();

      //Count wins for Player Two
      countPlayerTwoWins = countPlayerTwoWins + 1

      //DISPLAY COUNT WINS FOR PLAYER TWO
      playerTwoScore.textContent = Number(playerTwoScore.textContent) + Number(countPlayerTwoWins)
    } else {
      checkDraw()
    }
  } 
}

//Switch between players
//Once player one clicks, changes to player two's turn

var switchPlayer = function () {

  if (currentPlayer === 1) {
    currentPlayer = 2
    playerTwoLogo.classList.add('playerturn');
    playerOneLogo.classList.remove('playerturn');

  } else if (currentPlayer === 2) {
    currentPlayer = 1
    playerTwoLogo.classList.remove('playerturn');
    playerOneLogo.classList.add('playerturn');
  }
}

//When cell is clicked, the following functions run
function handleCellClick(event) {
  revealCell(event)
  switchPlayer()
  checkWin()
}

//add click event to all cells
for (var i = 0; i < allCells.length; i++) {
  var cell = allCells[i]
  cell.addEventListener('click', handleCellClick)
}