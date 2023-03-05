import React, { useState } from 'react';
import classNames from 'classnames/bind';
import style from './MenuMobile.module.scss';

import { Link } from 'react-router-dom';

import { FiMenu } from 'react-icons/fi';

const cx = classNames.bind(style);

function MenuMobile() {
    const [show, setShow] = useState('none');

    const [showMenu, setShowMenu] = useState('none');

    return (
        <div className={cx('wrapper')}>
            <div className={cx('mobile-menu-wrap')}>
                <div className={cx('slick-menu')}>
                    <div
                        className={cx('menu', { active: show })}
                        onClick={() => (show === 'none' ? setShow('block') : setShow('none'))}
                    >
                        <span className={cx('menu-txt')}>MENU</span>
                        <FiMenu className={cx('menu-icon')} />
                    </div>
                    <nav className={cx('slick-nav')}>
                        <ul style={{ display: show }}>
                            <Link to="/" className={cx('slick-collapsed')}>
                                <li className={cx('actives')}>Home</li>
                            </Link>
                            <Link to="/shop" className={cx('slick-collapsed')}>
                                <li className={cx('actives')}>Shop</li>
                            </Link>
                            <li className={cx('slick-collapsed')}>
                                <div
                                    href="#!"
                                    tabIndex="-1"
                                    className={cx('slick-item', { active: show })}
                                    onClick={() => (showMenu === 'none' ? setShowMenu('block') : setShowMenu('none'))}
                                >
                                    <div href="#!">Collection</div>
                                    <span className={cx('slick-arrow')}>►</span>
                                </div>
                                <ul className={cx('slick-hidden')}>
                                    <Link to="/">
                                        <li className={cx('actives')}>Men's</li>
                                    </Link>
                                    <Link to="/">
                                        <li className={cx('actives')}>Women's</li>
                                    </Link>
                                    <Link to="/">
                                        <li className={cx('actives')}>Kid's</li>
                                    </Link>
                                </ul>
                            </li>
                            <Link to="/blog" className={cx('slick-collapsed')}>
                                <li className={cx('actives')}>Blog</li>
                            </Link>
                            <Link to="/contact" className={cx('slick-collapsed')}>
                                <li className={cx('actives')}>Contact</li>
                            </Link>
                            <li className={cx('slick-collapsed')}>
                                <div href="#!" tabIndex="-1" className={cx('slick-item')}>
                                    <div href="#!">Pages</div>
                                    <span className={cx('slick-arrow')}>►</span>
                                </div>
                                <ul className={cx('slick-hidden')}>
                                    <Link to="/cart">
                                        <li className={cx('actives')}>Shopping Cart</li>
                                    </Link>
                                    <Link to="/">
                                        <li className={cx('actives')}>Check Out</li>
                                    </Link>
                                    <Link to="/faq">
                                        <li className={cx('actives')}>FAG</li>
                                    </Link>
                                    <Link to="/register">
                                        <li className={cx('actives')}>Register</li>
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
