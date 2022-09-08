// const Ship = require('./ship');
import Ship from '../ship'

test('ship is sunk', () => {
    const ship = Ship(1,1,2);
    ship.hit(1,2);
    expect(ship.isSunk()).toBe(true);
});

test('ship is not sunk', () => {
    const ship = Ship(1,1,2);
    
    expect(ship.isSunk()).toBe(false);
});