import React from 'react';
import classNames from 'classnames/bind';
import styles from './FeaturedProducts.module.scss';
import Card from '../Card/Card';

const cx = classNames.bind(styles);
const FeatureProducts = ({ type }) => {
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
        <div className={cx('featureProducts')}>
            <div className={cx('top')}>
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                    accumsan lacus vel facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                    Risus commodo viverra maecenas.
                </p>
            </div>
            <div className={cx('bottom')}>
                {data.map((item) => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export default FeatureProducts;
