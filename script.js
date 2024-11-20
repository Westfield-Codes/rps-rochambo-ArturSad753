var score = [0,0];
var moves = ["r","p","s"];
/*main*/
function main(){
    let winner = 3;
    let rounds = setRounds();
    for (let round =1; round <= rounds; round++) {
        winner = rpsRound();
        score[winner]++
    }
    alert("You have "+score[0]+" and I have " +score[1]);
    if (score[0] > score[1]) alert("You win!");
    else alert("I win!");
}
function rpsRound(){
    let uChoice = 0;
    let cChoice = 0;
    while (uChoice == cChoice){
        uChoice = userTurn();
        cChoice = cpuTurn();
        if (uChoice == cChoice){
            alert("We both chose " +cChoice);
        }
    }
    let winner = findWinner(uChoice,cChoice);
    let players = ["you", "I"];
    let win = players.indexOf(winner);
    return win;
}

function setRounds(){
    let rounds = prompt("How many rounds?");
    if (rounds % 2 == 0){
         alert("Must be odd");
         return setRounds();
    }
    else return rounds;

}
/*userTurn
* @param: none
* @return: string(r,p, or s)
*/
function userTurn(){
    let choice = prompt("Enter r, p or s.");
    if (moves.includes(choice)){
        return choice;
    }
    else return userTurn();
}

/*cpuTurn
* @param: none
* @return: string (r,p, or s)
*/
function cpuTurn(){
    let choice = Math.floor(Math.random()*3);
    return moves[choice];
}

/*findWinner
* @param: u (srting), c (string)
* @return: none 
*/
function findWinner(u,c){
    let winArray=[
        ["r","p","I"],["r","s","you"], ["p","s","I"],["p","r","you"], ["s","r","I"],["s","p","you"]];
    for(let i = 0; i < winArray.length; i++){
        if (winArray[i][0] == u && winArray[i][1] == c){
            winner = winArray[i][2];
        }
    }
    alert("I chose " +c+ ", and you chose " +u+ " . " + winner + " win!");
    return winner;
}   


    

