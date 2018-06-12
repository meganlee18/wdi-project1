/*
Tic tac toe
 
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

var results = document.querySelector(".results")

var currentPlayer = 1

var playerOneMoves = []
var playerTwoMoves = []

var dogWoof = new Audio("woof.mp3")
var dogHowl = new Audio("howl.mp3")

//Player One starts the game
if (currentPlayer === 1) {
  playerOneLogo.classList.add('playerturn');
}

//When cell is clicked
var revealCell = function (event) {

  //Select specific classlist
  var cell = event.target  // cell or element where the click event happened
  var cellClass = cell.classList[1]


  if (cell.style.backgroundImage != "") {
    results.innerHTML = "Uh-oh, a doggy is there!"
    cell.classList.remove('tada')
    cell.classList.add('animated')
    cell.classList.add('shake')
    return

  } else if (currentPlayer === 1) {
    cell.classList.add('animated')
    cell.classList.add('tada')
    cell.style.backgroundImage = "url('westie.jpg')"
    cell.style.backgroundSize = "100% 100%"
    cell.style.backgroundRepeat = "no-repeat"
    dogWoof.play()
    //push clicked target into the array
    playerOneMoves.push(cellClass)

  } else if (currentPlayer === 2) {
    cell.classList.add('animated')
    cell.classList.add('tada')
    cell.style.backgroundImage = "url('black_schnauzer.jpg')"
    cell.style.backgroundSize = "100% 100%"
    cell.style.backgroundRepeat = "no-repeat"
    dogWoof.play()
    playerTwoMoves.push(cellClass)
  }
  switchPlayer()
  
  console.log(playerOneMoves)
  console.log(playerTwoMoves)
}

//resetting the game after wins
//clearing all cells and player arrays
function resetGame() {
  for (var i = 0; i < allCells.length; i++) {
    var cell = allCells[i]
    cell.style.backgroundImage = ""
    results.innerHTML = ""
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
    if (cell.style.backgroundImage == "") {
      hasEmptyCells = true
    }
  }

  if (hasEmptyCells == false) {
    results.innerHTML = "Its a draw"
    setTimeout(function () { resetGame() }, 3000);
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
      dogHowl.play()
      results.innerHTML = "The Westie Wins!"
      setTimeout(function () { resetGame() }, 3000);

      //count wins for Player One
      countPlayerOneWins = countPlayerOneWins + 1

      // DISPLAY COUNT WINS FOR PLAYER ONE
      playerOneScore.textContent = Number(countPlayerOneWins)

    } else if ((playerTwoMoves.indexOf(combo[0]) > -1)
      && (playerTwoMoves.indexOf(combo[1]) > -1)
      && (playerTwoMoves.indexOf(combo[2]) > -1)) {
      dogHowl.play()
      results.innerHTML = "The Schnauzer Wins!"
      setTimeout(function () { resetGame() }, 3000);

      //Count wins for Player Two
      countPlayerTwoWins = countPlayerTwoWins + 1

      //DISPLAY COUNT WINS FOR PLAYER TWO
      playerTwoScore.textContent = Number(countPlayerTwoWins)
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
  results.innerHTML = ""
}

//When cell is clicked, the following functions run
function handleCellClick(event) {
  revealCell(event)
  checkWin()
}

//add click event to all cells
for (var i = 0; i < allCells.length; i++) {
  var cell = allCells[i]
  cell.addEventListener('click', handleCellClick)
}