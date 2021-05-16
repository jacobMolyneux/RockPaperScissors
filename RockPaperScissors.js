// adding elements to html
const choice = document.createElement('div');
const player = document.getElementById('player');
player.appendChild(choice);
const bigContainer = document.getElementById('container');
const options = document.getElementById('options');
const container = document.getElementById('playerContainer');
const computer = document.getElementById('computer');
const computerSelection = document.createElement('div');
computer.appendChild(computerSelection);
const scoreContainer = document.getElementById('ScoreCounter');
const playerScoreDisplay = document.getElementById('userScore');
const computerScoreDisplay = document.getElementById('computerScore');








// function for computer to choose its option randomly
function computerPlay(){
        i = Math.random();
        
        if(i <= 0.33){
            computerSelection.textContent = 'Rock!'
            return "rock";
            
        }
        else if(i > 0.33 && i <= 0.66 ){
            computerSelection.textContent = 'Paper!'
            return "paper";
        
        }
        else{
            computerSelection.textContent = 'Scissors!'
            return "scissors";
        }
    }

// logic that determines the winner
let playerScore = 0;
let computerScore = 0;
function playRound(PlayerSelection, computerPlay){
    let computerChoice = computerPlay;
    let player = PlayerSelection.toLowerCase();
    console.log("the computer Chose: " + computerChoice);
    console.log("You Chose :" + player);
    if(player == 'rock' && computerChoice == 'scissors'){
        console.log('You Win!');
        playerScore++;
        playerScoreDisplay.textContent = `Your Score: ${playerScore}`;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    }
    else if(player == 'rock' && computerChoice == 'paper'){
        console.log('You Lose!');
        computerScore++;
        playerScoreDisplay.textContent = `Your Score: ${playerScore}`;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    }
    else if(player == 'paper' && computerChoice == 'rock'){
        console.log("You Win!");
        playerScore++;
        playerScoreDisplay.textContent = `Your Score: ${playerScore}`;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    }
    else if(player == 'paper' && computerChoice == 'scissors'){
        console.log('You Lose!');
        computerScore++;
        playerScoreDisplay.textContent = `Your Score: ${playerScore}`;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    }
    else if(player == 'scissors' && computerChoice == 'rock'){
        console.log('You Lose!');
        computerScore++;
        playerScoreDisplay.textContent = `Your Score: ${playerScore}`;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    }
    else if(player == 'scissors' && computerChoice == 'paper'){
        console.log('You Win!');
        playerScore++;
        playerScoreDisplay.textContent = `Your Score: ${playerScore}`;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    }
    else if(player == computerChoice){
        console.log("Its a Tie!");
        playerScoreDisplay.textContent = `Your Score: ${playerScore}`;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    }
    
}


// event listeners that determine the users choice and lets game run on choice
let rock = document.getElementById('rock');

let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

rock.addEventListener("click", rockClicked);
function rockClicked(){
    let PlayerSelection = 'rock';
    choice.textContent = "Rock!"
    console.log("You chose " + PlayerSelection)

    computerPlay()
    playRound(PlayerSelection, computerPlay())
}
paper.addEventListener('click', paperClicked);
function paperClicked(){
    let PlayerSelection = 'paper';
    choice.textContent = "Paper!"
    console.log("You chose " + PlayerSelection)
    computerPlay()
    playRound(PlayerSelection, computerPlay())
}
scissors.addEventListener("click", scissorsClicked);
function scissorsClicked(){
    let PlayerSelection = 'scissors';
    choice.textContent = "Scissors!"
    console.log("You chose " + PlayerSelection)
    computerPlay()
    playRound(PlayerSelection, computerPlay())
}

// Styling Elements
choice.style.color = 'white';
choice.style.fontSize = '100px';
player.style.display = 'flex';
player.style.flexDirection = 'column';
choice.style.position = 'relative';
choice.style.margin = '100px';
options.style.display = 'flex';
container.style.display = 'flex';
container.style.flexDirection = 'column';
computerSelection.style.color = 'red';
computerSelection.style.fontSize = '100px';
bigContainer.style.display = 'flex';
bigContainer.style.flexDirection = 'row';
bigContainer.style.justifyContent = 'space-between';
bigContainer.style.alignItems = 'baseline';
computer.style.margin = '100px';
playerScoreDisplay.style.color = "white";
computerScoreDisplay.style.color = "white";

// player score icon stylings
// score.style.color = 'white';




