import React from 'react';

const RestOperatorChild = ({ title, ...otherProps }) => {
  return (
    <div>
      <h2>{title}</h2>
      <pre>{JSON.stringify(otherProps, null, 2)}</pre>
    </div>
  );
};

const RestOperator = () => {
  const props = {
    title: 'Rest Operator Example',
    name: 'Jane Doe',
    age: 28,
    location: 'Los Angeles'
  };

  return <RestOperatorChild {...props} />;
};

export default RestOperator;
