const elections = document.querySelector(".elections");
const result = document.querySelector(".result");
const points = document.querySelector(".points");

const restartDiv = document.querySelector(".restartDiv")
const restartButton = document.createElement("button")
restartButton.textContent = "🔄";
restartButton.setAttribute ("id","restartButton");

let you;
let w=0;
let l=0;


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

function playRound(playerSelection,computerSelection){

    playerSelection = playerSelection.toUpperCase();
    computerSelection =computerSelection.toUpperCase();
    elections.textContent="You chose " + playerSelection + " the computer chose " + computerSelection + " so, ";



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

function totalPoints (result) {

    if (result == "You win"){
        w=w+1;
    }
    if (result =="You lose"){
        l = l+1;
    }

    if(w ==5) {
        return "You win the match! " +w+ "-" +l
    }

    if(l ==5) {
        return "You lose the match! " +w+ "-" +l
    }

    return "w: "+w + " l:" +l;
}



document.addEventListener("click", (e) =>{

    if(e.target.id == "restartButton")
    {
        console.log("restart button was pressed")
        w = 0;
        l = 0;
        elections.textContent = "";
        result.textContent ="";
        points.textContent ="";
        restartDiv.removeChild(restartButton);
    }

    if(w<5 && l<5) {

    

        switch(e.target.id) {

            
            case "rock":
                
                you=playRound("rock",getComputerChoice())
                result.textContent=you;
                points.textContent=totalPoints(you)
                
                if (w ==5 || l ==5){

                    restartDiv.appendChild(restartButton);
        
                }
                
                break;
            
            case "paper":
                you=playRound("paper",getComputerChoice())
                result.textContent=you;
                points.textContent=totalPoints(you)
                
                if (w ==5 || l ==5){

                    restartDiv.appendChild(restartButton);
        
                }
                
                break;
            
            case "scissor":
                you=playRound("scissor",getComputerChoice())
                result.textContent=you;
                points.textContent=totalPoints(you)
                
                if (w ==5 || l ==5){

                    restartDiv.appendChild(restartButton);
        
                }
                
                break;
            
        }
    }


}) 