import React, { Component } from 'react'

import './App.css'

export default class ClassComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { inputValue: 0 };
    }


    handleIncrement = () => {
        this.setState(prevState => {
            return {
                inputValue: prevState.inputValue + 1
            }
        }
        );
    }

    handleDecrement = () => {
        this.setState(prevState => {
            if (prevState.inputValue > 0) {
                return {
                    inputValue: prevState.inputValue - 1
                }
            } else {
                return {
                    inputValue: 0
                }
            }
        });
    }

    handleSubmit = () => {
        alert(this.state.inputValue)
    }

    render() {
        return (
            <>
            <h1>Example of {this.props.title} using class Component</h1>
            <div className='App'>
                <button onClick={this.handleDecrement}>-</button>
                <span>{this.state.inputValue}</span> {/* Display the current value */}
                <button onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleSubmit}>
                    Add to Cart
                </button>
            </div>
            </>
        )
    }
}

