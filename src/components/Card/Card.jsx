import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.scss';
const cx = classNames.bind(styles);

const Card = ({ item }) => {
    return (
        <Link to={`product/${item.id}`} className={cx('link')}>
            <div className={cx('card')}>
                <div className={cx('image')}>
                    {item.isNew && <span>New Season</span>}
                    <img src={item.img1} alt="" className={cx('mainImage')} />
                    <img src={item.img2} alt="" className={cx('secondImage')} />
                </div>

                <h2>{item.title}</h2>
                <div className={cx('price')}>
                    <h3>${item.oldPrices}</h3>
                    <h3>${item.price}</h3>
                </div>
            </div>
        </Link>
    );
};

export default Card;
