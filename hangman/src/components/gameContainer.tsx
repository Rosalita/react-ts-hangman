import React from "react"
import '../css/game.css';
import CharSelect from './charSelect';
import WordDisplay from './wordDisplay';



type GameProps = {

}

type GameState = {
    word: string
    guessedLetters: string
    totalMistakes: number
}

class GameContainer extends React.Component<GameProps, GameState>{

    state: GameState

    constructor(props: GameProps){
        super(props)

        this.state = {
          word: "hangman",
          guessedLetters: "",
          totalMistakes: 0
        }

        this.guessHandler = this.guessHandler.bind(this)

    }

    guessHandler(guess : string){
        this.setState({guessedLetters: this.state.guessedLetters += guess})
    }
    

    render() {
        return (
            <div className="game-container">
                <WordDisplay word = {this.state.word} guessedLetters = {this.state.guessedLetters}/>
                <CharSelect guessHandler = {this.guessHandler}/>
            </div>
        );
    }
}

export default GameContainer