var moves = ["r","p","s"];
/*main*/
function main(){
    let uChoice = 0;
    let cChoice = 0;
    while (uChoice == cChoice){
        uChoice = userTurn();
        cChoice = cpuTurn();
        if (uChoice == cChoice){
            alert("We both chose " +cChoice);
        }
    }
    findWinner(uChoice,cChoice);
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
    let choice = Math.floor(Math.random()*2);
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
    }


    

