import classNames from 'classnames/bind';
import React from 'react';
import styles from './Contact.module.scss';
import { Facebook, Instagram, Twitter, Google, Pinterest } from '@mui/icons-material';
const cx = classNames.bind(styles);
const Contact = () => {
    return (
        <div className={cx('contact')}>
            <div className={cx('wrapper')}>
                <span>BE IN TOUCH WITH US</span>
                <div className={cx('mail')}>
                    <input type="text" placeholder="enter your email..." />
                    <button>JOIN US</button>
                </div>
                <div className={cx('icons')}>
                    <Facebook />
                    <Instagram />
                    <Twitter />
                    <Google />
                    <Pinterest />
                </div>
            </div>
        </div>
    );
};

export default Contact;
