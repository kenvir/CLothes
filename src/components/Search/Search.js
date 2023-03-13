import React from 'react';
import { useState, useRef } from 'react';

import classNames from 'classnames/bind';
import style from './Search.module.scss';

import { MdOutlineExpandMore } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';

import img1 from '~/assets/imgs/women-4.jpg';

const cx = classNames.bind(style);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchRusult] = useState([]);
    const [showResult, setShowResult] = useState(false);

    const inputRef = useRef();

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <div className={cx('search')}>
            <div className={cx('advanced-search')}>
                <button type="button" className={cx('category-btn')}>
                    <span>All Categories</span>
                    <MdOutlineExpandMore />
                </button>
                <form action="#" className={cx('input-group')}>
                    <input
                        type="text"
                        placeholder="What do you need?"
                        ref={inputRef}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setShowResult(true)}
                    />
                    <button type="button">
                        <BiSearch className={cx('btn-search')} />
                    </button>
                </form>
            </div>
            <div className={cx('result')}>
                <p className={cx('title')}>Product result</p>
                <div className={cx('search-result')}>
                    <img src={img1} alt="" />
                    <div className={cx('product')}>
                        <span className={cx('product-title')}>Product Name</span>
                        <p>Product intro</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
