import classNames from 'classnames/bind';
import React from 'react';
import { useState } from 'react';
import styles from './Product.module.scss';
import { AddShoppingCart, Balance, FavoriteBorder } from '@mui/icons-material';

const cx = classNames.bind(styles);
const Product = () => {
    const [selectedImg, setSelectedImg] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const imgs = [
        'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ];
    return (
        <div className={cx('product')}>
            <div className={cx('left')}>
                <div className={cx('images')}>
                    <img
                        src={imgs[0]}
                        alt=""
                        onClick={() => {
                            setSelectedImg(0);
                        }}
                    />
                    <img
                        src={imgs[1]}
                        alt=""
                        onClick={() => {
                            setSelectedImg(1);
                        }}
                    />
                </div>
                <div className={cx('mainImg')}>
                    <img src={imgs[selectedImg]} alt="" />
                </div>
            </div>
            <div className={cx('right')}>
                <h1>Title</h1>
                <span className={cx('price')}>$19</span>
                <p>
                    id: data.id, title: data.attributes.title, desc: data.attributes.desc, price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url, quantity,
                </p>
                <div className={cx('quantity')}>
                    <button
                        onClick={() => {
                            setQuantity((prev) => (prev === 1 ? 1 : prev - 1));
                        }}
                    >
                        -
                    </button>
                    {quantity}
                    <button
                        onClick={() => {
                            setQuantity((prev) => prev + 1);
                        }}
                    >
                        +
                    </button>
                </div>

                <button className={cx('add')}>
                    <AddShoppingCart />
                    <span>Add To Cart</span>
                </button>
                <div className={cx('link')}>
                    <div className={cx('item')}>
                        <Balance /> ADD TO WISH LIST
                    </div>
                    <div className={cx('item')}>
                        <FavoriteBorder /> ADD TO COMPARE
                    </div>
                </div>
                <div className={cx('info')}>
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-Shirt, Women, Top</span>
                </div>
                <hr />
                <div className={cx('info')}>
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    );
};

export default Product;
