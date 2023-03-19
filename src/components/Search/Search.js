import React from 'react';
import { useState, useRef } from 'react';

import classNames from 'classnames/bind';
import style from './Search.module.scss';

import { MdOutlineExpandMore } from 'react-icons/md';
import { BiSearch, BiSearchAlt } from 'react-icons/bi';

import img1 from '~/assets/imgs/women-4.jpg';
import ProductItem from '../ProductItem/ProductItem';

import product from '~/pages/API/Product.json';

const cx = classNames.bind(style);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchRusult] = useState([]);
    const [showResult, setShowResult] = useState(false);

    const inputRef = useRef();

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(e.target.value);
        }
    };

    // const handleSearch = () => {
    //     product.map((d, i) => {
    //         d.indexOf(searchValue) ? setSearchRusult(d) : setSearchRusult(null);
    //     });
    // };

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
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    <button type="button">
                        <BiSearch className={cx('btn-search')} />
                    </button>
                </form>
            </div>
            <BiSearchAlt className={cx('search-icon--small')} />
            {searchResult && searchResult.map((d, i) => <ProductItem data={searchResult} />)}
        </div>
    );
}

export default Search;
