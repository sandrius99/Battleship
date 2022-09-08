function populateBoards(parentDiv, name) {
    const playerContentDiv = document.createElement('div');
    const playerNameDiv = document.createElement('div');
    const boardDiv = document.createElement('div');
    playerNameDiv.innerText = name;
    playerNameDiv.classList.add('playerName');
    playerContentDiv.classList.add('playerContent');
    boardDiv.classList.add('board');
    for(let i=0; i<10; i++){
        for(let j=0; j<10; j++){
            const squareDiv = document.createElement('div');
            squareDiv.classList.add("square");
            squareDiv.classList.add(`${i},${j}`);
            boardDiv.appendChild(squareDiv);


        }
    }
    playerContentDiv.appendChild(playerNameDiv);
    playerContentDiv.appendChild(boardDiv);
    parentDiv.appendChild(playerContentDiv);


}

export {populateBoards};