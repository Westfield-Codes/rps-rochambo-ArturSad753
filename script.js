/*main*/
function main(){
    let uChoice = 0;
    let cChoice = 0;
    while (uChoice == cChoice){
        uChoice = userTurn();
        cChoice = cpuTurn();
        if (uChoice == cChoice){
            alert("We both chose"+cChoice);
        }
    }
    findWinner(uChoice,cChoice);
}
/*userTurn
* @param: none
* @return: string(r,p, or s)
*/
function userTurn(){
    let choice = "";
    while (choice != "r" && choice != "p" && choice != "s"){
    choice = prompt("Enter r,p or s.");
    if (choice == "r" || choice == "p" || choice == "s") return choice;
    else userTurn;
    }
}
/*cpuTurn
* @param: none
* @return: string (r,p, or s)
*/
function cpuTurn(){
    let choice = Math.floor(Math.random()*2);
    if (choice == 0) return "r";
    else if (choice == 1) return "p";
    else return "s";

}
/*findWinner
* @param: u (srting), c (string)
* @return: none 
*/
function findWinner(u,c){
    let winner = "I";
    if (u == "r") winner = "You";
        

    alert("You picked" +u+ "and I picked" +c+ ". " +winner+ " won that round.");
    

}