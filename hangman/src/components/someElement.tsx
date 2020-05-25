import React from "react";

type MyProps = {
    name: string;
};
type MyState = {
    count: number;
};

class Title extends React.Component<MyProps, MyState> {
    state: MyState = {
        count: 0,
    };
    render() {
        return (
            <div>
                <h1>Welcome to Hangman, {this.props.name}</h1>
                <h2>You have played {this.state.count} games so far</h2> 
            </div>
        );
    }
}


export default Title
