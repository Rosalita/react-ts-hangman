
import { hangmanify } from './hangmanify';

test('it doesnt show any letters if no guesses have been made', () => {
  expect(hangmanify('hangman', "")).toEqual('-------');
});

test('it doesnt show any letters if all guesses are incorrect', () => {
  expect(hangmanify('hangman', "bcdefijklopqrstuvwxyz")).toEqual('-------');
});

test('it shows a letter if a correct guess is made', () => {
  expect(hangmanify('hangman', "a")).toEqual('-A---A-');
});

test('it shows all letters when all letters have been guessed', () => {
  expect(hangmanify('hangman', "angmh")).toEqual('HANGMAN');
});

test('it can handle numeric guesses gracefully', () => {
  expect(hangmanify('hangman', "123an")).toEqual('-AN--AN');
});

test('it can handle special character guesses gracefully', () => {
  expect(hangmanify('hangman', "^h%£a&n")).toEqual('HAN--AN');
});

test('it can handle duplicate guesses gracefully', () => {
  expect(hangmanify('hangman', "aaaaaaaaaaaaa")).toEqual('-A---A-');
});

