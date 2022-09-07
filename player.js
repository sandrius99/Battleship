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

    function attack(opponent, x, y){
        if(shotAt.includes(`${x},${y}`)) return;
        shotAt.push(`${x},${y}`);
        opponent.receiveAttack(x, y);
    }

    function randomPlay(opponent){
        const move = posibleMoves.pop();
        attack(opponent, move[1], move[0]);
    }

    function playerWon(opponent){
        return opponent.allShipsSunk();
    }

    function getName() {
        return name;
    }

    return {placeShip, attack, randomPlay, playerWon, getName};
}

export default Player;