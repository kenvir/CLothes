import React from 'react';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';

import config from '~/config';

import { BsList } from 'react-icons/bs';
import { MdExpandMore } from 'react-icons/md';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function Menu() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('menu-lists')}>
                <li className={cx('menu-list')}>
                    <BsList />
                    <span className={cx('list-item')}>ALL DEPARTMENT</span>
                    <MdExpandMore />
                    <ul className={cx('item-lists')}>
                        <li>Women's Clothing</li>
                        <li>Men's Clothing</li>
                        <li>Kid's Clothing</li>
                        <li>Underwear</li>
                        <li>Accessories/Shoes</li>
                    </ul>
                </li>
                <li className={cx('menu-list')}>
                    <span className={cx('list-item')}>
                        <Link className={cx('list-item--title')} to="/">
                            HOME
                        </Link>
                    </span>
                </li>
                <li className={cx('menu-list')}>
                    <span className={cx('list-item')}>
                        <Link className={cx('list-item--title')} to="/shop">
                            SHOP
                        </Link>
                    </span>
                </li>
                <li className={cx('menu-list')}>
                    <span className={cx('list-item')}>COLLECTION</span>
                    <ul className={cx('item-lists')}>
                        <li>Women's</li>
                        <li>Men's</li>
                        <li>Kid's</li>
                    </ul>
                </li>
                <li className={cx('menu-list')}>
                    <span className={cx('list-item')}>
                        <Link className={cx('list-item--title')} to="/blog">
                            BLOG
                        </Link>
                    </span>
                </li>
                <li className={cx('menu-list')}>
                    <span className={cx('list-item')}>
                        {' '}
                        <Link className={cx('list-item--title')} to="/contact">
                            CONTACT
                        </Link>
                    </span>
                </li>
                <li className={cx('menu-list')}>
                    <span className={cx('list-item')}>PAGES</span>
                    <ul className={cx('item-lists')}>
                        <li>Shopping Cart</li>
                        <li>Checkout</li>
                        <li>Faq</li>
                        <li>Register</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
