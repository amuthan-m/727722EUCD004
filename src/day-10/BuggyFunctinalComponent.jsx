import React from 'react'

export default function BuggyFunctionalComponent() {
    if (true) { // Simulate an error
      throw new Error('Functional component crashed!');
    }
    return <div>Functional Component Rendering</div>;
  }
  