import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
      <img
        src={`https://robohash.org/${id}?set=set4`}
        alt='avatar'
        className='br-100'
      />
      <div>
        <h2 className='f3 mb2 light-gray'>{name}</h2>
        <p className='f5 fw4 dark-gray mt0'>{email}</p>
      </div>
    </div>
  );
};

export default Card;
