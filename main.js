// Pseudo:
// 1)The game will initialize with the title, a brief description of how to win, and the Turns left indicator set to 3. The gameboard will have all cards set to the "back" position showing. The "play again" button will be hidden until the game is over.
// 2) The player will start the game by clicking on a card, triggering an event listener to call a function which will turn the card over, displaying the value of the card.
// 3) The player will continue their turn by clicking and turning over a second card.
// 4) If the next card selected matches the previously turned card, the player's turn will continue and begin the pairing function again.
// 4B) If the next card selected does not match the previously turned card, both cards will revert to the "back" position and the player's current turn will end. The Turn indicator will increase by 1, up to 3 turns total.
// 5) If the player is able to match all 6 pairs of cards before all 3 turns have been exhausted, the player wins, the Turn indicator will change to display the message "You Win!!!", and the game will end.
// 5B) If the player ends all 3 turns without matching all 6 pairs of cards, the player loses, the Turn indicator will change to the message "Try Again", and the game will end.
// 6) Once the game ends with either result, the "Play Again" button will no longer be hidden and, once clicked, will re-initalize the game.

/*----- constants -----*/
const cardChoices = [
    {
        card: 'Cipactli(Alligator)',
        img: 'Images/cipactli.png'
    },
    {
        card: 'Cipactli(Alligator)',
        img: 'Images/cipactli.png' 
    },
    {
        card: 'Coatl(Snake)',
        img: 'Images/coatl.png'
    },
    {
        card: 'Coatl(Snake)',
        img: 'Images/coatl.png'
    },
    // {
    //     card: 'Cozcacuauhtli(Vulture)',
    //     img: 'Images/cozcacuauhtli.png'
    // },
    // {
    //     card: 'Cozcacuauhtli(Vulture)',
    //     img: 'Images/cozcacuauhtli.png'
    // },
    // {
    //     card: 'Cuauhtli(Eagle)',
    //     img: 'Images/cuauhtli.png'
    // },
    // {
    //     card: 'Cuauhtli(Eagle)',
    //     img: 'Images/cuauhtli.png'
    // },
    // {
    //     card: 'Itzcuintli(Dog)',
    //     img: 'Images/itzcuintli.png'
    // },
    // {
    //     card: 'Itzcuintli(Dog)',
    //     img: 'Images/itzcuintli.png'
    // },
    // {
    //     card: 'Mazatl(Deer)',
    //     img: 'Images/mazatl.png'
    // },
    // {
    //     card: 'Mazatl(Deer)',
    //     img: 'Images/mazatl.png'
    // }
];

const matchImg  = 'Images/turquoise.png';

/*----- cached elements  -----*/
const gameBoard = document.querySelectorAll('.cards');

const matchIndicator = document.getElementById('match');

const playAgainBtn = document.querySelector('button');

const gameBoardArr = [...document.querySelectorAll('.cards')];

const turnsLeft = document.getElementById('turnNumber');

const cards = document.querySelectorAll('.cards img');


/*----- state variables -----*/
let userPicks = [];

let userPickIds = [];

let matchedCards = [];

/*----- event listeners -----*/
gameBoardArr.forEach((card, idx) => {
    card.addEventListener('click', function() {
        let chosenCard = cardChoices[idx];
        card.firstChild.setAttribute('src', chosenCard.img);
        card.firstChild.setAttribute('data-id', idx);
        let cardID = card.firstChild.getAttribute('data-id');
        userPicks.push(cardChoices[cardID].card);
        userPickIds.push(cardID);
        
        if(userPicks.length === 2) {
            setTimeout(checkForMatch, 700)
        }; 
        function checkForMatch() {
            if(userPicks[0] === userPicks[1]) {
                matchIndicator.innerHTML = `Cualli! You Matched ${cardChoices[cardID].card}!`;
                cards[userPickIds[0]].removeEventListener('click', chosenCard);
                cards[userPickIds[1]].removeEventListener('click', chosenCard);
                matchedCards.push(userPicks);               
            } else {
                cards[userPickIds[0]].setAttribute('src', 'Images/tlahtolli.png');
                cards[userPickIds[1]].setAttribute('src', 'Images/tlahtolli.png');
                matchIndicator.innerHTML  = 'Zampa! Try Again!'
            }
            if(userPickIds[0] === userPickIds[1]) {
                matchIndicator.innerHTML = "Axcualli! You can't pick the same card!"
            }
            userPicks = [];
            userPickIds =[];
        };
    })
})


/*----- functions -----*/


function randomizeCards(arr) {
    for (let i = arr.length - 1; i > 0;  i --) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}
randomizeCards(cardChoices);










