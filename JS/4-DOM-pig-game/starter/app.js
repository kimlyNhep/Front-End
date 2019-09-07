/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, activePlayer, dice, gamePlaying;

init();

document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gamePlaying) {
    //1.Random number
    var dice1 = Math.floor(Math.random() * 6 + 1);
    var dice2 = Math.floor(Math.random() * 6 + 1);

    //2.Display the result
    var diceDOM1 = document.querySelector(".dices .dice1");
    diceDOM1.style.display = "block";
    diceDOM1.src = "dice-" + dice1 + ".png";

    var diceDOM2 = document.querySelector(".dices .dice2");
    diceDOM2.style.display = "block";
    diceDOM2.src = "dice-" + dice2 + ".png";
    diceDOM2.parentElement.style.display = "block";

    //3. Update the round score IF the rolled number was NOT a 1
    //Add score
    roundScore += dice1 + dice2;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  }
});

//add event to btn hold
document.querySelector(".btn-hold").addEventListener("click", function() {
  if (gamePlaying) {
    //Add current score to Global score
    score[activePlayer] += roundScore;
    //Update the UI
    document.querySelector("#score-" + activePlayer).textContent =
      score[activePlayer];
    //check if player won the game
    if (score[activePlayer] >= 100) {
      //Winner
      document.querySelector("#name-" + activePlayer).textContent = "Winner";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

function nextPlayer() {
  //Next player
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.querySelector(".dices .dice1").style.display = "none";
  document.querySelector(".dices .dice2").style.display = "none";
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  score = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector(".dices").style.display = "none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}
