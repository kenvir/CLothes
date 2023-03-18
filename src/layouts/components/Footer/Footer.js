import React from 'react';
import className from 'classnames';
import classNames from 'classnames/bind';
import style from './Footer.module.scss';

import { AiOutlineHeart } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram, BsTwitter, BsPinterest } from 'react-icons/bs';

import paymentImg from '~/assets/imgs/payment-method.png';
import logoFooter from '~/assets/imgs/footer-logo.png';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function Footer({ classNamea }) {

    const classes = cx('wrapper')

    return (
        <div className={classes}>
            <div className={cx('container')}>
                <div className={cx('content-inner')}>
                    <div className={cx('footer-left')}>
                        <div className={cx('footer-logo')}>
                            <Link to="/">
                                <img src={logoFooter} alt="" />
                            </Link>
                        </div>
                        <ul>
                            <li>Address: 60-49 Road 11378 New York</li>
                            <li>Phone: +65 11.188.888</li>
                            <li>Email: hello.colorlib@gmail.com</li>
                        </ul>
                        <div className={cx('footer-social')}>
                            <a
                                href="https://www.facebook.com/profile.php?id=100057195830094&mibextid=LQQJ4d"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaFacebookF />
                            </a>
                            <a href="#!">
                                <BsInstagram />
                            </a>
                            <a href="#!">
                                <BsTwitter />
                            </a>
                            <a href="#!">
                                <BsPinterest />
                            </a>
                        </div>
                    </div>

                    <div className={cx('footer-widget', 'element-left')}>
                        <h5>Information</h5>
                        <ul>
                            <li>
                                <Link to="/blog">About Us</Link>
                            </li>
                            <li>
                                <Link to="/checkout">Checkout</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="/faq">FAQ</Link>
                            </li>
                        </ul>
                    </div>

                    <div className={cx('footer-widget')}>
                        <h5>My Account</h5>
                        <ul>
                            <li>
                                <a href="http://localhost:3000/">My Account</a>
                            </li>
                            <li>
                                <Link to="/cart">Shopping Cart</Link>
                            </li>
                            <li>
                                <Link to="/shop">Shop</Link>
                            </li>
                        </ul>
                    </div>

                    <div className={cx('newslatter-item')}>
                        <h5>Join Our Newsletter Now</h5>
                        <p>Get E-mail updates about our latest shop and special offers.</p>
                        <form action="#" className={cx('subscribe-form')}>
                            <input className={cx('mail-input')} type="email" placeholder="Enter Your Mail" />
                            <button className={cx('subcribe-btn')} type="button">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* coppyright ----------------------------------------- */}
            <div className={cx('copyright')}>
                <div className={cx('copyright-inner')}>
                    <div className={cx('copyright-text')}>
                        Copyright ©<script>document.write(new Date().getFullYear());</script>2023 All rights reserved |
                        This template is made with <AiOutlineHeart className={cx('copyright-heart-icon')} /> by
                        <a className={cx('footer-coppyright-link')} href="http://localhost:3000/">
                            {'Colorlib'}
                        </a>
                    </div>
                    {/* <div className="payment-pic">
                        <img src={paymentImg} alt="payment-img" />
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Footer;
