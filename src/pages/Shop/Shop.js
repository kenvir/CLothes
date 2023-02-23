import React from 'react';
import classNames from 'classnames/bind';
import style from './Shop.module.scss';

import Filter from '~/components/Filter/Filter';
import Product from '~/layouts/components/Product/Product';
import Crumb from '~/components/Crumb/Crumb';

const cx = classNames.bind(style);

function Shop() {
    return (
        <div className={cx('wrapper')}>
            <Crumb />
            <div className={cx('content')}>
                <Filter />
                <Product />
            </div>
        </div>
    );
}

export default Shop;
