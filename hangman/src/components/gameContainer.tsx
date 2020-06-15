import React from "react"
import '../css/game.css';
import CharSelect from './charSelect';
import WordDisplay from './wordDisplay';
import Score from './score'
import { countMistakes } from '../utils/countMistakes'
import { isLost } from '../utils/isLost';
import { isWon } from '../utils/isWon';


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

    constructor(props: GameProps){
        super(props)

        this.state = {
          word: "invulnerability",
          guessedLetters: "",
          won: 0,
          lost: 0,
        }

        this.guessHandler = this.guessHandler.bind(this)

    }

    componentDidMount(){
        // log random word

    }
    componentDidUpdate(prevProps: GameProps, prevState: GameState): void {
        // check for game over

        if (isLost(countMistakes(this.state.word, this.state.guessedLetters))){
            console.log("game is lost")
        }

        if (isWon(this.state.word, this.state.guessedLetters)){
            console.log("game is won")
        }
   
    }


    guessHandler(guess : string){
        this.setState({guessedLetters: this.state.guessedLetters += guess})
        
    }
    

    render() {
        return (
            <div className="game-container">
                total mistakes {countMistakes(this.state.word, this.state.guessedLetters)}
                <Score won = {this.state.won} lost = {this.state.lost}/>
                <WordDisplay word = {this.state.word} guessedLetters = {this.state.guessedLetters}/>
                <CharSelect guessHandler = {this.guessHandler}/>
            </div>
        );
    }
}

export default GameContainer