import React from 'react';

const DisplayPropsComponent = (props) => {
    const Myprops = props;
  return (
    <div>
      <h2>Displaying Props</h2>
      <pre>{Myprops.name}</pre>
      <pre>{Myprops.age}</pre>
      <pre>{Myprops.location}</pre>
    </div>
  );
};

const SpreadOperator = () => {
  const userProps = {
    name: 'John Doe',
    age: 30,
    location: 'New York'
  };

  return (
    <div>
      <h2>Spread Operator Example</h2>
      <DisplayPropsComponent {...userProps} />
    </div>
  );
};

export default SpreadOperator;
