import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from './Shop.module.scss';

import Filter from '~/components/Filter/Filter';
import Product from '~/layouts/components/Product/Product';
import Crumb from '~/components/Crumb/Crumb';
import { Pagination } from 'swiper';
import axios from 'axios';
import qs from 'qs';

import product from '~/pages/API/Product.json';

const cx = classNames.bind(style);

function Shop({ d }) {
    const [sort, setSort] = useState();
    const [page, setPage] = useState(1);
    const [productTag, setProductTag] = useState();

    const callApi = async () => {
        const response = await axios({
            method: 'post',
            url: `http://localhost:3030/api/v1/getAllStuff`,
            type: 'json',
        });

        if (response.status === 200) {
            setProductTag(response.data);
            console.log(response);
        }
    };

    useEffect(() => {
        callApi();
    }, []);

    const sortProduct = (Data) => {
        if (sort === 'Ascending') {
            return Data.sort((a, b) => {
                if (
                    (a.props.data.sale === 0 ? a.props.data.price : (a.props.data.price * a.props.data.sale) / 100) <
                    (b.props.data.sale === 0 ? b.props.data.price : (b.props.data.price * b.props.data.sale) / 100)
                ) {
                    return -1;
                }
                if (
                    (a.props.data.sale === 0 ? a.props.data.price : (a.props.data.price * a.props.data.sale) / 100) >
                    (b.props.data.sale === 0 ? b.props.data.price : (b.props.data.price * b.props.data.sale) / 100)
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
        return arr.sort(function (a, b) {
            if (a.props.data.name < b.props.data.name) {
                return -1;
            }
            if (a.props.data.name > b.props.data.name) {
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
                <div className={cx('right-shop')}>
                    <div className={cx('short')}>
                        <div className={cx('short')}>
                            <select className={cx('shorting')} onChange={(e) => setSort(e.target.value)}>
                                <option value="None">Default Sorting</option>
                                <option value="Ascending">Short by Price</option>
                            </select>
                            <div className={cx('product-quantity')}>
                                <p>
                                    Show {(page - 1) * 9 + 1} - {(page - 1) * 9 + product.length} Of {product.length}{' '}
                                    Product
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={cx('product-tags')}>
                        {sortProduct(product.map((d, i) => <Product data={d} key={i} />))}
                    </div>

                    {/* <Pagination totalProduct={product.length} productPerPage={9} setPage={setPage} pageIndex={page} /> */}
                </div>
            </div>
        </div>
    );
}

export default Shop;
