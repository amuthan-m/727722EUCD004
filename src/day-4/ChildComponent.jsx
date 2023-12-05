// ChildComponent.js
import React from 'react';

function ChildComponent(props) {
  
  const { messageFromParent, sendMessageToParent } = props;

  return (
    <div>
    <h1>Example of Parent-Child Communication and Dynamic Rendering using class Component</h1>
    <h2>Component 1</h2>  
    <p>Message from parent: {messageFromParent}</p>

      <button onClick={() => sendMessageToParent("Hello from Child!")}>
        Send Message to Parent
      </button>
    </div>
  );
}

export default ChildComponent;
