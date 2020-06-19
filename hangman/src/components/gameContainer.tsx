import React from "react"
import '../css/game.css';
import CharSelect from './charSelect';
import WordDisplay from './wordDisplay';
import Score from './score'
import { countMistakes } from '../utils/countMistakes'
//import { isLost } from '../utils/isLost';
//import { isWon } from '../utils/isWon';
import { randomWord } from '../utils/randomWord';


type GameProps = {
}

type GameState = {
    word: string
    guessedLetters: string
    won: number
    lost: number
}

class GameContainer extends React.Component<GameProps, GameState>{

    state: GameState

    constructor(props: GameProps) {
        super(props)

        this.state = {
            word: "",
            guessedLetters: "",
            won: 0,
            lost: 0,
        }

        this.guessHandler = this.guessHandler.bind(this)
        this.incrementLost = this.incrementLost.bind(this)
        this.incrementWon = this.incrementWon.bind(this)

    }

    componentDidMount() {
        const randomNum = Math.floor(Math.random() * 12) + 4 // random number from 4 to 15 (inclusive)
        const initialWord = (randomWord(randomNum))
        this.setState({ word: initialWord })
    }

    guessHandler(guess: string) {
        this.setState((prevState) => ({ guessedLetters: prevState.guessedLetters + guess }))
    }

    incrementLost(): void {
        this.setState((prevState) => ({ lost: prevState.lost + 1 }))
    }

    incrementWon(): void {
        this.setState((prevState) => ({ won: prevState.won + 1 }))
    }

    render() {
        return (
            <div className="game-container">
                total mistakes {countMistakes(this.state.word, this.state.guessedLetters)}
                <Score
                    won={this.state.won}
                    lost={this.state.lost}
                />
                <WordDisplay
                    word={this.state.word}
                    guessedLetters={this.state.guessedLetters}
                />
                <CharSelect word={this.state.word}
                    guessedLetters={this.state.guessedLetters}
                    guessHandler={this.guessHandler}
                    handleWon={this.incrementWon}
                    handleLost={this.incrementLost}
                />
            </div>
        );
    }
}

export default GameContainer