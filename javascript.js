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
    return choiceNum = Math.floor(Math.random() * 3);
}

function getPlayerChoice() {
    let playerChoice = prompt('Input your choice').toLowerCase();

    while (CHOICE.indexOf(playerChoice) == -1) {
        playerChoice = prompt('Invalid input, Please input again').toLowerCase();
    }

    return CHOICE.indexOf(playerChoice);
}

function playRound() {
    playerChoice = getPlayerChoice();
    console.log(`player choice is ${CHOICE[playerChoice]}`)
    
    computerChoice = getComputerChoice();
    console.log(`computer choice is ${CHOICE[computerChoice]}`)
    
    roundResult = RULE[playerChoice][computerChoice];

    if (roundResult === 1) {
        console.log('You win!!')
    }
    else if (roundResult === -1) {
        console.log('You lose!!')
    }
    else {
        console.log('tie')
    }
    
    return roundResult;
}

function main() {
    roundResult = playRound()
    
    while (roundResult === 0 || roundResult === -1) {
        roundResult = playRound()
    }
}

main()
