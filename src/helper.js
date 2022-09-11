function randomSequences() {
    let positions = [];
    let randomX = [0,1,2,3,4];
    let randomY = [0,1,2,3,4];
    randomX = randomX.sort((a, b) => 0.5 - Math.random());
    randomY = randomY.sort((a, b) => 0.5 - Math.random());

    for(let i=0; i<5; i++){
        let position = [];
        position.push(randomX.pop());
        position.push(randomY.pop());
        positions.push(position);
    }

    return positions;
}

export {randomSequences};