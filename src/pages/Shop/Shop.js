import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from './Shop.module.scss';

import Filter from '~/components/Filter/Filter';
import Product from '~/layouts/components/Product/Product';
import Crumb from '~/components/Crumb/Crumb';
import Pagination from '~/components/Pagination/Pagination';
import axios from 'axios';
import qs from 'qs';
import { AiFillApple } from 'react-icons/ai';

const cx = classNames.bind(style);

function Shop({ d }) {
    // Pagination
    const [page, setPage] = useState(1);
    const lastIndex = page * 9;
    const firstIndex = lastIndex - 9;

    // Call API
    const [productTag, setProductTag] = useState([]);

    const callApi = async () => {
        const response = await axios({
            method: 'get',
            url: `http://localhost:3030/api/v1/getAllStuff`,
            type: 'json',
        });

        if (response.status === 200) {
            setProductTag(response.data.data);
        }
    };

    useEffect(() => {
        callApi();
    }, []);

    // Sort Product
    const [sort, setSort] = useState();
    const sortProduct = (Data) => {
        if (sort === 'Ascending') {
            return Data.sort((a, b) => {
                if (
                    (a.sale === '0' ? a.price : (a.price * a.sale) / 100) <
                    (b.sale === '0' ? b.price : (b.price * b.sale) / 100)
                ) {
                    return -1;
                }
                if (
                    (a.sale === '0' ? a.price : (a.price * a.sale) / 100) >
                    (b.sale === '0' ? b.price : (b.price * b.sale) / 100)
                ) {
                    return 1;
                }
                return 0;
            });
        }
        if (sort === 'None') {
            sortByName(Data);
            return Data;
        }
        return sortByName(Data);
    };

    function sortByName(arr) {
        return arr.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
    }

    return (
        <div className={cx('wrapper')}>
            <Crumb title="Shop" />
            <div className={cx('content')}>
                <div className={cx('filter')}>
                    <Filter isCategory isPrice isColor isSize isTags />
                </div>

                {productTag && (
                    <div className={cx('right-shop')}>
                        <div className={cx('sort')}>
                            <select className={cx('sorting')} onChange={(e) => setSort(e.target.value)}>
                                <option value="None">Default Sorting</option>
                                <option value="Ascending">Sort by Price</option>
                            </select>
                            <div className={cx('product-quantity')}>
                                <p>
                                    Show {(page - 1) * 9 + 1} -{' '}
                                    {(page - 1) * 9 + productTag.slice(firstIndex, lastIndex).length} Of{' '}
                                    {productTag.length} Product
                                </p>
                            </div>
                        </div>

                        <div className={cx('product')}>
                            {sortProduct(productTag)
                                .slice(firstIndex, lastIndex)
                                .map((d, i) => (
                                    <Product data={d} key={i} />
                                ))}
                        </div>

                        <Pagination
                            totalProduct={productTag.length}
                            productPerPage={9}
                            setPage={setPage}
                            pageIndex={page}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Shop;
