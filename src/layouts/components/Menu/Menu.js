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
                <li className={cx('list-items')}>
                    <BsList className={cx('menu')}/>
                    <span className={cx('list-item')}>ALL DEPARTMENT</span>
                    <MdExpandMore className={cx('arrow')}/>
                    <ul className={cx('item-lists')}>
                        <li>Women's Clothing</li>
                        <li>Men's Clothing</li>
                        <li>Kid's Clothing</li>
                        <li>Accessories/Shoes</li>
                    </ul>
                </li>
                <Link className={cx('list-item--title')} to="/">
                    <li className={cx('menu-list')}>
                        <span className={cx('list-item')}>HOME</span>
                    </li>
                </Link>
                <Link className={cx('list-item--title')} to="/shop">
                    <li className={cx('menu-list')}>
                        <span className={cx('list-item')}>SHOP</span>
                    </li>
                </Link>
                <li className={cx('menu-list')}>
                    <span className={cx('list-item')}>COLLECTION</span>
                    <ul className={cx('item-lists')}>
                        <li>Women's</li>
                        <li>Men's</li>
                        <li>Kid's</li>
                    </ul>
                </li>
                <Link className={cx('list-item--title')} to="/blog">
                    <li className={cx('menu-list')}>
                        <span className={cx('list-item')}>BLOG</span>
                    </li>
                </Link>
                <Link className={cx('list-item--title')} to="/contact">
                    <li className={cx('menu-list')}>
                        <span className={cx('list-item')}>CONTACT</span>
                    </li>
                </Link>
                <li className={cx('menu-list')}>
                    <span className={cx('list-item')}>PAGES</span>
                    <ul className={cx('item-lists')}>
                        <li>Shopping Cart</li>
                        <li>Checkout</li>
                        <li>Faq</li>
                        <Link to='/register'><li>Register</li></Link>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
