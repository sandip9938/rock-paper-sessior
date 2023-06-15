let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("userscore");
const computerScore_span = document.getElementById("computerscore");
const scoreboard = document.querySelector(".scoreboard");
const result = document.querySelector(".result");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let sessior = document.getElementById("sessior");

function getComputerChoice() {
  const choice = ["rock", "paper", "sessior"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choice[randomNumber];
}

function convetToward(letter) {
  if (letter == "rock") return "Rock";
  if (letter == "paper") return "Paper";
  return "Sessior";
}

function win() {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result.innerHTML = ` you are win `
}
function loses() {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = ` you are Losses `
}
function draw() {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = ` Draw `
}

function game(userChoice) {
  const ComputerChoice = getComputerChoice();
  switch (userChoice + ComputerChoice) {
    case "rockpaper":
    case "papersessior":
    case "rocksessior":
      win();
      break;
    case "rockpaper":
    case "paperrock":
    case "sessiorpaper":
      loses();
      break;
    case "rockrock":
    case "paperpaper":
    case "sessiorsessior":
      draw();
      break;
  }
}
game("c");
function main() {
  rock.addEventListener("click", function () {
    game("rock");
  });
  paper.addEventListener("click", function () {
    game("paper");
  });
  sessior.addEventListener("click", function () {
    game("sessior");
  });
}
main();
