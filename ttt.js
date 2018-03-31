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

//When box 1 is clicked
var revealCellOne = function () {

  //Select specific classlist
  EventTarget = document.querySelector('.cellone').classList
  //pushing clicked target into the array

  if (cellOne.textContent === "X" || cellOne.textContent === "O") {
    alert("The cell is already marked")
  } else if (currentPlayer === 1) {
    cellOne.textContent = "X"
    playerOneMoves.push(EventTarget[1])

  } else if (currentPlayer === 2) {
    cellOne.textContent = "O"
    playerTwoMoves.push(EventTarget[1])
  }

  console.log(playerOneMoves)
  console.log(playerTwoMoves)
  // switchPlayer()
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

//var playerOneMoves = []
//var playerTwoMoves = []

var countPlayerOneWins = 0;
var countPlayerTwoWins = 0;

function checkWin() {
  for (var i = 0; i < winningCombos.length; i++) {
    var combo = winningCombos[i] //['row-1box-1', 'row-1box-2', 'row1-box-3'],

    if ((playerOneMoves.indexOf(combo[0]) > -1)
      && (playerOneMoves.indexOf(combo[1]) > -1)
      && (playerOneMoves.indexOf(combo[2]) > -1)) {
      alert("Player One Wins!")

      //count win for Player One
      countPlayerOneWins = countPlayerOneWins + 1

      // DISPLAY COUNT WINS FOR PLAYER ONE
      playerOneScore.textContent = Number(playerOneScore.textContent) + Number(countPlayerOneWins)

    } else if ((playerTwoMoves.indexOf(combo[0]) > -1)
      && (playerTwoMoves.indexOf(combo[1]) > -1)
      && (playerTwoMoves.indexOf(combo[2]) > -1)) {
      alert("Player Two Wins!")

      //Count win for Player Two
      countPlayerTwoWins = countPlayerTwoWins + 1

      //DISPLAY COUNT WINS FOR PLAYER TWO
      playerTwoScore.textContent = Number(playerTwoScore.textContent) + Number(countPlayerTwoWins)
    }
  }
}

var switchPlayer = function () {

  //Once player one clicks, changes to player two's turn

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



cellOne.addEventListener('click', function () {
  revealCellOne()
  checkWin()
  switchPlayer()
})




//When box 2 is clicked
var revealCellTwo = function () {

  EventTarget = document.querySelector('.celltwo').classList
  //pushing clicked target into the array

  if (cellTwo.textContent === "X" || cellTwo.textContent === "O") {
    alert("The cell is already marked")
  } else if (currentPlayer === 1) {
    cellTwo.textContent = "X"
    playerOneMoves.push(EventTarget[1])

  } else if (currentPlayer === 2) {
    cellTwo.textContent = "O"
    playerTwoMoves.push(EventTarget[1])
  }

  console.log(playerOneMoves)
  console.log(playerTwoMoves)

}

var switchPlayer = function () {

  //Once player one clicks, changes to player two's turn
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

cellTwo.addEventListener('click', function () {
  revealCellTwo()
  checkWin()
  switchPlayer()
})



//When box 3 is clicked
var revealCellThree = function () {

  EventTarget = document.querySelector('.cellthree').classList
  //pushing clicked target into the array

  if (cellThree.textContent === "X" || cellThree.textContent === "O") {
    alert("The cell is already marked")
  } else if (currentPlayer === 1) {
    cellThree.textContent = "X"

    playerOneMoves.push(EventTarget[1])

  } else if (currentPlayer === 2) {
    cellThree.textContent = "O"
    playerTwoMoves.push(EventTarget[1])
  }

  console.log(playerOneMoves)
  console.log(playerTwoMoves)
}

var switchPlayer = function () {

  //Once player one clicks, changes to player two's turn
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


cellThree.addEventListener('click', function () {
  revealCellThree()
  checkWin()
  switchPlayer()
});




//When box 4 is clicked
var revealCellFour = function () {

  EventTarget = document.querySelector('.cellfour').classList
  //pushing clicked target into the array

  if (cellFour.textContent === "X" || cellFour.textContent === "O") {
    alert("The cell is already marked")
  } else if (currentPlayer === 1) {
    cellFour.textContent = "X"
    playerOneMoves.push(EventTarget[1])

  } else if (currentPlayer === 2) {
    cellFour.textContent = "O"
    playerTwoMoves.push(EventTarget[1])
  }

  console.log(playerOneMoves)
  console.log(playerTwoMoves)
}

var switchPlayer = function () {

  //Once player one clicks, changes to player two's turn
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

cellFour.addEventListener('click', function () {
  revealCellFour()
  checkWin()
  switchPlayer()
})



//When box 5 is clicked
var revealCellFive = function () {

  EventTarget = document.querySelector('.cellfive').classList
  //pushing clicked target into the array

  if (cellFive.textContent === "X" || cellFive.textContent === "O") {
    alert("The cell is already marked")
  } else if (currentPlayer === 1) {
    cellFive.textContent = "X"

    playerOneMoves.push(EventTarget[1])

  } else if (currentPlayer === 2) {
    cellFive.textContent = "O"
    playerTwoMoves.push(EventTarget[1])
  }

  console.log(playerOneMoves)
  console.log(playerTwoMoves)
}

var switchPlayer = function () {

  //Once player one clicks, changes to player two's turn
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

cellFive.addEventListener('click', function () {
  revealCellFive()
  checkWin()
  switchPlayer()
})


//When box 6 is clicked
var revealCellSix = function () {

  EventTarget = document.querySelector('.cellsix').classList
  //pushing clicked target into the array

  if (cellSix.textContent === "X" || cellSix.textContent === "O") {
    alert("The cell is already marked")
  } else if (currentPlayer === 1) {
    cellSix.textContent = "X"
    playerOneMoves.push(EventTarget[1])

  } else if (currentPlayer === 2) {
    cellSix.textContent = "O"
    playerTwoMoves.push(EventTarget[1])
  }

  console.log(playerOneMoves)
  console.log(playerTwoMoves)
}


var switchPlayer = function () {

  //Once player one clicks, changes to player two's turn
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

cellSix.addEventListener('click', function () {
  revealCellSix()
  checkWin()
  switchPlayer()
})



//When box 7 is clicked
var revealCellSeven = function () {

  EventTarget = document.querySelector('.cellseven').classList
  //pushing clicked target into the array

  if (cellSeven.textContent === "X" || cellSeven.textContent === "O") {
    alert("The cell is already marked")
  } else if (currentPlayer === 1) {
    cellSeven.textContent = "X"
    playerOneMoves.push(EventTarget[1])

  } else if (currentPlayer === 2) {
    cellSeven.textContent = "O"
    playerTwoMoves.push(EventTarget[1])
  }

  console.log(playerOneMoves)
  console.log(playerTwoMoves)
}

var switchPlayer = function () {

  //Once player one clicks, changes to player two's turn
  if (currentPlayer === 1) {
    currentPlayer = 2

  } else if (currentPlayer === 2) {
    currentPlayer = 1
  }
}
cellSeven.addEventListener('click', function () {
  revealCellSeven()
  checkWin()
  switchPlayer()
})



//When box 8 is clicked
var revealCellEight = function () {

  EventTarget = document.querySelector('.celleight').classList
  //pushing clicked target into the array

  if (cellEight.textContent === "X" || cellEight.textContent === "O") {
    alert("The cell is already marked")
  } else if (currentPlayer === 1) {
    cellEight.textContent = "X"
    playerOneMoves.push(EventTarget[1])

  } else if (currentPlayer === 2) {
    cellEight.textContent = "O"
    playerTwoMoves.push(EventTarget[1])
  }

  console.log(playerOneMoves)
  console.log(playerTwoMoves)
}

var switchPlayer = function () {

  //Once player one clicks, changes to player two's turn
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

cellEight.addEventListener('click', function () {
  revealCellEight()
  checkWin()
  switchPlayer()
})



//When box 9 is clicked
var revealCellNine = function () {

  EventTarget = document.querySelector('.cellnine').classList
  //pushing clicked target into the array

  if (cellNine.textContent === "X" || cellNine.textContent === "O") {
    alert("The cell is already marked")
  } else if (currentPlayer === 1) {
    cellNine.textContent = "X"
    playerOneMoves.push(EventTarget[1])

  } else if (currentPlayer === 2) {
    cellNine.textContent = "O"
    playerTwoMoves.push(EventTarget[1])
  }

  console.log(playerOneMoves)
  console.log(playerTwoMoves)
}

var switchPlayer = function () {

  //Once player one clicks, changes to player two's turn
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

cellNine.addEventListener('click', function () {
  revealCellNine()
  checkWin()
  switchPlayer()
})
