import React from 'react'

function ClickMe() {
    alert('Welcome to React SKCET!');
}

export default function Button() {
  return (
    <button onClick={ClickMe}>Click Me</button>
  )
}
