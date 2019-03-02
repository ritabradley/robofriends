import React from 'react';

const Scroll = props => {
  return (
    <div
      style={{
        overflow: 'scroll',
        border: '5px solid #333',
        height: '600px',
      }}>
      {props.children}
    </div>
  );
};

export default Scroll;
