import React from "react";
import '../css/flexbox.css';
import InputButton from './inputButton';

type charSelectProps = {
    guessHandler: (guess: string) => void
    handleWon: () => void
    handleLost: () => void
    word: string
    guessedLetters: string
}

const letters = [
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"],
    ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
]
class CharSelect extends React.Component<charSelectProps>{

    render() {
        return (
            <div>
                {letters.map(row => <div className="flexbox-container">
                    {row.map(letter => <InputButton
                        label={letter}
                        handleClick={this.props.guessHandler}
                        handleWon={this.props.handleWon}
                        handleLost={this.props.handleLost}
                        word={this.props.word}
                        guessedLetters={this.props.guessedLetters}
                    />)}
                </div>
                )}
            </div>
        );
    }
}

export default CharSelect