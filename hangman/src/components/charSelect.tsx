import React from "react";
import '../css/flexbox.css';
import InputButton from './inputButton';

type charSelectProps = {
    guessHandler: (guess: string) => void
}

class CharSelect extends React.Component<charSelectProps>{

    render() {
        return (
            <div>
                <div className="flexbox-container">
                    <InputButton label="A" handleClick={this.props.guessHandler}/>
                    <InputButton label="B" handleClick={this.props.guessHandler}/>
                    <InputButton label="C" handleClick={this.props.guessHandler}/>
                    <InputButton label="D" handleClick={this.props.guessHandler}/>
                    <InputButton label="E" handleClick={this.props.guessHandler}/>
                    <InputButton label="F" handleClick={this.props.guessHandler}/>
                    <InputButton label="G" handleClick={this.props.guessHandler}/>
                    <InputButton label="H" handleClick={this.props.guessHandler}/>
                    <InputButton label="I" handleClick={this.props.guessHandler}/>
                    <InputButton label="J" handleClick={this.props.guessHandler}/>
                    <InputButton label="K" handleClick={this.props.guessHandler}/>
                    <InputButton label="L" handleClick={this.props.guessHandler}/>
                    <InputButton label="M" handleClick={this.props.guessHandler}/>
                </div>
                <div className="flexbox-container">
                    <InputButton label="N" handleClick={this.props.guessHandler}/>
                    <InputButton label="O" handleClick={this.props.guessHandler}/>
                    <InputButton label="P" handleClick={this.props.guessHandler}/>
                    <InputButton label="Q" handleClick={this.props.guessHandler}/>
                    <InputButton label="R" handleClick={this.props.guessHandler}/>
                    <InputButton label="S" handleClick={this.props.guessHandler}/>
                    <InputButton label="T" handleClick={this.props.guessHandler}/>
                    <InputButton label="U" handleClick={this.props.guessHandler}/>
                    <InputButton label="V" handleClick={this.props.guessHandler}/>
                    <InputButton label="W" handleClick={this.props.guessHandler}/>
                    <InputButton label="X" handleClick={this.props.guessHandler}/>
                    <InputButton label="Y" handleClick={this.props.guessHandler}/>
                    <InputButton label="Z" handleClick={this.props.guessHandler}/>
                </div>
            </div>


        );
    }
}

export default CharSelect