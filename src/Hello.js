import React from 'react';

const hello = props => (
  <div className='tc'>
    <h1 className='f-headline'>Hello, {props.name}!</h1>
    <p className='f-subheadline'>Welcome to React</p>
  </div>
);

export default hello;
