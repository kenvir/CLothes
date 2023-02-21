import React from 'react';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';

import { BsList } from 'react-icons/bs';
import { MdExpandMore } from 'react-icons/md';

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
          <span className={cx('list-item')}>HOME</span>
        </li>
        <li className={cx('menu-list')}>
          <span className={cx('list-item')}>SHOP</span>
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
          <span className={cx('list-item')}>BLOG</span>
        </li>
        <li className={cx('menu-list')}>
          <span className={cx('list-item')}>CONTACT</span>
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
