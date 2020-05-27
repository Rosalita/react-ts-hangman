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

    constructor(props: GameProps){
        super(props)

        this.state = {
          word: "rosie",
          guessedLetters: "voice",
          totalMistakes: 0
        }
    }

    // handle guess

    render() {
        return (
            <div className="game-container">
                <WordDisplay word = {this.state.word} guessedLetters = {this.state.guessedLetters}/>
                <CharSelect/>
            </div>
        );
    }
}

export default GameContainer