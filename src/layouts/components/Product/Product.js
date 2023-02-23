import React from 'react';
import classNames from 'classnames/bind';
import style from './Product.module.scss';

const cx = classNames.bind(style);

function Product() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('short')}></div>
            <div className={cx('content')}>Hi</div>
        </div>
    );
}

export default Product;
