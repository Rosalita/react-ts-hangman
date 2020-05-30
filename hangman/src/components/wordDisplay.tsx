import React from "react"
import { hangmanify } from '../utils/hangmanify'
import '../css/game.css';

type WordDisplayProps = {
    word: string
    guessedLetters: string
}

type WordDisplayState = {
    hangmanWord: string
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