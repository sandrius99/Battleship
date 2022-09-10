// const Ship = require('./Ship');
import Ship from './ship'

const Gameboard = () => {
    // Create 10x10 board
    let gameboard = new Array(10).fill(0).map(() => new Array(10).fill(''));
    let ships = 5;

    function placeShip(length, x, y, horizontal = true ){
        
        if(length + x - 1 > 9) return;

        // Check if place not taken
        for(let i=0; i< length; i++){
            if(gameboard[y][x+i] !== '') return
        }
        
        const ship = Ship(length, x, y, horizontal);
        for(let i=0; i < length; i++){
            if(horizontal){
               
                gameboard[y][x+i] = ship;
            } else gameboard[y+i][x] = ship;
        }
    }

    function receiveAttack(x,y){
        if(gameboard[y][x] !== ''){
            gameboard[y][x].hit(x,y);
            if(gameboard[y][x].isSunk()) ships--;
            return true;
        } else {
            gameboard[y][x] = 'missed';
            return false;
        } 

    }

    function allShipsSunk() {
        return ships === 0;
    }

    function getGameboard() {
        return gameboard;
    }
    return {placeShip, receiveAttack, allShipsSunk, getGameboard};

}

// module.exports = Gameboard;
export default Gameboard;