import classNames from 'classnames/bind';
import React from 'react';
import styles from './Cart.module.scss';
import { DeleteOutline } from '@mui/icons-material';
const cx = classNames.bind(styles);

const Cart = () => {
    const data = [
        {
            id: 1,
            img1: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Long sleeve graphic t-shirt',
            description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                    accumsan lacus vel facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                    Risus commodo viverra maecenas.`,
            isNew: true,
            oldPrices: 19,
            price: 12,
        },
        {
            id: 2,
            img1: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Short Sleeve Graphic Shirt',
            description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                    accumsan lacus vel facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                    Risus commodo viverra maecenas.`,
            isNew: true,
            oldPrices: 19,
            price: 12,
        },
    ];
    return (
        <div className={cx('cart')}>
            <h1>Products in your cart</h1>

            {data?.map((item) => (
                <div className={cx('items')} key={item.id}>
                    <img src={item.img1} alt={item.title} />
                    <div className={cx('details')}>
                        <h1>{item.title}</h1>
                        <p>{item.description.substring(0, 100)}</p>
                        <div className={cx('price')}>1 * {item.price}</div>
                    </div>
                    <DeleteOutline className={cx('delete')} />
                </div>
            ))}

            <div className={cx('total')}>
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className={cx('reset')}> Reset Cart</span>
        </div>
    );
};

export default Cart;
