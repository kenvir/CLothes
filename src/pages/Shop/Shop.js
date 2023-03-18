import React, { useState } from 'react';
import classNames from 'classnames/bind';
import style from './Shop.module.scss';

import Filter from '~/components/Filter/Filter';
import Product from '~/layouts/components/Product/Product';
import Crumb from '~/components/Crumb/Crumb';
import { Pagination } from 'swiper';

import product from '~/pages/API/Product.json';

const cx = classNames.bind(style);

function Shop({ data }) {
    const [page, setPage] = useState(1);

    return (
        <div className={cx('wrapper')}>
            <Crumb title="Shop" />
            <div className={cx('content')}>
                <div className={cx('filter')}>
                    <Filter isCategory isPrice isColor isSize isTags />
                </div>
                <div className={cx('product')}>
                    <Product data />
                </div>
            </div>
        </div>
    );
}

export default Shop;
