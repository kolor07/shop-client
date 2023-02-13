import React from 'react';
import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

import { WestOutlined, EastOutlined } from '@mui/icons-material';
import { useState } from 'react';
const cx = classNames.bind(styles);
const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ];

    const handlePrevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? data.length - 1 : (prev) => prev - 1);
    };
    const handleNextSlide = () => {
        setCurrentSlide(currentSlide === data.length - 1 ? 0 : (prev) => prev + 1);
    };
    console.log(data.length);
    return (
        <div className={cx('slider')}>
            <div className={cx('container')} style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
            </div>
            <div className={cx('icons')}>
                <div className={cx('icon')} onClick={handlePrevSlide}>
                    <WestOutlined />
                </div>
                <div className={cx('icon')} onClick={handleNextSlide}>
                    <EastOutlined />
                </div>
            </div>
        </div>
    );
};

export default Slider;
