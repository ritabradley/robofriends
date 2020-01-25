import React from 'react';
import Card from './Card';

const CardList = ({ cats }) => {
    return (
        <div>
            <div className='flex flex-wrap -mx-4 overflow-hidden'>
                {cats.map(cat => (
                    <Card key={cat.id} cat={cat} />
                ))}
            </div>
        </div>
    );
};

export default CardList;
