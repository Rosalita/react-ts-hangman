import React from "react"
import { hangmanify } from '../utils/hangmanify'
import '../css/game.css';

type WordDisplayProps = {
    word: string
    guessedLetters: string
}



class WordDisplay extends React.Component<WordDisplayProps>{
    render() {
        return (
            <div className="word-display">
                Word: {hangmanify(this.props.word, this.props.guessedLetters)}
            </div>
        );
    }
}

export default WordDisplay