import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import {
    KeyboardArrowDown,
    Search,
    ShoppingCartOutlined,
    PersonOutlineOutlined,
    FavoriteBorderOutlined,
} from '@mui/icons-material/';
import Cart from '../Cart/Cart';
const cx = classNames.bind(styles);
const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className={cx('navbar')}>
            <div className={cx('wrapper')}>
                <div className={cx('left')}>
                    <div className={cx('item')}>
                        <img src="/img/en.png" alt="english" />
                        <KeyboardArrowDown />
                    </div>
                    <div className={cx('item')}>
                        <span>USD</span>
                        <KeyboardArrowDown />
                    </div>
                    <div className={cx('item')}>
                        <Link to="/products/1"> Women</Link>
                    </div>
                    <div className={cx('item')}>
                        <Link to="/products/2"> Men</Link>
                    </div>
                    <div className={cx('item')}>
                        <Link to="/products/3"> Children</Link>
                    </div>
                </div>
                <div className={cx('center')}>
                    <Link to="/">D.Ace Store</Link>
                </div>
                <div className={cx('right')}>
                    <div className={cx('item')}>
                        <Link to="/">Home Page</Link>
                    </div>
                    <div className={cx('item')}>
                        <Link to="/">About </Link>
                    </div>
                    <div className={cx('item')}>
                        <Link to="/">Contact </Link>
                    </div>
                    <div className={cx('item')}>
                        <Link to="/">Store </Link>
                    </div>
                    <div className={cx('icons')}>
                        <Search />
                        <PersonOutlineOutlined />
                        <FavoriteBorderOutlined />
                        <div
                            className={cx('cartIcons')}
                            onClick={() => {
                                setOpen(!open);
                            }}
                        >
                            <ShoppingCartOutlined />
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart />}
        </div>
    );
};

export default Navbar;
