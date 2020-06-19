import React from "react";
import '../css/inputButton.css';
import { countMistakes } from '../utils/countMistakes'
import { isLost } from '../utils/isLost';
import { isWon } from '../utils/isWon';

type inputButtonProps = {
    label: string;
    handleClick: (guess: string) => void
    handleWon: () => void
    handleLost: () => void
    word: string
    guessedLetters: string
};

type inputButtonState = {
    isDisabled: boolean;
};

class InputButton extends React.Component<inputButtonProps, inputButtonState>{
    constructor(props: inputButtonProps) {
        super(props)

        this.state = {
            isDisabled: false
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e: React.MouseEvent) {
        this.setState({ isDisabled: true })
        this.props.handleClick(this.props.label)


        if (isLost(countMistakes(this.props.word, this.props.guessedLetters + this.props.label))) {
            console.log("game is lost")
            this.props.handleLost()

        } else if (isWon(this.props.word, this.props.guessedLetters + this.props.label)) {
            console.log("game is won")
            this.props.handleWon()
        }
    }
    render() {
        return (
            <div className="input-button">
                <input
                    type="button"
                    disabled={this.state.isDisabled}
                    className="input-button"
                    value={this.props.label}
                    onClick={this.handleChange}
                />
            </div>
        );
    }
}

export default InputButton