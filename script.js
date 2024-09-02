const options = document.querySelector(".options");
const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorBtn = document.querySelector(".scissor-btn");
const reset = document.querySelector(".reset-btn");
const playerScoreSpan = document.querySelector(".player-score");
const computerScoreSpan = document.querySelector(".computer-score");
const comments = document.querySelector(".comments");

let playerScore = 0;
let computerScore = 0;

function computerOption(){
    const optionArray = ["Rock", "Paper", "Scissor"];
    let randomIndex = Math.floor(Math.random() * 3);
    console.log(optionArray[randomIndex]);
    return optionArray[randomIndex];
}

function playerWon(player, computer){
    return (
    (player === "Rock" && computer === "Scissor")||
    (player === "Paper" && computer === "Rock")||
    (player === "Scissor" && computer === "Paper")
    );
}
function playerLose(player, computer){
    return (
        (player === "Rock" && computer === "Paper")||
        (player === "Paper" && computer === "Scissor")||
        (player === "Scissor" && computer === "Rock")
    );
}
rockBtn.addEventListener("click", function (){
    getResult("Rock");
})
paperBtn.addEventListener("click", function (){
    getResult("Paper");
})
scissorBtn.addEventListener("click", function (){
    getResult("Scissor");
})


function roundWin(){   
    playerScore++;
    playerScoreSpan.innerText = playerScore;
    if(playerScore === 5){
        comments.innerText = "Congratulations! you WIN.";
        replayAgn();
    }
}

function roundLose(){
    computerScore++;
    computerScoreSpan.innerText = computerScore;
    if(computerScore === 5){
        comments.innerText = "YOU LOSE! replay?";
        replayAgn();
    }
}

function getResult(option){
    const computer = computerOption();
    if(playerWon(option, computer)){
        console.log("you win")
        comments.innerText = `You win computer chose ${computer}.`;
        roundWin();
    }else if (option === computer){
        console.log("tie");
        comments.innerText = `Match tie computer chose ${computer}.`;
    }else {
        console.log("you lose")
        comments.innerText =   `You lose computer chose ${computer}.`;
        roundLose();
    }
    
}


function replayAgn(){
    reset.style.display = "block";
    options.style.display = "none";
}



reset.onclick = replay;

function replay(){
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.innerText = playerScore;
    computerScoreSpan.innerText = computerScore;
    comments.innerText = "Play Again.....";
    reset.style.display = "none";
    options.style.display = "block";
}