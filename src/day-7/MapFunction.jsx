import React from 'react';

const MapFunction = () => {
  // Example array of items
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <div>
      <h2>My List</h2>
      <ul>
        {items.map((value, key) => (
          <li key={key}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default MapFunction;
