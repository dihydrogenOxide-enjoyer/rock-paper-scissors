console.log("Hello, World!");

//1. GET computer choice
//   - OBTAIN 0, 1, 2 randomly
//   - SWITCH 0, 1, 2
//       - CASE 0: "rock"
//       - CASE 1: "paper"
//       - CASE 2: "scissors"
//2. GET human choice
//   - READ prompt from user
//   - RETURN user's response
//3. SET scores: human and computer
//   - INITIALIZE humanScore and computerScore variables 
//     with 0.
//4. OBTAIN case insensitive human choice
//5. Play round
//   IF humanChoice and computerChoice are equal THEN
//     RETURN string with scores embedded and round result
//   ELSE IF humanChoice is "rock" and computerChoice is "paper"
//     INCREMENT humanScore
//     RETURN string with scores embedded and round result
//   ELSE IF humanChoice is "rock" and computerChoice is "paper"
//     INCREMENT computerScore
//     RETURN string with scores embedded and round result
//   ELSE IF humanChoice is "scissors" and computerChoice is "paper"
//      INCREMENT humanScore
//      RETURN string with scores embedded and round result
//   ELSE IF humanChoice is "scissors" and computerChoice is "rock"
//      INCREMENT computerScore
//      RETURN string with scores embedded and round result
//   ELSE IF humanChoice is "paper" and computerChoice is "rock"
//      INCREMENT humanScore
//      RETURN string with scores embedded and round result
//   ELSE IF humanChoice is "rock" and computerChoice is "scissors"
//      INCREMENT humanScore
//      RETURN string with scores embedded and round result
//   ELSE IF humanChoice is "paper" and computerChoice is "scissors"
//      INCREMENT computerScore
//      RETURN string with scores embedded and round result
//   ENDIF
//6. INITTIALIZE variable named count with 0
//7. Play game
//   SEQUENCE
//   - INCREMENT count
//   - DISPLAY playRound to console
//   - IF count < 5 THEN
//      RETURN play game
//   - ELSE RETURN string with count, humanScore, computerSCore
//       embedded
//   - ENDIF




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

