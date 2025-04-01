console.log("Hello, World!");

// returns 0, 1, 2 randomly
function randomInt(){
    return Math.floor(Math.random() * 3);
}
console.log(randomInt());

// returns Rock, paper, scissors randomly by matching
// randomInt values
function getComputerChoice(){
    switch(randomInt()){
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}
console.log(getComputerChoice());
