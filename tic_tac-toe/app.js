
let playerSymbol;
let computerSymbol;
let square = [];
let square1 = document.getElementById("gameSquare1");
let square2 = document.getElementById("gameSquare2");
let square3 = document.getElementById("gameSquare3");
let square4 = document.getElementById("gameSquare4");
let square5 = document.getElementById("gameSquare5");
let square6 = document.getElementById("gameSquare6");
let square7 = document.getElementById("gameSquare7");
let square8 = document.getElementById("gameSquare8");
let square9 = document.getElementById("gameSquare9");

let winningSymbol;

// let randomNumber = Math.floor((Math.random()*9)+1);

// let squareNumber = ['square' + randomNumber];
// let squareNumber = document.getElementById("gameSquare" + randomNumber);








document.getElementById("chooseSideX").onclick = function(){
    playerSymbol =  "X"
    computerSymbol = "O"
    console.log("Player Symbol is " + playerSymbol);
    console.log("Computer Symbol is " + computerSymbol);
    sideChosen();  
};

document.getElementById("chooseSideO").onclick = function(){
    playerSymbol =  "O"
    computerSymbol = "X"
    console.log("Player Symbol is " + playerSymbol);
    console.log("Computer Symbol is " + computerSymbol);
    sideChosen();  
};


function sideChosen(){
    document.getElementById("chooseSide").style.display = "none";
    document.getElementById("playInstruction").style.display = "block";
};

// console.log(checkWin);

document.getElementById("gameSquare1").addEventListener("click", function(){
    if (this.innerHTML = " ") {
        this.innerHTML = playerSymbol; 
        let checkWin = square1;
        console.log(checkWin);
        playerHasWon();     
    } else {
       alert("Please Choose an empty cell") 
    } 
    
   do {setTimeout(randomComputerSquare,750);
} while (playerHasWon == false);
    
});

document.getElementById("gameSquare2").addEventListener("click", function(){
    if (this.innerHTML = " ") {
        this.innerHTML = playerSymbol; 
        let checkWin = square2;
        playerHasWon();  
    } else {
       alert("Please Choose an empty cell") 
    } 
    do {setTimeout(randomComputerSquare,750);
    } while (playerHasWon == false);
      
});

document.getElementById("gameSquare3").addEventListener("click", function(){
    if (this.innerHTML = " ") {
        this.innerHTML = playerSymbol;
        let checkWin = square3;
        playerHasWon();     
        // hasWon();  
    } else {
       alert("Please Choose an empty cell") 
    } 
    do {setTimeout(randomComputerSquare,750);
    } while (playerHasWon == false);
      
});

document.getElementById("gameSquare4").addEventListener("click", function(){
    if (this.innerHTML = " ") {
        this.innerHTML = playerSymbol; 
        let checkWin = square4;
        playerHasWon();     
    } else {
       alert("Please Choose an empty cell") 
    } 
    do {setTimeout(randomComputerSquare,750);
    } while (playerHasWon == false);
      
});

document.getElementById("gameSquare5").addEventListener("click", function(){
    if (this.innerHTML = " ") {
        this.innerHTML = playerSymbol;  
        let checkWin = square5;
        playerHasWon();    
    } else {
       alert("Please Choose an empty cell") 
    } 
    do {setTimeout(randomComputerSquare,750);
    } while (playerHasWon == false);
      
});
document.getElementById("gameSquare6").addEventListener("click", function(){
    if (this.innerHTML = " ") {
        this.innerHTML = playerSymbol; 
        let checkWin = square6;
        playerHasWon();    
    } else {
       alert("Please Choose an empty cell") 
    } 
    do {setTimeout(randomComputerSquare,750);
    } while (playerHasWon == false);
      
});
document.getElementById("gameSquare7").addEventListener("click", function(){
    if (this.innerHTML = " ") {
        this.innerHTML = playerSymbol; 
        let checkWin = square7;
        playerHasWon();     
    } else {
       alert("Please Choose an empty cell") 
    } 
    do {setTimeout(randomComputerSquare,750);
    } while (playerHasWon == false);
      
});
document.getElementById("gameSquare8").addEventListener("click", function(){
    if (this.innerHTML = " ") {
        this.innerHTML = playerSymbol; 
        let checkWin = square8;
        playerHasWon();    
    } else {
       alert("Please Choose an empty cell") 
    } 
    do {setTimeout(randomComputerSquare,750);
    } while (playerHasWon == false);
      
});
document.getElementById("gameSquare9").addEventListener("click", function(){
    if (this.innerHTML = " ") {
        this.innerHTML = playerSymbol; 
        let checkWin = square9;
        playerHasWon();    
    } else {
       alert("Please Choose an empty cell") 
    } 
    do {setTimeout(randomComputerSquare,750);
    } while (playerHasWon == false);
      
});

function playerHasWon(){
    if (square1.innerHTML == "X" && square2.innerHTML == "X" && square3.innerHTML == "X" || square4.innerHTML == "X" && square5.innerHTML == "X" && square6.innerHTML == "X" || square7.innerHTML == "X" && square8.innerHTML == "X" && square9.innerHTML == "X" || square1.innerHTML == "X" && square4.innerHTML == "X" && square7.innerHTML == "X" || square2.innerHTML == "X" && square5.innerHTML == "X" && square8.innerHTML == "X" || square3.innerHTML == "X" && square6.innerHTML == "X" && square9.innerHTML == "X" || square1.innerHTML == "X" && square5.innerHTML == "X" && square9.innerHTML == "X" || square3.innerHTML == "X" && square5.innerHTML == "X" && square7.innerHTML == "X"){
      
        winningSymbol = 'X';
        winText();
    } else if (square1.innerHTML && square2.innerHTML && square3.innerHTML == "O" || square4.innerHTML == "O" && square5.innerHTML == "O" && square6.innerHTML == "O" || square7.innerHTML == "O" && square8.innerHTML == "O" && square9.innerHTML == "O" || square1.innerHTML == "O" && square4.innerHTML == "O" && square7.innerHTML == "O" || square2.innerHTML == "O" && square5.innerHTML == "O" && square8.innerHTML == "O" || square3.innerHTML == "O" && square6.innerHTML == "O" && square9.innerHTML == "O" || square1.innerHTML == "O" && square5.innerHTML == "O" && square9.innerHTML == "O" || square3.innerHTML == "O" && square5.innerHTML == "O" && square7.innerHTML == "O"){
    
        winningSymbol = 'O';
        winText();
    } else {
        // alert("No One Has Won - Try Again");
    };
};





function randomComputerSquare(){

    let randomNumber = Math.floor((Math.random()*9)+1);
    let squareNumber = document.getElementById("gameSquare" + randomNumber);
   

    
        if (squareNumber.innerHTML == "") {
        squareNumber.innerHTML = computerSymbol;
    } else {
        randomComputerSquare();
    };


    //     while (squareNumber.innerHTML !== "")

    // do {
        
    //     squareNumber.innerHTML = computerSymbol;
    // }
    //     while (squareNumber.innerHTML == "")

            
                // console.log('not working');
        
// //         squareNumber.innerHTML == "computerSymbol"}
// //     else {
// // console.log('incorrect');
//     };
};


function winText(){
    document.getElementById("playInstruction").style.display = "none";
    document.getElementById("winningText").innerHTML = 'Player ' + winningSymbol + ' has Won!!';
    document.getElementById("winningTextBtn").style.display = "block";
};



