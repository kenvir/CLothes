import React from 'react';
import classNames from 'classnames/bind';
import style from './Product1.module.scss';

import img1 from '~/assets/imgs/women-large.jpg';
import img2 from '~/assets/imgs/women-4.jpg';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { BsClipboard, BsHeart } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function Product(props) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('product')}>
                <div className={cx('product-left')}>
                    <img src={img1} alt="women" />
                    {/* <div className={cx('intro')}> */}
                    <div className={cx('intro')}>Women's</div>
                    <span className={cx('more')}>Discover More</span>
                    {/* </div> */}
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
                                <FontAwesomeIcon className={cx('option-shuffle')} icon={faShuffle} />
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
                                <FontAwesomeIcon className={cx('option-shuffle')} icon={faShuffle} />
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
                            <div className={cx('product-option')}>
                                <BsClipboard className={cx('option-icon')} />
                                <span>+ Quick View</span>
                                <FontAwesomeIcon className={cx('option-shuffle')} icon={faShuffle} />
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
