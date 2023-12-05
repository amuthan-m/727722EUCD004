import React, { Component } from 'react';

class DynamicToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMessageShown: false // Initially, the message is not shown
    };
  }

  toggleMessage = () => {
    this.setState(prevState => ({
      isMessageShown: !prevState.isMessageShown // Toggle the boolean state
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleMessage}>
          {this.state.isMessageShown ? 'Hide' : 'Show'} Message
        </button>

        {/* Conditionally rendering the message */}
        {this.state.isMessageShown && <p>This is a dynamic message!</p>}
      </div>
    );
  }
}

export default DynamicToggle;
