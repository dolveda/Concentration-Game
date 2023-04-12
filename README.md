# NEYOLLOTILO: A MEMORY GAME:
Neyollotilo is a memory game and language learning tool which means "Something to  commit  to memory" in Nahuatl, the most spoken indigenous language on this continent. The game uses animal images from pre-colonial sources with their Nahuatl nomenclature, as well as an english translation. Message and button features of the game also include Nahuatl words and phrases with approximate translations. The goal of this game is to help those learning their indigenous language practice their memory and pronunciations of Nahuatl words and animals.

## Getting Started:
https://dolveda.github.io/Concentration-Game/

1)The game will render with the title, a brief description of how to win, and the Turns left indicator set to 4. The gameboard will have all cards set to the "back" position showing. The "play again" button will be hidden until the game is over.
![startgame](/screenshots/start.png)

2) The player will start the game by clicking on a card, triggering an event listener to call a function which will turn the card over, displaying the value of the card.

3) The player will continue their turn by clicking and turning over a second card.

4) If the next card selected matches the previously turned card, the player's turn will continue and begin the pairing function again. The message display will read "Cualli! You Matched "___"!
![match](/screenshots/match.png)

4B) If the next card selected does not match the previously turned card, both cards will revert to the "back" position and the player's current turn will end. The Turn indicator will decrease by 1. The message display will read "Zampa! Try Again!"
![NoMatch](/screenshots/nomatch.png)

5) If the player is able to match all 6 pairs of cards before all 4 turns have been exhausted, the player wins, the message display will read "Cualtitoc! Tatlani! Great Job! You Win!", and the game will end with the "Play Again" button displayed.
![win](/screenshots/win.png)

6)If the player ends all 3 turns without matching all 6 pairs of cards, the player loses, the message display will read "Out of turns!  Amapatoa Occepa! Play Again!", and the game will end.
Once the game ends, the "Play Again" button will be displayed and, once clicked, will reload the game.
![loss](/screenshots/loss.png)

## Technologies Used:
    -HTML
    -CSS
    -Javascript

## Next Steps:
I'd like to broaden the scope of the game to include a deck of cards to choose from which will include many more words and subjects, including everyday items such as paper-amoxtli, pencil-tlicolli, and even computer-tepotzpoani! My goal is to make the game a resource for Nahuatl teachers and students, and possibly even broaden the scope to other indigenous languages.