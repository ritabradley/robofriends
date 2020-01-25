import React from 'react';

const SearchBox = ({ searchField }) => {
    return (
        <div className='text-center mt-6 mb-2'>
            <input
                onChange={searchField}
                className='w-full md:w-1/2 lg:w-1/3 placeholder-gray-500 px-2 py-3 rounded border shadow'
                type='search'
                placeholder='Search for friends'
            />
        </div>
    );
};

export default SearchBox;
