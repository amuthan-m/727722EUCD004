import React from 'react';

function withTheme(WrappedComponent) {
  const theme = {
    color: 'blue',
    fontSize: '16px'
  };

  const ThemedComponent = (props) => {
    return <WrappedComponent {...props} theme={theme} />;
  };

  return ThemedComponent;
}

function MyComponent({ theme, greeting, name }) {
  return (
    <div style={{ color: theme.color, fontSize: theme.fontSize }}>
      {greeting}, {name}! with theme!
    </div>
  );
}

const ThemedMyComponent = withTheme(MyComponent);

export default ThemedMyComponent;
