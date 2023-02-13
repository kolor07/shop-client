import classNames from 'classnames/bind';
import React from 'react';
import Card from '../Card/Card';
import styles from './ListCard.module.scss';
const cx = classNames.bind(styles);

const ListCard = () => {
    const data = [
        {
            id: 1,
            img1: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Long sleeve graphic t-shirt',
            isNew: true,
            oldPrices: 19,
            price: 12,
        },
        {
            id: 2,
            img1: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Short Sleeve Graphic Shirt',
            isNew: true,
            oldPrices: 19,
            price: 12,
        },
        {
            id: 3,
            img1: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Back sleeve Hoddie',
            isNew: true,
            oldPrices: 19,
            price: 12,
        },
        {
            id: 4,
            img1: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Blue sleeve graphic Hoddie',
            isNew: true,
            oldPrices: 19,
            price: 12,
        },
    ];

    return (
        <div className={cx('listCard')}>
            {data?.map((item) => (
                <Card item={item} key={item.id} />
            ))}
        </div>
    );
};

export default ListCard;
