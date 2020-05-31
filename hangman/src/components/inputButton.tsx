import React from "react";
import '../css/inputButton.css';


type inputButtonProps = {
    label: string;
    handleClick: (guess :string)=>void
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
        this.setState({isDisabled:true})    
        this.props.handleClick(this.props.label) 
    }
    render() {
        return (
            <div className="input-button">
                <input
                    type="button"
                    disabled = {this.state.isDisabled}
                    className="input-button"
                    value={this.props.label}
                    onClick ={this.handleChange}
                
                />
            </div>
        );
    }
}

export default InputButton