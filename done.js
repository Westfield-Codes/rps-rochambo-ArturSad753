
function main(){
    let pChoice = 0;
    let cChoice = 0;
    while (pChoice == cChoice){
        pChoice = userTurn();
        cChoice = cpuTurn();
        if (pChoice == cChoice) alert("Tie");
    }
    findWinner(pChoice,cChoice);
}
function userTurn(){
    let pChoice = prompt("Choose between r, p, and c");
    if (pChoice == "r" || pChoice == "p" || pChoice == "c") return (pChoice);
    else{
        alert("Bad input");
        userTurn();
    } 
}
function cpuTurn(){
    let cpuChoice = 0;
    let choice = Math.floor(Math.random()*2);
    if (choice == 0) cpuChoice = "r";
    else if (choice == 1) cpuChoice = "p";
    else if (choice == 2) cpuChoice = "s";
    return cpuChoice;
}
function findWinner(p,c){
    let winner = "Something went wrong";
    if (p == "r") {
        if (c == s) winner = "Player";
        else winner = "Computer";
    }
    else if (r == s){
        if (c == p) winner = "Player";
        else winner = "Computer";
    }
    else{
        if (c == r) winner = "Player";
        else winner = "Computer";
    }
    alert(winner+"Wins!");
}