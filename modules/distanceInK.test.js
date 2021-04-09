import { distanceInK } from './distanceInK'; 
test('Check if returns 0 if all the values are the same', () => {
    expect(distanceInK(1, 1, 1, 1)).toBe(0);
});

test('Check if returns 0 if all the longitudes and latitudes are the same', () => {
    expect(distanceInK(1, 3, 1, 3)).toBe(0);
});

test('Check if the function returns the value previously checked in the calculator', () => {
    expect(+distanceInK(10, 20, 20, 30).toFixed()).toBe(1545);
});