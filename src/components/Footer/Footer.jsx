import React from 'react';
import className from 'classnames/bind';

import styles from './Footer.module.scss';
const cx = className.bind(styles);

const Footer = () => {
    return (
        <div className={cx('footer')}>
            <div className={cx('top')}>
                <div className={cx('item')}>
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>
                <div className={cx('item')}>
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className={cx('item')}>
                    <h1>About</h1>
                    <span>
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, seddo eiusmod tempor
                        incididunt ut labore etdolore.
                    </span>
                </div>
                <div className={cx('item')}>
                    <h1>Contact</h1>
                    <span>
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, seddo eiusmod tempor
                        incididunt ut labore etdolore.
                    </span>
                </div>
            </div>
            <div className={cx('bottom')}>
                <div className={cx('left')}>
                    <span className={cx('logo')}>Lamastore</span>
                    <span className={cx('copyright')}>© Copyright 2023. All Rights Reserved</span>
                </div>
                <div className={cx('right')}>
                    <img src="/img/payment.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
