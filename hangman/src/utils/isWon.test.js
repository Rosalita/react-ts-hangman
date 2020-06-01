import { isWon } from './isWon';

test('game isnt won if one letter hasnt been guessed', () => {
    expect(isWon("cat", "ac")).toEqual(false);
});

test('game is won if all letters have been guessed', () => {
    expect(isWon("cat", "act")).toEqual(true);
});

test('game is won if guessed letters are upper case', () => {
    expect(isWon("cat", "CAT")).toEqual(true);
});
