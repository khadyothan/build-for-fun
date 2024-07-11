var player1 = Math.floor(Math.random() * 6) + 1;
var player2 = Math.floor(Math.random() * 6) + 1;

var img1 = document.getElementsByClassName("img1")[0];
var img2 = document.getElementsByClassName("img2")[0];

img1.setAttribute("src", `images/dice${player1}.png`);
img2.setAttribute("src", `images/dice${player2}.png`);

var heading = document.querySelector("h1");

const checkWinner = function (score1, score2) {
  if (score1 > score2) {
    heading.innerHTML = "Player 1 Wins 🚩";
  } else if (score2 > score1) {
    heading.innerHTML = "Player 2 Wins 🚩";
  } else {
    heading.innerHTML = "DRAW!";
  }
};

checkWinner(player1, player2);
