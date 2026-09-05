
const choices = ["rock","paper","scissors"];
const playerdisplay = document.getElementById("player");
const computerdis = document.getElementById("computer");
const resultdis = document.getElementById("resultdis");
const playerScoredis =document.getElementById("playerScore");
const computerScoredis =document.getElementById("computerScore");
let playerScore =0;
let computerScore =0;

function playGame(player){
    const computer = choices[Math.floor(Math.random() * 3)];
    let result = "";
    if(player === computer){
        result = "IT'S A TIE";
    }
    else{
        switch(player){
            case "rock":
               result =  (computer === "scissors") ? "YOU WIN!" : "YOU LOSE";
               break;
             case "paper":
               result =  (computer === "rock") ? "YOU WIN!" : "YOU LOSE";
               break;
             case "scissors":
               result =  (computer === "paper") ? "YOU WIN!" : "YOU LOSE";
               break;
        }
    }
  playerdisplay.textContent = `PLAYER: ${player}`;
  computerdis.textContent = `COMPUTER: ${computer}`;
  resultdis.textContent = result;

  switch(result){

    case "YOU WIN!":
        resultdis.classList.remove("redText");
        resultdis.classList.add("greenText");

        playerScore++;
        playerScoredis.textContent = playerScore;
        break;

    case "YOU LOSE":
        resultdis.classList.remove("greenText");
        resultdis.classList.add("redText");

        computerScore++;
        computerScoredis.textContent = computerScore;
        break;
}
}