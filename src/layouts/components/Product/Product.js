import React, { useState } from 'react';
import classNames from 'classnames/bind';
import style from './Product.module.scss';

import { BsClipboard, BsHeart } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import product from '~/pages/API/Product.json';

const cx = classNames.bind(style);

function Product() {
    const [sort, setSort] = useState();
    const [page, setPage] = useState(1);

    const sortProduct = (Data) => {
        if (sort === 'Ascending') {
            return Data.sort((a, b) => {
                if (
                    (a.sale === 0 ? a.price : (a.price * a.sale) / 100) <
                    (b.sale === 0 ? b.price : (b.price * b.sale) / 100)
                ) {
                    return -1;
                }
                if (
                    (a.sale === 0 ? a.price : (a.price * a.sale) / 100) >
                    (b.sale === 0 ? b.price : (b.price * b.sale) / 100)
                ) {
                    return 1;
                }
                return 0;
            });
        }

        console.log(Data);

        if (sort === 'None') {
            sortByName(Data);
            return Data;
        }

        return sortByName(Data);
    };

    function sortByName(arr) {
        return arr.sort(function (a, b) {
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
            <div className={cx('short')}>
                <div className={cx('short')}>
                    <select className={cx('shorting')} onChange={(e) => setSort(e.target.value)}>
                        <option value="None">Default Sorting</option>
                        {/* <option value="Name">Short by A - Z</option> */}
                        <option value="Ascending">Short by Price</option>
                    </select>
                    <div className={cx('product-quantity')}>
                        <p>
                            Show {(page - 1) * 9 + 1} - {(page - 1) * 9 + product.length} Of {product.length} Product
                        </p>
                    </div>
                </div>
            </div>
            <div className={cx('contents')}>
                {sortProduct(product).map((d, i) => (
                    <div className={cx('content')} key={i} data={d}>
                        <Link to={`/productDetail/${d.id}`} className={cx('product-card')}>
                            <div className={cx('product-item')}>
                                <div className={cx('product-img')}>
                                    <img src={d.img} alt="women" />
                                    <BsHeart className={cx('product-favorite')} />
                                    {d.sale && d.sale !== 0 && d.sale !== 'null' && (
                                        <div className={cx('product-sale')}>SALE</div>
                                    )}
                                    <div className={cx('product-option')}>
                                        <div className={cx('product-option-inner')}>
                                            <div className={cx('option-icon-wrapper')}>
                                                <BsClipboard className={cx('option-icon')} />
                                            </div>
                                            <div className={cx('option-content')}>
                                                <span>+ Quick View</span>
                                            </div>
                                            <div className={cx('option-shuffle-wrapper')}>
                                                <FontAwesomeIcon className={cx('option-shuffle')} icon={faShuffle} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('product-text')}>
                                    <span className={cx('product-type')}>{d.type}</span>
                                    <span className={cx('product-name')}>{d.name}</span>
                                    <div className={cx('product-price')}>
                                        {d.sale === 0 ? d.price : (d.price * d.sale) / 100}
                                        <span>{d.price}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;
