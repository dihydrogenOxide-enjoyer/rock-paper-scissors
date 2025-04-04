console.log("Hello, World!");

// returns 0, 1, 2 randomly
function randomInt(){
    return Math.floor(Math.random() * 3);
}

// returns Rock, paper, scissors randomly by matching
// randomInt values
function getComputerChoice(){
    switch(randomInt()){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}
// console.log(getComputerChoice());

function getHumanChoice(){
    return prompt("rock-paper-scissors", "rock");
}
// console.log(getHumanChoice())
let humanScore = 0;
let computerScore = 0;
let count = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        return `${humanChoice} against ${computerChoice} is a tie.`;
    } else if (humanChoice === "rock" &&
               computerChoice === "paper"
    ) {        computerScore++ ;
                return `You lose! Paper beats rock.\ncomputer score: ${computerScore}`;
    } else if (humanChoice === "scissors" &&
               computerChoice === "paper"
    ) {        humanScore++ ;
                return `You win! Scissors beat paper.\nhuman score: ${humanScore}`;
    } else if (humanChoice === "scissors" &&
               computerChoice === "rock"
    ) {        computerScore++
                return `You lose! Rock beats scissors.\ncomputer score: ${computerScore}`
    } else if (humanChoice === "paper" &&
               computerChoice === "rock"
    ) {        humanScore++
               return `You Win! Paper beats rock.\nhuman score: ${humanScore}`
    } else if (humanChoice === "rock" &&
               computerChoice === "scissors"
    ) {        humanScore++
                return `You win! Rock  beats scissors.\nhuman score: ${humanScore}`
    } else if (humanChoice === "paper" &&
               computerChoice === "scissors")
    {          computerScore++
                return `You lose! Scissors beat paper.\ncomputer score: ${computerScore}`
    } 
}

// console.log(playRound(humanSelection, computerSelection));


// function counter(){
//     if (count < 4){
//         count++
//         return `count: ${count}`;
//     } else {
//         return "game over.\n count: 5"
//     }
// }
// console.log(counter())

// play game function
function playGame(){
    count++
    console.log(playRound(getHumanChoice(), getComputerChoice()))
    if (count < 5) {
        return playGame();
    } else {return `No of rounds: ${count}\nhuman score:${humanScore}
computer score: ${computerScore}\nResult: ${winner()}`}
}
function winner(){
    if (computerScore > humanScore){
        return `Computer is the winner`
    } else if (computerScore < humanScore){
        return `You're the winner`
    } else {return `It's a tie.`}
}

console.log(playGame())

