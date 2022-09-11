import Gameboard from './gameboard';

const Player = (name) => {
    const gameboard = Gameboard();
    let shotAt = [];
    let possibleMoves = [];
    for(let y=0; y<10; y++){
        for(let x=0; x<10; x++){
            possibleMoves.push([y,x]);
        }
    }
    possibleMoves = possibleMoves.sort((a, b) => 0.5 - Math.random());

    function placeShip(length, x, y){
        gameboard.placeShip(length, x, y);
    }

    function receiveAttack( y, x){
        if(shotAt.includes(`${y},${x}`)) return;
        shotAt.push(`${y},${x}`);
        gameboard.receiveAttack(y, x);
    }

    function randomPlay(opponent){
        const move = possibleMoves.pop();
        // opponent.receiveAttack()
        return move;
    }

    function playerLost(){
        return gameboard.allShipsSunk();
    }

    function getName() {
        return name;
    }

    function getShotAt() {
        return shotAt;
    }

    function getGameboard() {
        return gameboard.getGameboard();
    }

    return {placeShip, receiveAttack, randomPlay, playerLost, getName, getShotAt, getGameboard};
}

export default Player;