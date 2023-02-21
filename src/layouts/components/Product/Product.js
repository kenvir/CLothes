import React from 'react';
import classNames from 'classnames/bind';
import style from './Product.module.scss';

import img1 from '~/assets/imgs/women-large.jpg.webp';
import img2 from '~/assets/imgs/women-4.jpg.webp';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { BsClipboard, BsHeart } from 'react-icons/bs';
import { FaRandom } from 'react-icons/fa';

const cx = classNames.bind(style);

function Product(children) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('product')}>
                <div className={cx('product-left')}>
                    <img src={img1} alt="women" />
                    <div className={cx('intro')}>
                        <h1>Women's</h1>
                        <span>Discover More</span>
                    </div>
                </div>
                <div className={cx('product-right')}>
                    <div className={cx('right-option')}>
                        <span>Clothings</span>
                        <span>HandBag</span>
                        <span>Shoes</span>
                        <span>Accessories</span>
                    </div>
                    <div className={cx('right-content')}>
                        <SlArrowLeft className={cx('back')} />
                        <div className={cx('product-item')}>
                            <div className={cx('product-img')}>
                                <img src={img2} alt="women" />
                            </div>
                            <BsHeart className={cx('product-favorite')} />
                            <div className={cx('product-sale')}>SALE</div>
                            <div className={cx('product-option')}>
                                <BsClipboard className={cx('option-icon')} />
                                <span>+ Quick View</span>
                                <FaRandom />
                            </div>
                            <div className={cx('product-text')}>
                                <span className={cx('product-type')}>TOWEL</span>
                                <span className={cx('product-name')}>Converse Shoes</span>
                                <div className={cx('product-price')}>
                                    $20
                                    <span>$14</span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('product-item')}>
                            <div className={cx('product-img')}>
                                <img src={img2} alt="women" />
                            </div>
                            <BsHeart className={cx('product-favorite')} />
                            <div className={cx('product-sale')}>SALE</div>
                            <div className={cx('product-option')}>
                                <BsClipboard className={cx('option-icon')} />
                                <span>+ Quick View</span>
                                <FaRandom />
                            </div>
                            <div className={cx('product-text')}>
                                <span className={cx('product-type')}>TOWEL</span>
                                <span className={cx('product-name')}>Converse Shoes</span>
                                <div className={cx('product-price')}>
                                    $20
                                    <span>$14</span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('product-item')}>
                            <div className={cx('product-img')}>
                                <img src={img2} alt="women" />
                            </div>
                            <BsHeart className={cx('product-favorite')}/>
                            <div className={cx('product-option')}>
                                <BsClipboard className={cx('option-icon')} />
                                <span>+ Quick View</span>
                                <FaRandom />
                            </div>
                            <div className={cx('product-text')}>
                                <span className={cx('product-type')}>TOWEL</span>
                                <span className={cx('product-name')}>Converse Shoes</span>
                                <div className={cx('product-price')}>$20</div>
                            </div>
                        </div>
                        <SlArrowRight />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
