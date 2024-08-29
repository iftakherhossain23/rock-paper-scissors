function getComputerChoice(){
    let choiceNum = Math.floor(Math.random() * 3);
    if(choiceNum == 0) return "rock";
    else if(choiceNum == 1) return "paper";
    else if(choiceNum == 2) return "scissors";
}

function getHumanChoice(){
    let choiceEntered = false;
    while(!choiceEntered){
        let choice = prompt("Rock, paper, or scissors?\n").toLowerCase();
        if(choice == "r" || choice == "rock") return "rock";
        else if(choice == "p" || choice == "paper") return "paper";
        else if(choice == "s" || choice == "scissors") return "scissors";
        alert("Invalid choice.");
    }
}