import { randomWord } from './randomWord';

test('requesting a random 4 letter word returns a word of length 4', () => {
    const word = randomWord(15)
    console.log(word)
    expect(word.length).toEqual(15);
});

