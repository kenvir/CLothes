import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';

import classNames from 'classnames/bind';
import style from './Cart.module.scss';
import Crumb from '~/components/Crumb/Crumb';

import img1 from '~/assets/imgs/product-1.jpg';
import { TfiClose } from 'react-icons/tfi';

const cx = classNames.bind(style);

function Cart({ className }) {
    // Add product

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const param = useParams();

    const [productCart, setProductCart] = useState([]);
    // const [cartCheckOut, setCartCheckOut] = useState([]);

    const callApi = async () => {
        const response = await axios({
            method: 'get',
            url: `https://6556cd15bd4bcef8b611a0fc.mockapi.io/api/clothes/clothes`,
            type: 'json',
        });

        if (response.status === 200) {
            setProductCart(response.data.find((d) => d.id === parseInt(param.id)));
        }
    };

    console.log(productCart);
    // const price = [];
    // console.log(productCart.imgs[1].img);
    // console.log(productCart.price);
    // console.log(price.push(productCart.price));
    // console.log(price);
    // const initTotal = 0;
    // console.log(price.reduce((totals, total) => totals + total, initTotal));

    useEffect(() => {
        callApi();
    }, []);

    // Increase - Decrease product

    let quantity = useSelector((state) => state);
    const dispatch = useDispatch();

    const [productQuantity, setProductQuantity] = useState(1);
    const handleQuantity = (e) => {
        setProductQuantity(e.target.value);
    };

    const handleIncrease = () => {
        quantity++;
        console.log(quantity);
    };

    const handleDecrease = () => {
        if (quantity === 1) {
            quantity = 1;
        } else {
            quantity--;
            console.log(quantity);
        }
    };

    return (
        <div className={cx('wrapper')}>
            {productCart.imgs && (
                <>
                    <Crumb title="Shopping Cart" />
                    <section className={cx('cart')}>
                        <div className={cx('container')}>
                            <div className={cx('cart-table')}>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th>
                                                <TfiClose className={cx('delete')} />
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className={cx('cart-pic')}>
                                                <img src={productCart.imgs[0].img} alt="" />
                                            </td>
                                            <td className={cx('cart-title')}>
                                                <h5>{productCart.name}</h5>
                                            </td>
                                            <td className={cx('p-price')}>
                                                {' '}
                                                <span>
                                                    {' '}
                                                    {parseFloat(productCart.sale) === 0
                                                        ? parseFloat(productCart.price)
                                                        : (parseFloat(productCart.price) *
                                                              parseFloat(productCart.sale)) /
                                                          100}{' '}
                                                    đ
                                                </span>
                                            </td>
                                            <td className={cx('qua-col')}>
                                                <div className={cx('quantity')}>
                                                    <div className={cx('pro-qty')}>
                                                        <span
                                                            className={cx('qtybtn')}
                                                            onClick={() =>
                                                                dispatch({
                                                                    type: 'SET_QUANTITY',
                                                                    payload: quantity === 1 ? 1 : quantity - 1,
                                                                })
                                                            }
                                                        >
                                                            -
                                                        </span>
                                                        <input type="text" readOnly={true} value={quantity} />
                                                        {console.log(quantity)}
                                                        <span
                                                            className={cx('qtybtn')}
                                                            onClick={() =>
                                                                dispatch({
                                                                    type: 'SET_QUANTITY',
                                                                    payload: quantity + 1,
                                                                })
                                                            }
                                                        >
                                                            +
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={cx('total-price')}>
                                                {' '}
                                                <span>
                                                    {' '}
                                                    {parseFloat(productCart.sale) === 0
                                                        ? parseFloat(productCart.price) * quantity
                                                        : ((parseFloat(productCart.price) *
                                                              parseFloat(productCart.sale)) /
                                                              100) *
                                                          quantity}{' '}
                                                    đ
                                                </span>
                                            </td>
                                            <td className={cx('close-td')}>
                                                <TfiClose className={cx('delete')} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className={cx('footer')}>
                                <div>
                                    <div className={cx('cart-buttons')}>
                                        <Link to="/shop" className={cx('continue-shop')}>
                                            Continue shopping
                                        </Link>
                                        <Link to="#!" className={cx('up-cart')}>
                                            Update cart
                                        </Link>
                                    </div>
                                    <div className={cx('discount-coupon')}>
                                        <h6>Discount Codes</h6>
                                        <form action="#" className={cx('coupon-form')}>
                                            <input type="text" placeholder="Enter your codes" />
                                            <button type="submit" className={cx('coupon-btn')}>
                                                Apply
                                            </button>
                                        </form>
                                    </div>
                                </div>

                                <div className={cx('proceed-checkout')}>
                                    <ul>
                                        <li className={cx('subtotal')}>
                                            Subtotal <span>$240.00</span>
                                        </li>
                                        <li className={cx('cart-total')}>
                                            Total <span>$240.00</span>
                                        </li>
                                    </ul>
                                    <Link to="/checkout" className={cx('proceed-btn')}>
                                        PROCEED TO CHECK OUT
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
            {/* <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>
                            <TfiClose className={cx('delete')} />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={cx('cart-pic')}>
                            <img src={img1} alt="" />
                        </td>
                        <td className={cx('cart-title')}>
                            <h5>Pure Pineapple</h5>
                        </td>
                        <td className={cx('p-price')}>$60.00</td>
                        <td className={cx('qua-col')}>
                            <div className={cx('quantity')}>
                                <div className={cx('pro-qty')}>
                                    <span className={cx('qtybtn')} onClick={(e) => handleDecrease(e)}>
                                        -
                                    </span>
                                    <input
                                        type="text"
                                        readOnly={true}
                                        value={productQuantity}
                                        onChange={(e) => setProductQuantity(e.target.value)}
                                    />
                                    <span className={cx('qtybtn')} onClick={(e) => handleIncrease(e)}>
                                        +
                                    </span>
                                </div>
                            </div>
                        </td>
                        <td className={cx('total-price')}>$60.00</td>
                        <td className={cx('close-td')}>
                            <TfiClose className={cx('delete')} />
                        </td>
                    </tr>
                </tbody>
            </table> */}
        </div>
    );
}

export default Cart;
