import React from 'react';

const Card = props => {
    const { name, email, id } = props.cat;
    return (
        <div className='my-4 px-4 w-full md:w-1/2 lg:w-1/4 hover:scale-110 transition-250 transition-ease-in-out'>
            <div className='bg-red-200 overflow-hidden rounded shadow-lg'>
                <img
                    className='m-auto pt-4'
                    src={`https://robohash.org/${id}?set=set4&size=180x180`}
                    alt='some alt text'></img>
                <div className='px-4 py-4 text-center'>
                    <div className='font-bold text-white text-xl mb-2'>{name}</div>
                    <p className='text-gray-600 text-base'>{email}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
