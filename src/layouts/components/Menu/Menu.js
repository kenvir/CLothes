import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';

import { BsList } from 'react-icons/bs';
import { MdExpandMore } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';

const cx = classNames.bind(style);

function Menu() {
    const navLinkStyle = ({ isActive }) => {
        return {
            backgroundColor: isActive ? '#e7ab3c' : '#252525',
        };
    };

    const [productTag, setProductTag] = useState([]);

    const callApi = async () => {
        const response = await axios({
            method: 'get',
            url: `http://localhost:3030/api/v1/getAllStuff`,
            type: 'json',
        });

        if (response.status === 200) {
            setProductTag(response.data.data);
        }
    };

    useEffect(() => {
        callApi();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <ul className={cx('menu-lists')}>
                <li className={cx('list-items')}>
                    <BsList className={cx('menu')} />
                    <span className={cx('list-item')}>ALL DEPARTMENT</span>
                    <MdExpandMore className={cx('arrow')} />
                    <ul className={cx('item-lists')}>
                        {/* /${productTag.filter((p) => p.person.includes('Women'))} */}
                        <Link to={`/shop`}>
                            <li>Women's Clothing</li>
                        </Link>
                        <Link to="/shop">
                            <li>Men's Clothing</li>
                        </Link>
                        <Link to="/shop">
                            <li>Kid's Clothing</li>
                        </Link>
                    </ul>
                </li>
                <NavLink style={navLinkStyle} className={cx('list-item--title')} to="/">
                    <li className={cx('menu-list')}>
                        <span className={cx('list-item')}>HOME</span>
                    </li>
                </NavLink>
                <NavLink style={navLinkStyle} className={cx('list-item--title')} to="/shop">
                    <li className={cx('menu-list')}>
                        <span className={cx('list-item')}>SHOP</span>
                    </li>
                </NavLink>
                <li className={cx('menu-list')}>
                    <span className={cx('list-item')}>COLLECTION</span>
                    <ul className={cx('item-lists')}>
                        <Link to="/shop">
                            <li>Women's Collection</li>
                        </Link>
                        <Link to="/shop">
                            <li>Men's Collection</li>
                        </Link>
                        <Link to="/shop">
                            <li>Kid's Collection</li>
                        </Link>
                    </ul>
                </li>
                <NavLink style={navLinkStyle} className={cx('list-item--title')} to="/blog">
                    <li className={cx('menu-list')}>
                        <span className={cx('list-item')}>BLOG</span>
                    </li>
                </NavLink>
                <NavLink style={navLinkStyle} className={cx('list-item--title')} to="/contact">
                    <li className={cx('menu-list')}>
                        <span className={cx('list-item')}>CONTACT</span>
                    </li>
                </NavLink>
                <li className={cx('menu-list')}>
                    <span className={cx('list-item')}>PAGES</span>
                    <ul className={cx('item-lists')}>
                        <Link to="/cart">
                            <li>Shopping Cart</li>
                        </Link>
                        <Link to="/checkout">
                            <li>Checkout</li>
                        </Link>
                        <Link to="/faq">
                            <li>Faq</li>
                        </Link>
                        <Link to="/register">
                            <li>Register</li>
                        </Link>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
