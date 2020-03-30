const getUserChoice = userInput =>{
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput ==="paper" || userInput ==="scissors") {
        return userInput;
    } else {
        console.log("Choose a valid option");
    }
};

function getComputerChoice() {
    switch(Math.floor(Math.random()*3)) {
        case 0:
        return "rock";
        break;
        case 1:
        return "scissors";
        break;
        case 2:
            return "paper";
            break;
            
    };
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It\'s a tie!";
    } else if (userChoice === "rock"){
        if (computerChoice === "paper"){
            return "You Lose!";
        } else {
            return "You won!";
        }
    } else if (userChoice === "scissors"){
        if (computerChoice === "rock") {
            return "You Lose!";
        } else {
            return "You won!";
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "scissors"){
            return "You Lose!";
        } else {
        return "You won!";}
    }
};

function playGame() {
    var userChoice = getUserChoice('scissors');
    var computerChoice = getComputerChoice();
    console.log('you chose ' + userChoice);
    console.log('computer chose ' + computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
};
    

playGame()