
function getComputerChoice (){
   let n = Math.floor(Math.random() * 3) + 1;
   
   if(n==1){
    return "Rock"
   }

   else if (n==2){
    return "Paper"
   }

   else {
    return "Scissor"
   }
}

//console.log(getComputerChoice());

function playRound(playerSelection,computerSelection){

    playerSelection = playerSelection.toUpperCase();
    computerSelection =computerSelection.toUpperCase();
    
    if(playerSelection==computerSelection){
        return "Tie"
    }

    else if (playerSelection =="ROCK" && computerSelection=="PAPER"){
        return "You lose"
    }

    else if (playerSelection=="ROCK" && computerSelection=="SCISSOR"){
        return "You win"
    }

    else if (playerSelection=="PAPER" && computerSelection=="ROCK"){
        return "You win"
    }

    else if (playerSelection=="PAPER" && computerSelection=="SCISSOR"){
        return "You lose"
    }

    else if (playerSelection=="SCISSOR" && computerSelection=="PAPER"){
        return "You win"
    }

    else if (playerSelection=="SCISSOR" && computerSelection=="ROCK"){
        return "You lose"
    }

}


/*const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));*/

function game () {
    let w =0;
    let l =0;
    for (let i =0 ; i<5 && w!=3 && l!=3;i++ ){

        let playerSelection = prompt("What's your selection?");
        let computerSelection = getComputerChoice();
        let msg = playRound(playerSelection,computerSelection);
        console.log("You chose " + playerSelection + " the computer chose " + computerSelection + " so, " + msg );

        if (msg == "You win"){
            w=w+1;
        }
        if (msg =="You lose"){
            l = l+1;
        }
    }

    console.log("The results are: Wins: " +w+ " Loses: " +l );
}

game()