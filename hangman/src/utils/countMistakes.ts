export const countMistakes = (word: string, guessedLetters: string): number => {
    if (guessedLetters.length === 0) { // if no letters guessed, return 0 mistakes
        return 0;
    }

    console.log(word)
    console.log(guessedLetters)
    // convert both word and letters to upper case before trying to match letters
    word = word.toUpperCase()
    guessedLetters = guessedLetters.toUpperCase()

    let mistakeCount = 0; // initialise a counter

    for (let i = 0; i < guessedLetters.length; i++) { // for each guessed letter
        for (let j = 0; j < word.length; j++) { // loop through each letter in the word

            if (word[j] === guessedLetters[i]) { // if the letter in the word matches the guessed letter
                break // move onto the next guessed letter
            }

            if (j === word.length - 1) { // when the last letter in the word is reached
                mistakeCount++ // the guess is a mistake so increment mistakeCount
            }
        }
    }

    return mistakeCount
}