const Ship = (length, x, y, horizontal = true) => {
    let positions = [];
    for(let i=0; i<length; i++){
        if(horizontal){
            positions[y + ',' + (x+i)] = 'intact';
        } else positions[(y+1) + ',' + x] = 'intact';
    }


    function hit(x, y){
        positions[y + ',' + x] = 'hit';
    }

    function isSunk(){
        for(const position in positions){

            if (positions[position] === 'intact') return false;
        } 
        
        return true;
    }

    return {hit, isSunk};
}

// module.exports = Ship;
export default Ship;