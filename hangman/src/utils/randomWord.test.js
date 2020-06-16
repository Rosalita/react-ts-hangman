import { randomWord } from './randomWord';

test('requesting a random 15 letter word returns a word of length 15', () => {
    const word = randomWord(15)
    expect(word.length).toEqual(15);
});

test('requesting a random 4 letter word returns a word of length 4', () => {
    const word = randomWord(4)
    expect(word.length).toEqual(4);
});

test('requesting a random 16 letter word returns the default word', () => {
    const word = randomWord(16)
    expect(word).toEqual("cat");
});

test('requesting a random 2 letter word returns the default word', () => {
    const word = randomWord(2)
    expect(word).toEqual("cat");
});