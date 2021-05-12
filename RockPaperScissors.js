


function computerPlay(){
        i = Math.random();
        
        if(i <= 0.33){

            return "rock";
        }
        else if(i > 0.33 && i <= 0.66 ){
            return "paper";
        }
        else{
            return "scissors";
        }
  }
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
    }
    else if(player == 'rock' && computerChoice == 'paper'){
        console.log('You Lose!');
        computerScore++;
    }
    else if(player == 'paper' && computerChoice == 'rock'){
        console.log("You Win!");
        playerScore++;
    }
    else if(player == 'paper' && computerChoice == 'scissors'){
        console.log('You Lose!');
        computerScore++;
    }
    else if(player == 'scissors' && computerChoice == 'rock'){
        console.log('You Lose!');
        computerScore++;
    }
    else if(player == 'scissors' && computerChoice == 'paper'){
        console.log('You Win!');
        playerScore++;
    }
    else if(player == computerChoice){
        console.log("Its a Tie!");
    }
    
}


let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

rock.addEventListener("click", rockClicked);
function rockClicked(){
    let PlayerSelection = 'rock'
    console.log("You chose " + PlayerSelection)
    computerPlay()
    playRound(PlayerSelection, computerPlay())
}
paper.addEventListener('click', paperClicked);
function paperClicked(){
    let PlayerSelection = 'paper';
    console.log("You chose " + PlayerSelection)
    computerPlay()
    playRound(PlayerSelection, computerPlay())
}
scissors.addEventListener("click", scissorsClicked);
function scissorsClicked(){
    let PlayerSelection = 'scissors';
    console.log("You chose " + PlayerSelection)
    computerPlay()
    playRound(PlayerSelection, computerPlay())
}
let pScore = document.getElementById('pScore');
let cScore = document.getElementById('cScore');
pScore.textContent = str(playerScore);
cScore.textContent = str(computerScore);

