import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { BsFillTelephoneFill, BsHeart, BsClipboardPlus } from 'react-icons/bs';
import { ImFacebook, ImPinterest } from 'react-icons/im';
import { RiInstagramFill } from 'react-icons/ri';
import { FaTiktok, FaUser } from 'react-icons/fa';
import { IoShareSocialOutline } from 'react-icons/io5';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import style from './Header.module.scss';
import Search from '~/components/Search/Search';
import Button from '~/components/Button/Button';
import img1 from '~/assets/imgs/women-4.jpg';
import ProductItem from '~/components/ProductItem/ProductItem';

const cx = classNames.bind(style);

function Header() {
    // const [visible, setVisible] = useState(false);
    // const hide = () => setVisible(false);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('header-top')}>
                <div className={cx('container')}>
                    <div className={cx('header-left')}>
                        <div className={cx('email')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faEnvelope} />
                            <span className={cx('mail-address')}>hello.colorlib@gmail.com</span>
                        </div>
                        <div className={cx('phone')}>
                            <BsFillTelephoneFill className={cx('icon')} />
                            <span>+84 346.751.314</span>
                        </div>
                    </div>
                    <div className={cx('header-right')}>
                        <div className={cx('social')}>
                            <a
                                href="https://www.facebook.com/profile.php?id=100057195830094&mibextid=LQQJ4d"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ImFacebook />
                            </a>
                            <a href="#!">
                                <RiInstagramFill />
                            </a>
                            <a href="#!">
                                <ImPinterest />
                            </a>
                            <a href="#!">
                                <FaTiktok />
                            </a>
                        </div>
                        <div className={cx('social-icon')}>
                            <IoShareSocialOutline />
                        </div>
                        <div className={cx('language')}>
                            <span>English</span>
                            <div className={cx('space')}></div>
                            <ul className={cx('list-language')}>
                                <li>English</li>
                                <li>Viet Nam</li>
                            </ul>
                        </div>
                        <div className={cx('login')}>
                            <FaUser />
                            <span>
                                <Link to="/login">Login</Link>
                            </span>
                        </div>
                        <div className={cx('avatar--user')}>
                            <Link to="/profile">
                                <img
                                    src="https://img.freepik.com/free-photo/cute-domestic-kitten-sits-window-staring-outside-generative-ai_188544-12519.jpg"
                                    alt="avt-user"
                                    className={cx('avt-img')}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('line')}></div>
            <div className={cx('header-bot')}>
                <div className={cx('inner-header')}>
                    <div className={cx('logo')}>
                        <Link to="/">
                            <img src="https://preview.colorlib.com/theme/fashi/img/logo.png" alt="" />
                        </Link>
                    </div>
                    <Search />
                    <div className={cx('heart-cart')}>
                        <div className={cx('heart-ele')}>
                            <Link to="/favorite" className={cx('heart')}>
                                {' '}
                                <div className={cx('heart-icon')}>
                                    <BsHeart />
                                    <span className={cx('cart-number')}>
                                        <div>1</div>
                                    </span>
                                </div>
                            </Link>
                            <div className={cx('act-dropdown')}>
                                <div className={cx('act-dropdown__inner')}>
                                    <img
                                        src="./assets/icons/arrow-up.png"
                                        alt=""
                                        className={cx('act-dropdown__arrow')}
                                    />
                                    <div className={cx('act-dropdown__top')}>
                                        <h2 className={cx('act-dropdown__title')}>You have 1 product(s)</h2>
                                        <Link to="/favorite" className={cx('act-dropdown__view-all')}>
                                            See All
                                        </Link>
                                    </div>
                                    <div className={cx('row', 'act-dropdown__list')}>
                                        <div className={cx('col')}>
                                            <article className={cx('cart-preview-item')}>
                                                <div className={cx('cart-preview-item__img-wrap')}>
                                                    <img src={img1} alt="" className={cx('cart-preview-item__thumb')} />
                                                </div>
                                                <h3 className={cx('cart-preview-item__title')}>
                                                    Lavazza Coffee Blends
                                                </h3>
                                                <p className={cx('cart-preview-item__price')}>$329.00</p>
                                            </article>
                                        </div>
                                        <div className={cx('act-dropdown__separate')}></div>
                                        <div className={cx('act-dropdown__checkout')}>
                                            <Button
                                                className={cx('button')}
                                                to="/checkout"
                                                title="ADD ALL TO CART"
                                            ></Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('cart-ele')}>
                            <Link to="/cart" className={cx('cart')}>
                                {' '}
                                <div className={cx('cart-icon')}>
                                    <BsClipboardPlus />
                                    <span className={cx('cart-number')}>
                                        <span>3</span>
                                    </span>
                                </div>
                            </Link>
                            <div className={cx('act-dropdown')}>
                                <div className={cx('act-dropdown__inner')}>
                                    <img
                                        src="./assets/icons/arrow-up.png"
                                        alt=""
                                        className={cx('act-dropdown__arrow')}
                                    />
                                    <div className={cx('act-dropdown__top')}>
                                        <h2 className={cx('act-dropdown__title')}>You have 3 product(s)</h2>
                                        <Link to="/cart" className={cx('act-dropdown__view-all')}>
                                            See All
                                        </Link>
                                    </div>
                                    <div className={cx('row', 'act-dropdown__list')}>
                                        <div className={cx('col')}>
                                            <article className={cx('cart-preview-item')}>
                                                <div className={cx('cart-preview-item__img-wrap')}>
                                                    <img src={img1} alt="" className={cx('cart-preview-item__thumb')} />
                                                </div>
                                                <h3 className={cx('cart-preview-item__title')}>
                                                    Lavazza Coffee Blends
                                                </h3>
                                                <p className={cx('cart-preview-item__price')}>$329.00</p>
                                            </article>
                                            <article className={cx('cart-preview-item')}>
                                                <div className={cx('cart-preview-item__img-wrap')}>
                                                    <img src={img1} alt="" className={cx('cart-preview-item__thumb')} />
                                                </div>
                                                <h3 className={cx('cart-preview-item__title')}>
                                                    Lavazza Coffee Blends
                                                </h3>
                                                <p className={cx('cart-preview-item__price')}>$329.00</p>
                                            </article>
                                            <article className={cx('cart-preview-item')}>
                                                <div className={cx('cart-preview-item__img-wrap')}>
                                                    <img src={img1} alt="" className={cx('cart-preview-item__thumb')} />
                                                </div>
                                                <h3 className={cx('cart-preview-item__title')}>
                                                    Lavazza Coffee Blends
                                                </h3>
                                                <p className={cx('cart-preview-item__price')}>$329.00</p>
                                            </article>
                                        </div>
                                        <div className={cx('act-dropdown__separate')}></div>
                                        <div className={cx('act-dropdown__checkout')}>
                                            <Button
                                                className={cx('button')}
                                                to="/checkout"
                                                title="ADD ALL TO CHECKOUT"
                                            ></Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
