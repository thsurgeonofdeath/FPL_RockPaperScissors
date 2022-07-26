let options = ["rock", "paper", "scissors"];
let Player_Score = 0;
let Computer_Score = 0;
let WINNING_SCORE = 5;

const PlayerScore = document.querySelector('#player_score');
const ComputerScore = document.querySelector('#comp_score');
const result = document.getElementById('result_text');
const finalResult = document.getElementById('final')


function getComputerChoice(){
    let choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

function PlayRound(playerChoice,computerChoice){
    if(playerChoice == computerChoice){
        return 0;
    }
    else if(playerChoice == "rock" && computerChoice == "paper"){
        Computer_Score ++;
        result.textContent = "You Lost against Liverpool! as always...";
        return -1;
    }
    else if(playerChoice == "paper" && computerChoice == "scissors"){
        Computer_Score ++;
        result.textContent = "Damn you really bottled it against Spurs of all people";
        return -1;
    }
    else if(playerChoice == "scissors" && computerChoice == "rock"){
        Computer_Score ++;
        result.textContent = "you lost to an europa league side, proud of you spurs!";
        return -1;
    }
    else if(playerChoice == "paper" && computerChoice == "rock"){
        Player_Score ++;
        result.textContent = "5-0!!! Sir Alex Feguson was watching you monster";
        return 1;
    }
    else if(playerChoice == "scissors" && computerChoice == "paper"){
        Player_Score ++;
        result.textContent = "Let's all take a moment to laugh at BottlePool";
        return 1;
    }
    else if(playerChoice == "rock" && computerChoice == "scissors"){
        Player_Score ++;
        result.textContent = "Don't get over yourself with this win, it's just Spurs";
        return 1;
    }

    
}

function played(e){
    finalResult.textContent ="";
    let player = e.target.id;
    let computer = getComputerChoice();
    PlayRound(player,computer);
    PlayerScore.textContent = `${Player_Score}`;
    ComputerScore.textContent = `${Computer_Score}`;
    if(Player_Score == WINNING_SCORE){
        finalResult.textContent = "You won the game, impressive";
        GameOver();
    } else if(Computer_Score == WINNING_SCORE){
        finalResult.textContent = "Hey look it's a bigger bottler than city";
        GameOver();
    }
}

const buttons = document.querySelectorAll('.btn')
buttons.forEach( button => button.addEventListener('click', played));

function GameOver(){
    Player_Score = 0;
    Computer_Score = 0;        
}

const reseting = document.getElementById('reset');
reseting.addEventListener('click',reset);

function reset(){
    Player_Score = 0;
    Computer_Score = 0;
    finalResult.textContent = "";
    result.textContent = "";
    PlayerScore.textContent = `${Player_Score}`;
    ComputerScore.textContent = `${Computer_Score}`;
}