import React, { useState } from 'react';
import classNames from 'classnames/bind';
import style from './Blog.module.scss';
import Crumb from '~/components/Crumb/Crumb';
import Filter from '~/components/Filter/Filter';
import BlogCard from '~/layouts/components/BlogCard/BlogCard';
import blog from '~/pages/API/Blog.json';

const cx = classNames.bind(style);

function Blog() {
    // Filter product
    const [tag, setTag] = useState('');
    const [filter, setFilter] = useState('');

    const handleFilterChange = (filterName, value) => {
        switch (filterName) {
            case 'tag':
                setTag(value);
                break;
            default:
                break;
        }
        setFilter((prev) => !prev); // Change filter state to active useEffect
    };

    return (
        <div className={cx('wrapper')}>
            <Crumb title="Blog" />
            <div className={cx('contents')}>
                <div className={cx('filter')}>
                    <Filter isSearch isRecent isTags onFilterChange={handleFilterChange} />
                </div>
                <div className={cx('content')}>
                    {blog.map((d, i) => (
                        <BlogCard data={d} key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blog;
