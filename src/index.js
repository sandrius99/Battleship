import { populateBoards, placeShip, computerAttack } from "./dom";
import Gameboard from "./gameboard";
import Player from "./player";

const contentDiv = document.querySelector('.content');

const player = Player("Player");
const computer = Player("Computer");
populateBoards(contentDiv, player);
populateBoards(contentDiv, computer);

let lengths = [5,4,3,3,2];
for(let i = 0; i < 5; i++){
    const length = lengths.shift();
    placeShip(length ,i,i,true);
    player.placeShip(length, i, i);
}

 lengths = [5,4,3,3,2];
for(let i = 0; i < 5; i++){
    const length = lengths.shift();
    // placeShip(length,i,i,false);
    computer.placeShip(length, i, i);
}



document.getElementById('startBtn').addEventListener('click', e => {
    console.log(computer.playerLost());
})
document.querySelector('.position00').click();
computerAttack(0,1, player);

