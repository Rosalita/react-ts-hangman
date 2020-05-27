import React from "react"
import '../css/game.css';

type WordDisplayProps = {
    word: string
    guessedLetters: string
}

type WordDisplayState = {
    hangmanWord: string
}

// hangmanify replaces letters in a word with -'s unless they are in guessedLetters
function hangmanify(word: string, guessedLetters: string): string {
    let hangmanWord = ""
    if (guessedLetters.length === 0) { // if no guessed letters
        // return a string of dashes the same length as the word
        for (let i = 0; i < word.length; i++) {
            hangmanWord += "-"
        }
        return hangmanWord
    }

    // convert both word and letters to upper case before trying to match letters
    word = word.toUpperCase()
    guessedLetters = guessedLetters.toUpperCase()

    for (let i = 0; i < word.length; i++) { // for each letter in the word
        for (let j = 0; j < guessedLetters.length; j++) { // loop through guessed letters

            if (word[i] === guessedLetters[j]) { // if the letter in the word matches a guessed letter
                hangmanWord += guessedLetters[j] // save it to the hangmanWord
                break // and move onto the next letter in the word
            }

            if (j === guessedLetters.length - 1) { // when the last guessed letter has been checked and its not in the word
                hangmanWord += "-" // save a - to the hangmanWord
            }
        }
    }

    return hangmanWord
}


class WordDisplay extends React.Component<WordDisplayProps, WordDisplayState>{
    constructor(props: WordDisplayProps) {
        super(props)

        this.state = {
            hangmanWord: hangmanify(props.word, props.guessedLetters),
        }
    }

    render() {
        return (
            <div className="word-display">
                Word: {this.state.hangmanWord}
            </div>
        );
    }
}

export default WordDisplay