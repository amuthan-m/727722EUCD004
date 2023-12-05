import React, { Component } from 'react'

export default class TestclassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0,
          text: 'Placeholder text...',
        };
    }

    handleClick = () => {
        this.setState(prevState => {
            return{
                count: prevState.count + 1
            }
        });
    };

    handleChange = (e) => {
      this.setState({text: e.target.value})
    };


  render() {
    return (
      <>
      <button onClick={this.handleClick}>{this.props.btnName}: {this.state.count}</button>
      <textarea rows="5" cols="10" value={this.state.text} onChange={this.handleChange}></textarea>
      <h3>Comments:</h3>
      <div>
        {this.state.text}
      </div>
      </>
    )
  }
}
