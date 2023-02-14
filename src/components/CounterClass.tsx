import React, {ReactNode, useState} from 'react'

interface CounterState{
    value: number;
    text: string;
}

interface Props {
    label: ReactNode;
}

// let list: string[];
// let list2: Array<string>;

// const users: Map<string, User> = new Map();

export default class CounterClass extends React.Component<Props, CounterState> {
    state = { value: 0, text: '' };

    private plusOneClick = () => {
        this.setState(prevState => ({value: prevState.value + 1}))
        this.setState(prevState => ({value: prevState.value + 1}))
    }
    private concatOnClick = () => {
        this.setState({text: this.state.text + 'lol '})
    }

    render() {
        const { label } = this.props;
        const { text, value } = this.state;
        return (
            <>
                <div>
                    <div>
                        {label} {this.state.value}
                    </div>
                    <div>
                        Duplája: {this.state.value*2}
                    </div>
                    <div>
                        Négyzete: {this.state.value ** 2}
                    </div>
                </div>
                <button onClick={this.plusOneClick}>
                    +1
                </button>
                <div>{text}</div>
                <button onClick={this.concatOnClick}>
                    Szó hozzáfűzése
                </button>
            </>
        )
    }
}