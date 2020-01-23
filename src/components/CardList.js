import React from 'react';
import Card from './Card';

const CardList = props => {
    return (
        <div>
            <div className='flex flex-wrap -mx-4 overflow-hidden'>
                {props.cats.map(cat => (
                    <Card key={cat.id} cat={cat} />
                ))}
            </div>
        </div>
    );
};

export default CardList;
