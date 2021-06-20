// adding elements to html
const choice = document.createElement("div");
choice.setAttribute("id", "choiceDiv");
const player = document.getElementById("player");
player.appendChild(choice);

const bigContainer = document.getElementById("container");
const options = document.getElementById("options");
const container = document.getElementById("playerContainer");
const computer = document.getElementById("computer");
const computerSelection = document.createElement("div");
computerSelection.setAttribute("id", "computerSelection");
computer.appendChild(computerSelection);

const scoreContainer = document.getElementById("ScoreCounter");
const playerScoreDisplay = document.getElementById("userScore");
const computerScoreDisplay = document.getElementById("computerScore");

// function for computer to choose its option randomly
const addImagePlayer = (parentNode, imagepath) => {
  const imageHolder = document.createElement("img");
  imageHolder.setAttribute("id", "chosenImage");
  imageHolder.src = imagepath;
  parentNode.appendChild(imageHolder);
};
const addImageComp = (parentNode, imagepath) => {
  const imageHolder = document.createElement("img");
  imageHolder.setAttribute("id", "chosenImage");
  imageHolder.src = imagepath;
  parentNode.appendChild(imageHolder);
};
function computerPlay() {
  i = Math.random();

  if (i <= 0.33) {
    computerSelection.textContent = "Rock!";
    addImageComp(computerSelection, "./Pictures/RockIcon.png");
    return "rock";
  } else if (i > 0.33 && i <= 0.66) {
    computerSelection.textContent = "Paper!";
    addImageComp(computerSelection, "./Pictures/handIcon.png");
    return "paper";
  } else {
    computerSelection.textContent = "Scissors!";
    addImageComp(computerSelection, "./Pictures/ScissorsIcon.png");
    return "scissors";
  }
}

// logic that determines the winner
let playerScore = 0;
let computerScore = 0;
function playRound(PlayerSelection, computerPlay) {
  let computerChoice = computerPlay;
  let player = PlayerSelection.toLowerCase();
  console.log("the computer Chose: " + computerChoice);
  console.log("You Chose :" + player);
  if (player == "rock" && computerChoice == "scissors") {
    console.log("You Win!");
    playerScore++;
    playerScoreDisplay.textContent = `Your Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
  } else if (player == "rock" && computerChoice == "paper") {
    console.log("You Lose!");
    computerScore++;
    playerScoreDisplay.textContent = `Your Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
  } else if (player == "paper" && computerChoice == "rock") {
    console.log("You Win!");
    playerScore++;
    playerScoreDisplay.textContent = `Your Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
  } else if (player == "paper" && computerChoice == "scissors") {
    console.log("You Lose!");
    computerScore++;
    playerScoreDisplay.textContent = `Your Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
  } else if (player == "scissors" && computerChoice == "rock") {
    console.log("You Lose!");
    computerScore++;
    playerScoreDisplay.textContent = `Your Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
  } else if (player == "scissors" && computerChoice == "paper") {
    console.log("You Win!");
    playerScore++;
    playerScoreDisplay.textContent = `Your Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
  } else if (player == computerChoice) {
    console.log("Its a Tie!");
    playerScoreDisplay.textContent = `Your Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
  }
}

// event listeners that determine the users choice and lets game run on choice
let rock = document.getElementById("rockIcon");

let paper = document.getElementById("paperIcon");
let scissors = document.getElementById("scissorsIcon");

rock.addEventListener("click", rockClicked);
function rockClicked() {
  let PlayerSelection = "rock";
  choice.textContent = "Rock!";
  console.log("You chose " + PlayerSelection);
  addImagePlayer(choice, "./Pictures/RockIcon.png");

  computerPlay();
  playRound(PlayerSelection, computerPlay());
}
paper.addEventListener("click", paperClicked);
function paperClicked() {
  let PlayerSelection = "paper";
  choice.textContent = "Paper!";
  addImagePlayer(choice, "./Pictures/handIcon.png");
  console.log("You chose " + PlayerSelection);
  computerPlay();
  playRound(PlayerSelection, computerPlay());
}
scissors.addEventListener("click", scissorsClicked);
function scissorsClicked() {
  let PlayerSelection = "scissors";

  choice.textContent = "Scissors!";
  addImagePlayer(choice, "./Pictures/ScissorsIcon.png");
  console.log("You chose " + PlayerSelection);
  computerPlay();
  playRound(PlayerSelection, computerPlay());
}
