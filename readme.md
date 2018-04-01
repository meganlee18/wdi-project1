# Tic Tac Toe

Click here to play my game: <https://meganlee18.github.io/wdi-tictactoe/>

## Usage Instructions
This is a game for two players. The objective of the game is to compete between each other to achieve three "X"s or three"O"s in a row.

The game always start with Player One (as indicated in red above the grid). To play, click on a square to reveal "X". Then it's player two's turn to click on another square to reveal "O". Players may block each other's move while trying to achieve three "X"s or "O"s in a row. First player to achieve three in a row wins the game.

If neither player reaches three in a row before the game ends, this is considered a draw and neither player wins.

The score is tallied after the game and automatically resets so that a new game can begin. 

## Technologies Used
The game is designed with simplicity in mind. The title of the game uses the "Pacifico" font from Google fonts.

Icons in the game are from icon8.com 

## Approach to solving the problems
First, it is important to identify the things we need for the game. In this case, this will be a 3x3 grid, two players and a scoreboard.

Next, we will need to understand how the game works and then outline the game play strategy:

  1. Player 1's turn
  3. When Player 1 clicks on a square, X appears
  4. Player 2's turn
  5. Player 2 clicks on a square, O appears
  6. Once 3 crosses or 3 circles reached a row, alert "PLAYER 1 or PLAYER 2 WINS"
  7. Points on scoreboard for winning player

### Building the game
The first step is to create a 3x3 grid. When the player clicks on every cell of the grid, they should see either "X" or "O".

Next, we want players to switch after each turn.

Then, we want to check whether each player has achieved 3 "X"s or 3 "O"s in a row. If so, the player wins the game. If none of these have been achieved before the end of the game, then both players reach a draw. Game should reset afterwards so that a new game can begin.

Should a player wins the game, we want to count the score so that this can be displayed in the scoreboard. After that, the game should reset and contents emptied so that a new game can begin. 


## Next Steps
Improve the user interface so that the third "X" or "O' in the row reveal themselves before the player winner alert comes up.

Improve the design!! 



