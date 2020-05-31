
import { countMistakes } from './countMistakes';

test('it doesnt count any mistakes if no guesses have been made', () => {
    expect(countMistakes('hangman', "")).toEqual(0);
});

test('it doesnt count a mistake if a correct guess has been made', () => {
    expect(countMistakes('hangman', "a")).toEqual(0);
});

test('it counts a mistake if an incorrect guess has been made', () => {
    expect(countMistakes('hangman', "w")).toEqual(1);
});

test('it doesnt count correct upper case guesses as mistakes', () => {
    expect(countMistakes('hangman', "H")).toEqual(0);
});
