import React from 'react';
import classNames from 'classnames/bind';
import style from './BlogCard.module.scss';

const cx = classNames.bind(style);

function BlogCard() {
    return <div className={cx('wrapper')}>Hi</div>;
}

export default BlogCard;
