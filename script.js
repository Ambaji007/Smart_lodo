'use strict';

//{'#'}----> this is selector of Id....
//{'.'}----> this is selector of Class....

const player0Ele = document.querySelector('.player--0');
const player1Ele = document.querySelector('.player--1');
const score0Ele = document.getElementById('score--0');

//Another Method of using of Id  selector/......

const score1Ele = document.getElementById('score--1');

const curScorePlay1 = document.getElementById('current--0');
const curScorePlay2 = document.getElementById('current--1');

const wiinerEle = document.getElementById('wiiner')
const wiiner1Ele = document.getElementById('wiiner1')

const diceEle = document.querySelector('.dice');

const btnNewEle = document.querySelector('.btn--new');
const btnRollEle = document.querySelector('.btn--roll');

const btnHoldEle = document.querySelector('.btn--hold');

// console.log(btnHoldEle);
// console.log(btnRollEle);
// console.log(diceEle);

// console.log(diceEle);

//Starting Conditions...

let scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let playing = true;
score0Ele.textContent = 0;
  score1Ele.textContent = 0;
  curScorePlay1.textContent = 0;
  curScorePlay2.textContent = 0;
  playing = true;
  diceEle.classList.add('hidden');




//here we setting scores at 0;;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Ele.classList.toggle('player--active');
  player1Ele.classList.toggle('player--active');
  console.log('Switch to palyer to');
};

//Secound Condition
//Rooling The dice Functionalty;;;

btnRollEle.addEventListener('click', function () {
  if (playing) {
    //1. Genarating the randam numbers;;;
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //2.Display Dice...
    diceEle.classList.remove('hidden');
    diceEle.src = `dice-${dice}.png`;

    //3.Check for rooled  1 :if true,,,,
    if (dice !== 1) {
      // Add dice to Current score ..
      currentScore += dice;
      // Seclecting elements in dynamcally
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      document.getElementById(`score--${activePlayer}`).textContent =
        currentScore;

      document.getElementById('');
      // curScorePlay1.textContent = currentScore; //Change latter
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

btnHoldEle.addEventListener('click', function () {
  if (playing) {
    //1.st Add current score to active player score...
    scores[activePlayer] += currentScore;
    // console.log(scores[activePlayer]);
    //Explian above Condition as like
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2.Check if score is atleast >=100..
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer} `)
        .classList.add('player--winner');

      
        
      document

        .querySelector(`.player--${activePlayer} `)
        .classList.remove('player--active');

      diceEle.classList.add('hidden');

      //Finesh  the game
    } else {
      //or
      //Switch to another player
      switchPlayer();
    }
  }
});

const newGameSet = function () {
  // console.log("New game button");
  diceEle.classList.add('hidden');

 scores = [0, 0];
   activePlayer = 0;
   currentScore = 0;
   playing = true;

  
  score0Ele.textContent = 0;
  score1Ele.textContent = 0;
  curScorePlay1.textContent = 0;
  curScorePlay2.textContent = 0;
  player0Ele.classList.remove('player--winner');
  player1Ele.classList.remove('player--winner');
  player0Ele.classList.add('player--active');
  player1Ele.classList.remove('player--active');
};


btnNewEle.addEventListener('click', newGameSet);




