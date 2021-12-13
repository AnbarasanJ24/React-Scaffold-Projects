import React from 'react';
import './birthday-card.styles.css';

const BirthdayCard = ({ people }) => {
    const { age, name, image } = people;
    return (
        <div className='birthday-card'>
            <div className="birthday-image">
                <img src={image} alt="name" />
            </div>
            <div className="birthday-info">
                <h4>{name}</h4>
                <h4>{age}</h4>
            </div>
        </div>
    )
}

export default BirthdayCard
