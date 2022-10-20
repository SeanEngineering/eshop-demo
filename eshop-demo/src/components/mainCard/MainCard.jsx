import React from 'react';
import style from './MainCard.module.scss';

const MainCard = ({title, price, description, category, image}) => {
    return (
        <div className={style.card}>
            <img src={image} alt="" />
            <h5>{title}</h5>
            <div>${price} AUD</div>
            <div>{category}</div>
        </div>
    );
};

export default MainCard;