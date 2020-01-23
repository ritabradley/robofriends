import React from 'react';

const SearchBox = props => {
    return (
        <div className='text-center mt-6 mb-2'>
            <input
                className='w-full md:w-1/2 lg:w-1/3 placeholder-gray-500 px-2 rounded border shadow'
                type='search'
                name=''
                id=''
                placeholder='Search for friends'
            />
        </div>
    );
};

export default SearchBox;
