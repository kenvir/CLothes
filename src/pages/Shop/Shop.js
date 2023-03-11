import React, { useState } from 'react';
import classNames from 'classnames/bind';
import style from './Shop.module.scss';

import Filter from '~/components/Filter/Filter';
import Product from '~/layouts/components/Product/Product';
import Crumb from '~/components/Crumb/Crumb';
import { Pagination } from 'swiper';

const cx = classNames.bind(style);

function Shop() {
    const [page, setPage] = useState(1);

    return (
        <div className={cx('wrapper')}>
            <Crumb title="Shop" />
            <div className={cx('content')}>
                <div className={cx('filter')}>
                    <Filter isCategory isBrand isPrice isColor isSize isTags />
                </div>
                <Product to />
                {/* <Pagination totalPosts={transferList.data.Object.length} postPerPage={9} setPage={setPage} pageIndex={page}/> */}
            </div>
        </div>
    );
}

export default Shop;
