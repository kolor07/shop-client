import classNames from 'classnames/bind';
import React from 'react';
import styles from './Categories.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

const Categories = () => {
    return (
        <div className={cx('categories')}>
            <div className={cx('col')}>
                <div className={cx('row')}>
                    <img
                        src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                    />
                    <button>
                        <Link className={cx('link')} to="/products/1">
                            Sale
                        </Link>
                    </button>
                </div>
                <div className={cx('row')}>
                    <img
                        src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                    />
                    <button>
                        <Link to="/products/1" className={cx('link')}>
                            Women
                        </Link>
                    </button>
                </div>
            </div>
            <div className={cx('col')}>
                <div className={cx('row')}>
                    <img
                        src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                    />
                    <button>
                        <Link to="/products/1" className={cx('link')}>
                            New Season
                        </Link>
                    </button>
                </div>
            </div>
            <div className={cx('col', 'col-l')}>
                <div className={cx('row')}>
                    <div className={cx('col')}>
                        <div className={cx('row')}>
                            <img
                                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                            <button>
                                <Link to="/products/1" className={cx('link')}>
                                    Men
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className={cx('col')}>
                        <div className={cx('row')}>
                            <img
                                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                            <button>
                                <Link to="/products/1" className={cx('link')}>
                                    Accessories
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={cx('row')}>
                    <img
                        src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                    />
                    <button>
                        <Link to="/products/1" className={cx('link')}>
                            Shoes
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Categories;
