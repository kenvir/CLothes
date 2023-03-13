import React from 'react';
import classNames from 'classnames/bind';
import style from './Product.module.scss';

import { BsClipboard, BsHeart } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import product from '~/pages/API/Product.json';

const cx = classNames.bind(style);

function Product() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('short')}>
                <div className={cx('short')}>
                    <select className={cx('shorting')}>
                        <option value="">Default Sorting</option>
                        <option value="">Short by A - Z</option>
                        <option value="">Short by Price</option>
                    </select>
                    <div className={cx('product-quantity')}>
                        <p>Show 01- 09 Of 36 Product</p>
                    </div>
                </div>
            </div>
            <div className={cx('contents')}>
                {product.map((d, item) => (
                    <div className={cx('content')} key={d.id} data={d}>
                        <Link to={`/productDetail/${d.id}`} className={cx('product-card')}>
                            <div className={cx('product-item')}>
                                <div className={cx('product-img')}>
                                    <img src={d.img} alt="women" />
                                    <BsHeart className={cx('product-favorite')} />
                                    <div className={cx('product-sale')}>SALE</div>
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
                                        {(d.price * parseFloat(d.sale)) / 100}
                                        <span>{d.price}</span>
                                    </div>
                                </div>
                            </div>
                            {console.log(d.description)}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;
