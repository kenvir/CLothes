import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import classNames from 'classnames/bind';
import style from './Search.module.scss';

import { MdOutlineExpandMore } from 'react-icons/md';
import { BiSearch, BiSearchAlt } from 'react-icons/bi';

import img1 from '~/assets/imgs/women-4.jpg';
import ProductItem from '../ProductItem/ProductItem';

const cx = classNames.bind(style);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(false);
    const inputRef = useRef();

    // Call API
    const [searchResult, setSearchResult] = useState([]);

    const callApi = async () => {
        const response = await axios({
            method: 'get',
            url: `http://localhost:3030/api/v1/getAllStuff`,
            type: 'json',
        });

        if (response.status === 200) {
            setSearchResult(response.data.data.filter((d) => d.name.includes(searchValue)));
        }
    };

    useEffect(() => {
        callApi();
    }, [searchValue]);

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(e.target.value);
        }
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
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    <button type="button">
                        <BiSearch className={cx('btn-search')} />
                    </button>
                </form>
            </div>
            <BiSearchAlt className={cx('search-icon--small')} />
            {console.log(searchResult)}
            {showResult && searchResult && searchResult.map((d, i) => <ProductItem data={d} key={i} />)}
        </div>
    );
}

export default Search;
