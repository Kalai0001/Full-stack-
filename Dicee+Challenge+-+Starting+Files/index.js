// var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// document.getElementById("dice1"){
//     if (randomNumber1 == 1) {
//         img1.src = "./image/dice1.png";
//     }
//     else if (randomNumber1 == 2) {
//         img1.src = "./image/dice2.png";
//     }
//     else if (randomNumber1 == 3) {
//         img1.src = "./image/dice3.png";
//     }
//     else if (randomNumber1 == 4) {
//         img1.src = "./image/dice4.png";
//     }
//     else if (randomNumber1 == 5) {
//         img1.src = "./image/dice5.png";
//     }
//     else if (randomNumber1 == 6) {
//         img1.src = "./image/dice6.png";
//     }
// }

// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// document.getElementById("dice2"){
//     if (randomNumber2 == 1) {
//         img2.src = "./image/dice1.png";
//     }
//     else if (randomNumber2 == 2) {
//         img2.src = "./image/dice2.png";
//     }
//     else if (randomNumber2 == 3) {
//         img2.src = "./image/dice3.png";
//     }
//     else if (randomNumber2 == 4) {
//         img2.src = "./image/dice4.png";
//     }
//     else if (randomNumber2 == 5) {
//         img2.src = "./image/dice5.png";
//     }
//     else if (randomNumber2 == 6) {
//         img2.src = "./image/dice6.png";
//     }
// }


var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;

var randomDiceImage1="dice"+randomNumber1+".png";
var randomDiceImage2="dice"+randomNumber2+".png";

var randomDiceImage1="images/"+randomDiceImage1;
var randomDiceImage2="images/"+randomDiceImage2;

var img1=document.querySelectorAll("img")[0];
var img2=document.querySelectorAll("img")[1];

img1.setAttribute("src",randomDiceImage1);
img2.setAttribute("src",randomDiceImage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="It's a draw!";
}
