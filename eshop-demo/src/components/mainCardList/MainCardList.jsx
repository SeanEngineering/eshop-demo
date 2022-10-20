import React from 'react';
import style from './MainCardList.module.scss';
import MainCard from '../mainCard/MainCard';

const MainCardList = ({object}) => {
    return (
        object.map(item => <MainCard key={item.id} title={item.title} price={item.price} description={item.description} category={item.category} image={item.image}/>)
    );
};

export default MainCardList;