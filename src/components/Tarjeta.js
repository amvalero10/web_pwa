import React from 'react';


export const Tarjeta = (props) => {

    const {thumbnail,name,description} = props;

    return (
        <>
            <div className='card' >
                <h2>{name}</h2>
                <img className='card-image' src={thumbnail} alt={name} />
                <p>{description}</p>
                <br></br>
            </div>
        </>
    );


};