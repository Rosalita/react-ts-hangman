import React from "react"
import '../css/game.css';
import CharSelect from './charSelect';
import WordDisplay from './wordDisplay';
import { countMistakes } from '../utils/countMistakes'



type GameProps = {

}

type GameState = {
    word: string
    guessedLetters: string
}

class GameContainer extends React.Component<GameProps, GameState>{

    state: GameState

    constructor(props: GameProps){
        super(props)

        this.state = {
          word: "development",
          guessedLetters: "",
        }

        this.guessHandler = this.guessHandler.bind(this)

    }
    componentDidUpdate(prevProps: GameProps, prevState: GameState): void {
        // check for game over
    }

    guessHandler(guess : string){
        this.setState({guessedLetters: this.state.guessedLetters += guess})
    }
    

    render() {
        return (
            <div className="game-container">
                total mistakes {countMistakes(this.state.word, this.state.guessedLetters)}
                <WordDisplay word = {this.state.word} guessedLetters = {this.state.guessedLetters}/>
                <CharSelect guessHandler = {this.guessHandler}/>
            </div>
        );
    }
}

export default GameContainer