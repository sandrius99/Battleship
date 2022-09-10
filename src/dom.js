function populateBoards(parentDiv, player) {
    const playerContentDiv = document.createElement('div');
    const playerNameDiv = document.createElement('div');
    const boardDiv = document.createElement('div');
    playerNameDiv.innerText = player.getName();
    playerNameDiv.classList.add('playerName');
    playerContentDiv.classList.add('playerContent');
    boardDiv.classList.add('board');
    for(let i=0; i<10; i++){
        for(let j=0; j<10; j++){
            const squareDiv = document.createElement('div');
            squareDiv.classList.add("square");
            squareDiv.classList.add(`position${i}${j}`);
            if(player.getName() === 'Computer'){
            squareDiv.addEventListener('click', e => {
                if(player.getShotAt().includes(`${j},${i}`)) return;
                player.receiveAttack(j,i);
                const squareState = player.getGameboard()[i][j];
                console.log(squareState)
                assignDivColor(squareDiv, squareState);
               
                
                });
            }
            boardDiv.appendChild(squareDiv);



        }
    }
    playerContentDiv.appendChild(playerNameDiv);
    playerContentDiv.appendChild(boardDiv);
    parentDiv.appendChild(playerContentDiv);


}

function placeShip(length, x, y, isPlayer, horizontal = true, ) {
    // Check which player board elements to edit
    const boardNumber = isPlayer ? 0 : 1;
    for(let i = 0; i < length; i++){
        if(horizontal){
            const squareDiv = document.querySelectorAll(`.position${y}${x+i}`)[boardNumber];
            squareDiv.classList.add('ship');            
        }
    }
}

function computerAttack(x,y, opponent) {
   
    const squareDiv = document.querySelector(`.position${y}${x}`);
    
    console.log('test')
    opponent.receiveAttack(y,x);
    console.log(opponent.getGameboard())
    assignDivColor(squareDiv, opponent.getGameboard()[y][x]);

}

function assignDivColor(squareDiv, squareState) {
    if(squareState === 'missed')
    squareDiv.style.background = 'gray';
    else squareDiv.style.background = 'red';
}

export {populateBoards, placeShip, computerAttack};