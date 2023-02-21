import React from 'react';
import classNames from 'classnames/bind';
import style from './Product.module.scss';

const cx = classNames.bind(style);

function Product(children) {
  return <div className={cx('wrapper')}>Hi</div>;
}

export default Product;
