import { populateBoards, placeShip, computerAttack, clearBoard, displayWinner } from "./dom";
import Player from "./player";
import {randomSequences} from "./helper"

const contentDiv = document.querySelector('.content');

document.getElementById('startBtn').addEventListener('click', e => {
   clearBoard(contentDiv);
    startGame();
   
})

startGame();


function startGame() {
    
    const player = Player("Player");
    const computer = Player("Computer");
    populateBoards(contentDiv, player);
    populateBoards(contentDiv, computer);
    
    let lengths = [5,4,3,3,2];
    let shift = 0
    for(let i = 0; i < 5; i++){
        const length = lengths.shift();
        shift += 1 ;
        placeShip(length ,i,i+shift,true);
        player.placeShip(length, i, i+shift);
    }
    
     lengths = [5,4,3,3,2];
     let randomOrders = randomSequences();
     shift = Math.floor(Math.random() * 5);
    for(let i = 0; i < 5; i++){
        
        const randomOrder = randomOrders.shift();
        const length = lengths.shift();
        //  placeShip(length, i+randomOrder[0], shift+ randomOrder[1],false);
        computer.placeShip(length, i+randomOrder[0], shift + randomOrder[1]);
    }

    let computerShotAtSquares = [...computer.getShotAt()];

    document.querySelectorAll('.board')[1].addEventListener('click', e => {
        if(computer.playerLost()){
            displayWinner(player.getName());
        }
        if(computerShotAtSquares.length !== computer.getShotAt().length){
            computerShotAtSquares = [...computer.getShotAt()]
            const randomCoordinates = computer.randomPlay();
            player.receiveAttack(randomCoordinates[0],randomCoordinates[1]);
            computerAttack(randomCoordinates[0],randomCoordinates[1], player.getGameboard()[randomCoordinates[1]][randomCoordinates[0]])
        }
        if(player.playerLost()){
            displayWinner(computer.getName());
        }
   
})
}