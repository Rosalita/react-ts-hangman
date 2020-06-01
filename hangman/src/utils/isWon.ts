
export const isWon = (word: string, guessedLetters: string): boolean => {

      // convert both word and letters to upper case before trying to match letters
      word = word.toUpperCase()
      guessedLetters = guessedLetters.toUpperCase()

    for (let i = 0; i < word.length; i++) { // for each letter in the word
        for (let j = 0; j < guessedLetters.length; j++) { // loop through guessed letters

            if (word[i] === guessedLetters[j]) { // if the letter in the word matches a guessed letter
                break // and move onto checking the next letter in the word
            }

            if (j === guessedLetters.length - 1) { // when the word letter has been checked against all guessed letters and not matched
                return false // the game has not been won
            }

        }
        if (i === word.length - 1) { // when the last word letter has been checked and its in the guessed letters
            return true // the game has been won
        }
    }

    return false
}
