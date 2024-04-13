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


function playRound(event) {
    let playerChoice = getPlayerChoice(event);
    let computerChoice = getComputerChoice();
    let roundResult = RULE[playerChoice][computerChoice];

    return [playerChoice, computerChoice, roundResult];
}

const choiceButton = document.querySelector(".option");
const summary = document.querySelectorAll(".summary")

choiceButton.addEventListener("click", function(event) {
    let [playerChoice, computerChoice, roundResult] = playRound(event);
    summary[1].innerHTML = `Player choice is ${CHOICE[playerChoice]}`;
    summary[2].innerHTML =  `Computer choice is ${CHOICE[computerChoice]}`;

    if (roundResult === 1) {
        summary[3].innerHTML = 'You win !!';
    }
    else if (roundResult === -1) {
        summary[3].innerHTML = 'You lose !!';
    }
    else {
        summary[3].innerHTML = 'Tie !!';
    }

    }
)
