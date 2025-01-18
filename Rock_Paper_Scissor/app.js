let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userCurrentScore = document.querySelector("#user-score");
let compCurrentScore = document.querySelector("#comp-score");

const drawGame = () => {
  msg.innerHTML = "Your game is Drawn";
  msg.style.backgroundColor = "#081b31";
};

const gameWin = (userChoice, compChoice) => {
  userScore++;
  userCurrentScore.innerHTML = userScore;
  msg.innerHTML = `You Win your choice ${userChoice} beats comp choice ${compChoice}`;
  msg.style.backgroundColor = "green";
};

const gameLost = (userChoice, compChoice) => {
  compScore++;
  compCurrentScore.innerHTML = compScore;
  msg.innerHTML = `You Lost comp choice ${compChoice} beats your choice ${userChoice}`;
  msg.style.backgroundColor = "red";
};

const genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let randIndex = Math.floor(Math.random() * 3);
  return options[randIndex];
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  if (userChoice == compChoice) {
    drawGame();
  } else {
    let userWins = true;
    if (userChoice == "rock") {
      userWins = compChoice == "paper" ? false : true;
    } else if (userChoice == "paper") {
      userWins = compChoice == "scissors" ? false : true;
    } else {
      userWins = compChoice == "rocks" ? false : true;
    }

    if (userWins) {
      gameWin(userChoice, compChoice);
    } else gameLost(userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
