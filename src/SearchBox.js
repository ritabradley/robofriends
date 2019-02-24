import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        onChange={searchChange}
        className='pa3 ba b--purple bg-near-white input-reset'
        type='search'
        placeholder='search cats'
      />
    </div>
  );
};

export default SearchBox;
