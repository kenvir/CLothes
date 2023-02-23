import React from 'react';
import classNames from 'classnames/bind';
import style from './Blog.module.scss';
import Crumb from '~/components/Crumb/Crumb';
import Filter from '~/components/Filter/Filter';
import Product from '~/layouts/components/Product/Product';

const cx = classNames.bind(style);

function Blog() {
    return (
        <div className={cx('wrapper')}>
            <Crumb title="Blog" />
            <div className={cx('content')}>
                <Filter isSearch />
                <Product />
            </div>
        </div>
    );
}

export default Blog;
