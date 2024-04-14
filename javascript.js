const CHOICE = Array('paper', 'scissor', 'rock');

/*
2d array of player's winning condition

player / computer | paper | scissor | rock |
--------------------------------------------
############ paper|   0   |   -1    |   1  |
--------------------------------------------
########## scissor|   1   |    0    |  -1  |
--------------------------------------------
############# rock|   -1  |    1    |   0  |
--------------------------------------------

0 equals tie
1 equals player's win
-1 equals player's lose
*/

const RULE = [
    [0, -1, 1], 
    [1, 0 ,-1], 
    [-1, 1, 0]
]; 

const choiceButton = document.querySelector(".option");
const [summary, choiceSummary, scoreSummary, roundSummary, gameResult] = document.querySelectorAll(".summary");
let playerScore = 0;
let computerScore = 0;
let numRound = 0;

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getPlayerChoice(event) {
    let playerChoice = "";

    switch (event.target.id) {
        case "paper":
            playerChoice = "paper";
            break;
        case "scissor":
            playerChoice = "scissor";
            break;
        case "rock":
            playerChoice = "rock";
            break;
    }

    return CHOICE.indexOf(playerChoice);
}

function isGameOver() {
    return numRound >= 7 || playerScore >= 5 || computerScore >= 5;
}

function playRound(event) {
    let playerChoice = getPlayerChoice(event);
    let computerChoice = getComputerChoice();
    let roundResult = RULE[playerChoice][computerChoice];

    gameResult.innerHTML = "";
    numRound++;
    choiceSummary.innerHTML = `Player: ${CHOICE[playerChoice]} ---- Computer: ${CHOICE[computerChoice]}`;
    roundSummary.innerHTML = `Round: ${numRound} --- `

    if (roundResult === 1) {
        playerScore++;
        roundSummary.innerHTML += 'You win this round !!';
    }
    else if (roundResult === -1) {
        computerScore++;
        roundSummary.innerHTML += 'You lose this round !!';
    }
    else {
        roundSummary.innerHTML += 'This round tie !!';
    }

    scoreSummary.innerHTML = `Player: ${playerScore} ---- Computer: ${computerScore}`;

    if (isGameOver()) {
        if (Math.abs(playerScore - computerScore) < 2) {
            return;
        }
        else if (playerScore > computerScore) {
            gameResult.innerHTML = "You win the game!!";
        }
        else if (playerScore < computerScore) {
            gameResult.innerHTML = "You lose the game!!";
        }

        playerScore = 0;
        computerScore = 0;
        numRound = 0;
    }
}

    
choiceButton.addEventListener("click", function(event) {
    playRound(event);
})
