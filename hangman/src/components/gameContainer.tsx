import React from "react"
import '../css/game.css';
import CharSelect from './charSelect';
import WordDisplay from './wordDisplay';
import Score from './score'
import { countMistakes } from '../utils/countMistakes'
import { isLost } from '../utils/isLost';
import { isWon } from '../utils/isWon';
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

    }

    componentDidMount() {
        const randomNum = Math.floor(Math.random() * 12) + 4 // random number from 4 to 15 (inclusive)
        const initialWord = (randomWord(randomNum))
        this.setState({word:initialWord})  

    }
    componentDidUpdate(prevProps: GameProps, prevState: GameState): void {

        if (isLost(countMistakes(this.state.word, this.state.guessedLetters))) {
            console.log("game is lost")
           // this.setState({ lost: this.state.lost ++ })

            // increment lost
            // generate new word
            // clear guesses
        }

        if (isWon(this.state.word, this.state.guessedLetters)) {
            console.log("game is won")
            // increment won
            // generate new word
            // clear guesses
        }
    }


    guessHandler(guess: string) {
        this.setState((prevState) => ({guessedLetters: guess += prevState.guessedLetters}))
    }

    render() {
        return (
            <div className="game-container">
                total mistakes {countMistakes(this.state.word, this.state.guessedLetters)}
                <Score won={this.state.won} lost={this.state.lost} />
                <WordDisplay word={this.state.word} guessedLetters={this.state.guessedLetters} />
                <CharSelect guessHandler={this.guessHandler} />
            </div>
        );
    }
}

export default GameContainer