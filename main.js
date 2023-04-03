// Pseudo:
// 1)The game will initialize with the title, a brief description of how to win, and the Turn indicator set to 1, the first turn of the game. The gameboard will have all cards set to the "back" position showing. The "play again" button will be hidden until the game is over.
// 2) The player will start the game by clicking on a card, triggering an event listener to call a function which will turn the card over, displaying the value of the card.
// 3) The player will continue their turn by clicking and turning over a second card.
// 4) If the next card selected matches the previously turned card, the player's turn will continue and begin the pairing function again.
// 4B) If the next card selected does not match the previously turned card, both cards will revert to the "back" position and the player's current turn will end. The Turn indicator will increase by 1, up to 3 turns total.
// 5) If the player is able to match all 6 pairs of cards before all 3 turns have been exhausted, the player wins, the Turn indicator will change to display the message "You Win!!!", and the game will end.
// 5B) If the player ends all 3 turns without matching all 6 pairs of cards, the player loses, the Turn indicator will change to the message "Try Again", and the game will end.
// 6) Once the game ends with either result, the "Play Again" button will no longer be hidden and, once clicked, will re-initalize the game.