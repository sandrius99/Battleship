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

function computerAttack(x,y, squareState) {
   
    const squareDiv = document.querySelector(`.position${y}${x}`);
    assignDivColor(squareDiv, squareState);

}

function assignDivColor(squareDiv, squareState) {
    if(squareState === 'missed')
    squareDiv.classList.add('miss');
    else squareDiv.classList.add('hit');
}

function clearBoard(parentDiv) {
    if(document.querySelector('.winner'))
    document.querySelector('.winner').remove();
    
    parentDiv.innerHTML = '';
}

function displayWinner(name) {
    const parentDiv = document.querySelector('.container');
    const insertBeforeDiv = document.querySelector('.content');
    const winnerDiv = document.createElement('div');
    winnerDiv.innerText = `${name} won!`;
    winnerDiv.classList.add('winner');
    if(name === 'Computer') winnerDiv.style.color = "red";
    parentDiv.insertBefore(winnerDiv, insertBeforeDiv);
    disableBoard();

}

function disableBoard() {
    document.querySelectorAll('.board')[1].style.pointerEvents = "none";
}

export {populateBoards, placeShip, computerAttack, clearBoard, displayWinner};