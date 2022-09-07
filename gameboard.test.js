// const Gameboard = require('./gameboard');
import Gameboard from './gameboard'


test('all ships sunk', () => {
    const gameboard = Gameboard();
    gameboard.placeShip(2,0,0);
    gameboard.placeShip(1,7,7);
    gameboard.placeShip(1,8,7);
    gameboard.placeShip(1,4,7);
    gameboard.placeShip(1,6,7);
    
     gameboard.receiveAttack(0,0);
     gameboard.receiveAttack(1,0);
     
     gameboard.receiveAttack(7,7);
     gameboard.receiveAttack(8,7);
     gameboard.receiveAttack(4,7);
     gameboard.receiveAttack(6,7);

    expect(gameboard.allShipsSunk()).toBe(true);
});

test('not all ships sunk', () => {
    const gameboard = Gameboard();
    gameboard.placeShip(1,0,0);
    gameboard.placeShip(1,7,7);
    gameboard.placeShip(1,8,7);
    gameboard.placeShip(1,9,7);
  
    
     gameboard.receiveAttack(0,0);
     gameboard.receiveAttack(7,7);
     gameboard.receiveAttack(8,7);
     gameboard.receiveAttack(9,7);
     gameboard.receiveAttack(6,7);

    expect(gameboard.allShipsSunk()).toBe(false);
});