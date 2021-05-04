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
function playRound(PlayerSelection, computerPlay){
    let computerChoice = computerPlay;
    let player = PlayerSelection.toLowerCase();
    console.log("the computer Chose: " + computerChoice);
    console.log("You Chose :" + player);
    if(player == 'rock' && computerChoice == 'scissors'){
        console.log('You Win!');
    }
    else if(player == 'rock' && computerChoice == 'paper'){
        console.log('You Lose!');
    }
    else if(player == 'paper' && computerChoice == 'rock'){
        console.log("You Win!");
    }
    else if(player == 'paper' && computerChoice == 'scissors'){
        console.log('You Lose!');
    }
    else if(player == 'scissors' && computerChoice == 'rock'){
        console.log('You Lose!');
    }
    else if(player == 'scissors' && computerChoice == 'paper'){
        console.log('You Win!');
    }
    else if(player == computerChoice){
        console.log("Its a Tie!");
    }
    
}
let PlayerSelection = prompt("what is your choice?")
console.log("You chose " + PlayerSelection)
computerPlay()
playRound(PlayerSelection, computerPlay())


