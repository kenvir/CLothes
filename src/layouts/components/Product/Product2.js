import React from 'react';
import { useState } from 'react';

import classNames from 'classnames/bind';
import style from './Product2.module.scss';

import img1 from '~/assets/imgs/man-large.jpg';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { BsClipboard, BsHeart } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';

import Product from '~/pages/API/Product.json';

const cx = classNames.bind(style);

const listProduct = ['Clothing', 'HandBag', 'Shoes', 'Accessories'];

function Product2(props) {
    const [productActive, setProductActive] = useState(0);

    const [product, setProduct] = useState('Clothing');

    return (
        <div className={cx('wrapper')}>
            <div className={cx('product')}>
                <div className={cx('product-left')}>
                    <img src={img1} alt="man" />
                    {/* <div className={cx('intro')}> */}
                    <div className={cx('intro')}>Man's</div>
                    <span className={cx('more')}>Discover More</span>
                    {/* </div> */}
                </div>
                <div className={cx('product-right')}>
                    <div className={cx('right-option')}>
                        {listProduct.map((d, i) => (
                            <span
                                className={cx('btn', productActive === i ? 'active' : null)}
                                onClick={() => {
                                    setProductActive(i);
                                    setProduct(d);
                                }}
                                key={i}
                            >
                                {d}{' '}
                            </span>
                        ))}
                    </div>
                    <div className={cx('right-content')}>
                        <SlArrowLeft className={cx('back')} />
                        {Product.filter((t) => t.type === product).map((d, i) => (
                            <div className={cx('product-item')} key={i}>
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
                                        <span className={cx('price-sale')}>
                                            {d.sale === 0 ? d.price : (d.price * d.sale) / 100}
                                        </span>
                                        <span>{d.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <SlArrowRight />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product2;
