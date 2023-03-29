import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import * as searchServices from '~/services/searchServices';
import { useDebounce } from '~/hooks';

import classNames from 'classnames/bind';
import style from './Search.module.scss';

import { MdOutlineExpandMore } from 'react-icons/md';
import { BiSearch, BiSearchAlt } from 'react-icons/bi';

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

    // useEffect(() => {
    //     callApi();
    // }, [searchValue]);

    // useEffect(() => {
    //     if (searchValue !== '') {
    //         callApi();
    //     } else {
    //         setShowResult(false);
    //         setSearchResult([]);
    //     }
    // }, [searchValue]);

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(e.target.value);
            callApi();
        } else if (searchValue === '') {
            setSearchResult([]);
            setShowResult(false);
        }
    };
    
    const handleHideResult = () => {
        setShowResult(false);
    };


    return (
        <div className={cx('wrapper')}>
            <Tippy
                interactive={true}
                appendTo={() => document.body}
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        {showResult && (
                            <div className={cx('search-outcome')}>
                                <p className={cx('title')}>Product result</p>
                                {searchResult.map((d, i) => (
                                    <ProductItem data={d} key={i} />
                                ))}
                            </div>
                        )}
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
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
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
