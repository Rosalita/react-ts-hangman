import React from "react";
import '../css/input.css';


type InputProps = {
    //  name: string;
};

type InputState = {
    inputValue: string;
};

class Input extends React.Component<InputProps, InputState>{
    constructor(props: InputProps) {
        super(props)

        this.state = {
            inputValue: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ inputValue: e.target.value });
     
    }
    render() {
        return (
            <div>
                <div>Guess a letter: </div>
                <input
                    type="text"
                    name="inputText"
                    className="input-text"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default Input