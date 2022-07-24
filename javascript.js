function getComputerChoice(){
    let choice = Math.floor(Math.random()*3)+1;
    if(choice == 1){
        return "rock";
    }
    else if(choice == 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function PlayRound(playerChoice,computerChoice){
    if(playerChoice == computerChoice){
        return 0;
    }
    else if(playerChoice == "rock" && computerChoice == "paper"){
        return -1;
    }
    else if(playerChoice == "paper" && computerChoice == "scissors"){
        return -1;
    }
    else if(playerChoice == "scissors" && computerChoice == "rock"){
        return -1;
    }
    else if(playerChoice == "paper" && computerChoice == "rock"){
        return 1;
    }
    else if(playerChoice == "scissors" && computerChoice == "paper"){
        return 1;
    }
    else if(playerChoice == "rock" && computerChoice == "scissors"){
        return 1;
    }else{
        return -100;
    }
}

function getPlayerChoice(){
    let choice = window.prompt("choose your weapon: 1 for paper, 2 for scissors, 3 for rock");
    if (choice == 1){
        return "paper";
    }
    else if (choice == 2){
        return "scissors";
    }
    else if (choice == 3){
        return "rock";
    }
}

function getRoundWinner(round){
    if (round == 1){
        return "Winner";
    }
    else if (round == 0){
        return "Draw";
    }
    else if (round == -1){
        return "You got destroyed kid";
    }
    else{
        return 0;
    }
}


function game(){
    result = 0;
    for(let i=0;i<5;i++){
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        let round = PlayRound(playerChoice,computerChoice);
        result += round;
        console.log(getRoundWinner(round));
        if(getRoundWinner(round) == 0){
            return "Game was endend because invalid input";
        }
    }
    if(result > 0){
        return "Damn Kid, you're goated"
    }
    else if(result == 0){
        return "Decent, average at best";
    }
    else{
        return "Holy crap dude you're dog water"
    }
}


//start the game
window.alert(game());