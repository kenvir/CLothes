import React from 'react';
import classNames from 'classnames/bind';
import style from './MenuMobile.module.scss';

import { Link } from 'react-router-dom';

import { FiMenu } from 'react-icons/fi';

const cx = classNames.bind(style);

function MenuMobile() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('mobile-menu-wrap')}>
                <div className={cx('slick-menu')}>
                    <div className={cx('menu')}>
                        <span className={cx('menu-txt')}>MENU</span>
                        <FiMenu className={cx('menu-icon')} />
                    </div>
                    <nav className={cx('slick-nav')}>
                        <ul>
                            <Link to="/" className={cx('slick-collapsed')}>
                                <li className={cx('active')}>Home</li>
                            </Link>
                            <Link to="/shop" className={cx('slick-collapsed')}>
                                <li className={cx('active')}>Shop</li>
                            </Link>
                            <li className={cx('slick-collapsed')}>
                                <div href="#!" tabIndex="-1" className={cx('slick-item')}>
                                    <div href="#!">Collection</div>
                                    <span className={cx('slick-arrow')}>►</span>
                                </div>
                                <ul className="slick-hidden">
                                    <Link to="/">
                                        <li className={cx('active')}>Men's</li>
                                    </Link>
                                    <Link to="/">
                                        <li className={cx('active')}>Women's</li>
                                    </Link>
                                    <Link to="/">
                                        <li className={cx('active')}>Kid's</li>
                                    </Link>
                                </ul>
                            </li>
                            <Link to="/blog" className={cx('slick-collapsed')}>
                                <li className={cx('active')}>Blog</li>
                            </Link>
                            <Link to="/contact" className={cx('slick-collapsed')}>
                                <li className={cx('active')}>Contact</li>
                            </Link>
                            <li className={cx('slick-collapsed')}>
                                <div href="#!" tabIndex="-1" className={cx('slick-item')}>
                                    <div href="#!">Pages</div>
                                    <span className={cx('slick-arrow')}>►</span>
                                </div>
                                <ul className="slick-hidden">
                                    <Link to="/cart">
                                        <li className={cx('active')}>Shopping Cart</li>
                                    </Link>
                                    <Link to="/">
                                        <li className={cx('active')}>Check Out</li>
                                    </Link>
                                    <Link to="/faq">
                                        <li className={cx('active')}>FAG</li>
                                    </Link>
                                    <Link to="/register">
                                        <li className={cx('active')}>Register</li>
                                    </Link>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default MenuMobile;
