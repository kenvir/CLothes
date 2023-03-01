import React from 'react';
import classNames from 'classnames/bind';
import style from './BlogCard.module.scss';
import img1 from '~/assets/imgs/blog-1.jpg';

const cx = classNames.bind(style);

function BlogCard() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('img')}>
                <img src={img1} alt="blog" />
            </div>
            <div className={cx('highlight')}>
                <p>The Personality Trait That Makes People Happier</p>
            </div>
            <div className={cx('timeline')}>
                <p>TRAVEL</p>
                <span>&nbsp;- May 19, 2019</span>
            </div>
        </div>
    );
}

export default BlogCard;
