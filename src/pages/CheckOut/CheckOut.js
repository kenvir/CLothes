import React from 'react';

import classNames from 'classnames/bind';
import style from './CheckOut.module.scss';
import Crumb from '~/components/Crumb/Crumb';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function CheckOut() {
    return (
        <div className={cx('wrapper')}>
            <Crumb title="Check Out" />
            <div className={cx('container')}>
                <form action="#" className={cx('checkout-form')}>
                    <div className={cx('row')}>
                        <div className={cx('form-left')}>
                            <div className={cx('checkout-content')}>
                                <Link to="/login" className={cx('content-btn')}>
                                    Click Here To Login
                                </Link>
                            </div>
                            <h4 className={cx('bill-title')}>Billing Details</h4>
                            <div className={cx('form-group')}>
                                <label htmlFor="fullName" className={cx('form-label')}>
                                    Full Name <span>*</span>
                                </label>
                                <input type="text" className={cx('form-control')} />
                            </div>
                            <div className={cx('form-group')}>
                                <label htmlFor="email" className={cx('form-label')}>
                                    Email <span>*</span>
                                </label>
                                <input type="text" className={cx('form-control')} />
                            </div>
                            <div className={cx('form-group')}>
                                <label htmlFor="phone" className={cx('form-label')}>
                                    Phone <span>*</span>
                                </label>
                                <input type="text" className={cx('form-control')} />
                            </div>
                            <div className={cx('form-group')}>
                                <label htmlFor="country" className={cx('form-label')}>
                                    Country <span>*</span>
                                </label>
                                <input type="text" className={cx('form-control')} />
                            </div>
                            <div className={cx('form-group')}>
                                <label htmlFor="city" className={cx('form-label')}>
                                    City <span>*</span>
                                </label>
                                <input type="text" className={cx('form-control')} />
                            </div>
                            <div className={cx('form-group')}>
                                <label htmlFor="address" className={cx('form-label')}>
                                    Street Address <span>*</span>
                                </label>
                                <input type="text" className={cx('form-control')} />
                            </div>
                        </div>
                        <div className={cx('form-right')}>
                            <div className={cx('checkout-content')}>
                                <input className={cx('content-btn')} placeholder="Enter Your Coupon Code" />
                            </div>
                            <h4 className={cx('bill-title')}>Your Order</h4>
                            <div className={cx('order-total')}>
                                <ul className={cx('order-table')}>
                                    <li>
                                        Product <span>Total</span>
                                    </li>
                                    <li className={cx('fw-normal')}>
                                        Combination x 1 <span>$60.00</span>
                                    </li>
                                    <li className={cx('fw-normal')}>
                                        Combination x 1 <span>$60.00</span>
                                    </li>
                                    <li className={cx('fw-normal')}>
                                        Combination x 1 <span>$120.00</span>
                                    </li>
                                    <li className={cx('fw-normal')}>
                                        Subtotal <span>$240.00</span>
                                    </li>
                                    <li className={cx('total-price')}>
                                        Total <span>$240.00</span>
                                    </li>
                                </ul>

                                <div className={cx('payment-check')}>
                                    <div className={cx('pc-item')}>
                                        <label htmlFor="pc-cod">
                                            COD
                                            <input type="checkbox" id="pc-cod" />
                                            <span className={cx('checkmark')}></span>
                                        </label>
                                    </div>
                                    <div className={cx('pc-item')}>
                                        <label htmlFor="pc-atm">
                                            ATM/ Visa
                                            <input type="checkbox" id="pc-atm" />
                                            <span className={cx('checkmark')}></span>
                                        </label>
                                    </div>
                                    <div className={cx('pc-item')}>
                                        <label htmlFor="pc-momo">
                                            Momo
                                            <input type="checkbox" id="pc-momo" />
                                            <span className={cx('checkmark')}></span>
                                        </label>
                                    </div>
                                </div>

                                <div className={cx('order-btn')}>
                                    <button type="submit" className={cx('place-btn')}>
                                        Place Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CheckOut;
