import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      showMessage: false
    };
  }

  handleMessageFromChild = (event) => {
    this.setState({ message: event });
  }

  toggleMessage = () => {
    this.setState({ showMessage: !this.state.showMessage });
  }

  render() {
    return (
      <div>
      
        <ChildComponent 
          messageFromParent="Hello from Parent!" 
          sendMessageToParent={this.handleMessageFromChild} 
        />
        <h2>Component 2</h2>  
        <button onClick={this.toggleMessage}>
          {this.state.showMessage ? 'Hide' : 'Show'} Message
        </button>

        {this.state.showMessage && (
          <p>Message from child: {this.state.message}</p>
        )}
      </div>
    );
}

}

export default ParentComponent;
