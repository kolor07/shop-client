import classNames from 'classnames/bind';
import React, { useState } from 'react';
import styles from './Products.module.scss';

import { useParams } from 'react-router-dom';
import ListCard from '../../components/ListCard/ListCard';
const cx = classNames.bind(styles);
const Products = () => {
    const categoryId = parseInt(useParams().is);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sort, setSort] = useState(null);

    return (
        <div className={cx('products')}>
            <div className={cx('left')}>
                <div className={cx('filterItems')}>
                    <h2>Product Categories</h2>
                    <div className={cx('inputItems')}>
                        <input type="checkbox" id="1" value={1} />
                        <label htmlFor="1">Shoes</label>
                    </div>
                    <div className={cx('inputItems')}>
                        <input type="checkbox" id="2" value={2} />
                        <label htmlFor="2">Skirts</label>
                    </div>
                    <div className={cx('inputItems')}>
                        <input type="checkbox" id="3" value={3} />
                        <label htmlFor="3">Coats</label>
                    </div>
                </div>
                <div className={cx('filterItems')}>
                    <h2>Filter by Price</h2>
                    <div className={cx('inputItems')}>
                        <span>0</span>
                        <input
                            type="range"
                            min={0}
                            max={1000}
                            onChange={(e) => {
                                setMaxPrice(e.target.value);
                            }}
                        />
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className={cx('filterItems')}>
                    <h2>Sort by</h2>
                    <div className={cx('inputItems')}>
                        <input
                            type="radio"
                            name="price"
                            id="asc"
                            value="asc"
                            onChange={() => {
                                setSort('asc');
                            }}
                        />
                        <label htmlFor="asc">Price (Lowest first)</label>
                    </div>
                    <div className={cx('inputItems')}>
                        <input
                            type="radio"
                            name="price"
                            id="desc"
                            value="desc"
                            onChange={() => {
                                setSort('desc');
                            }}
                        />
                        <label htmlFor="desc">Price (Highest first)</label>
                    </div>
                </div>
            </div>
            <div className={cx('right')}>
                <img
                    className={cx('catImg')}
                    src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                />
                <ListCard categoryId={categoryId} maxPrice={maxPrice} sort={sort} />
                <ListCard categoryId={categoryId} maxPrice={maxPrice} sort={sort} />
                <ListCard categoryId={categoryId} maxPrice={maxPrice} sort={sort} />
            </div>
        </div>
    );
};

export default Products;
