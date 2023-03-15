import React from 'react';
import classNames from 'classnames/bind';
import style from './Footer.module.scss';

import { AiOutlineHeart } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram, BsTwitter, BsPinterest } from 'react-icons/bs';

import paymentImg from '~/assets/imgs/payment-method.png';
import logoFooter from '~/assets/imgs/footer-logo.png';

const cx = classNames.bind(style);

function Footer({ className }) {
    return (
        <div className={cx('wrapper', className)}>
            <div className={cx('container')}>
                <div className={cx('content-inner')}>
                    <div className={cx("footer-left")}>
                        <div className={cx("footer-logo")}>
                            <a href="http://localhost:3000/">
                                <img src={logoFooter} alt="" />
                            </a>
                        </div>
                        <ul>
                            <li>Address: 60-49 Road 11378 New York</li>
                            <li>Phone: +65 11.188.888</li>
                            <li>Email: hello.colorlib@gmail.com</li>
                        </ul>
                        <div className={cx("footer-social")}>
                            <a href="http://localhost:3000/">
                                <FaFacebookF />
                            </a>
                            <a href="http://localhost:3000/">
                                <BsInstagram />
                            </a>
                            <a href="http://localhost:3000/">
                                <BsTwitter />
                            </a>
                            <a href="http://localhost:3000/">
                                <BsPinterest />
                            </a>
                        </div>
                    </div>
                
                    <div className={cx("footer-widget", "element-left")}>
                        <h5>Information</h5>
                        <ul>
                            <li>
                                <a href="http://localhost:3000/">About Us</a>
                            </li>
                            <li>
                                <a href="http://localhost:3000/">Checkout</a>
                            </li>
                            <li>
                                <a href="http://localhost:3000/">Contact</a>
                            </li>
                            <li>
                                <a href="http://localhost:3000/">Serivius</a>
                            </li>
                        </ul>
                    </div>
                
                    <div className={cx("footer-widget")}>
                        <h5>My Account</h5>
                        <ul>
                            <li>
                                <a href="http://localhost:3000/">My Account</a>
                            </li>
                            <li>
                                <a href="http://localhost:3000/">Contact</a>
                            </li>
                            <li>
                                <a href="http://localhost:3000/">Shopping Cart</a>
                            </li>
                            <li>
                                <a href="http://localhost:3000/">Shop</a>
                            </li>
                        </ul>
                    </div>
                
                    <div className={cx("newslatter-item")}>
                        <h5>Join Our Newsletter Now</h5>
                        <p>Get E-mail updates about our latest shop and special offers.</p>
                        <form action="#" className={cx("subscribe-form")}>
                            <input className={cx("mail-input")} type="text" placeholder="Enter Your Mail" />
                            <button className={cx("subcribe-btn")} type="button">Subscribe</button>
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
                            {"Colorlib"}
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
