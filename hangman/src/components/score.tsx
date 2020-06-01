import React from "react"

import '../css/game.css';

type ScoreProps = {
    won: number
    lost: number
}




class Score extends React.Component<ScoreProps>{
    render() {
        return (
            <div className="score">
            SCORE: Won : {this.props.won} Lost: {this.props.lost}
            </div>
        );
    }
}

export default Score