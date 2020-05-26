import React from "react";
import '../css/flexbox.css';
import InputButton from './inputButton';


class CharSelect extends React.Component{

    render() {
        return (
            <div>
            <div className="flexbox-container">
            <InputButton label="A"/>
            <InputButton label="B"/>
            <InputButton label="C"/>
            <InputButton label="D"/>
            <InputButton label="E"/>
            <InputButton label="F"/>
            <InputButton label="G"/>
            <InputButton label="H"/>
            <InputButton label="I"/>
            <InputButton label="J"/>
            <InputButton label="K"/>
            <InputButton label="L"/>
            <InputButton label="M"/>
            </div>
            <div className="flexbox-container">
            <InputButton label="N"/>
            <InputButton label="O"/>
            <InputButton label="P"/>
            <InputButton label="Q"/>
            <InputButton label="R"/>
            <InputButton label="S"/>
            <InputButton label="T"/>
            <InputButton label="U"/>
            <InputButton label="V"/>
            <InputButton label="W"/>
            <InputButton label="X"/>
            <InputButton label="Y"/>
            <InputButton label="Z"/>
            </div>
            </div>
 
            
        );
    }
}

export default CharSelect