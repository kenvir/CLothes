import React from 'react';

import classNames from 'classnames/bind';
import style from './ProductDetail.module.scss';
import Crumb from '~/components/Crumb/Crumb';

import img1 from '~/assets/imgs/women-4.jpg';

import { AiFillStar, AiOutlineQuestionCircle, AiOutlineFileProtect } from 'react-icons/ai';
import { FaShippingFast } from 'react-icons/fa';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { TbArrowBackUp } from 'react-icons/tb';

const cx = classNames.bind(style);

function ProductDetail() {
    return (
        <div className={cx('wrapper')}>
            <Crumb title="Shop | Hand Bag" />

            <div className={cx('container')}>
                <div className={cx('header')}>
                    <div className={cx('left-header')}>
                        <div className={cx('imgs')}>
                            <div className={cx('img-main')}>
                                <img src={img1} alt="img-main" />
                            </div>
                            <div className={cx('img-extra')}>
                                <img src={img1} alt="img-extra" />
                                <img src={img1} alt="img-extra" />
                                <img src={img1} alt="img-extra" />
                                <img src={img1} alt="img-extra" />
                                <img src={img1} alt="img-extra" />
                            </div>
                        </div>
                    </div>
                    <div className={cx('right-header')}>
                        <div className={cx('product-name')}>
                            <span>Hand Bag </span>
                        </div>
                        <div className={cx('product-info')}>
                            <div className={cx('product-star')}>
                                <span>4.9</span>
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                            <span className={cx('line')}>|</span>
                            <div className={cx('product-rate')}>
                                <span>696</span>
                                <span>Ratings</span>
                            </div>
                            <span className={cx('line')}>|</span>
                            <div className={cx('product-sold')}>
                                <span>1k</span>
                                <span>
                                    Sold
                                    <AiOutlineQuestionCircle />
                                </span>
                            </div>
                        </div>
                        <div className={cx('product-price')}>
                            <div className={cx('cost')}>
                                <span>450.000 đ</span>
                            </div>
                            <div className={cx('cost-sale')}>
                                <span>400.000 đ</span>
                            </div>
                        </div>
                        <div className={cx('product-ship')}>
                            <div className={cx('ship-title')}>
                                <span>Shipping</span>
                            </div>
                            <div className={cx('ship-info')}>
                                <FaShippingFast />
                                <span>Free Shipping</span>
                            </div>
                        </div>
                        <div className={cx('product-quantity')}>
                            <div className={cx('quantity-title')}>
                                <span>Quantity</span>
                            </div>
                            <div className={cx('quantity')}>
                                <div className={cx('pro-qty')}>
                                    <span className={cx('qtybtn')}>-</span>
                                    <input type="text" defaultValue="1" />
                                    <span className={cx('qtybtn', 'inc')}>+</span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('purchase')}>
                            <div className={cx('add')}>
                                <BsFillCartPlusFill />
                                <span>Add To Cart</span>
                            </div>
                            <div className={cx('buy')}>
                                <span>Buy Now</span>
                            </div>
                        </div>
                        <div className={cx('faq')}>
                            <div className={cx('return')}>
                                <TbArrowBackUp />
                                <span>15 Days Return</span>
                            </div>
                            <div className={cx('authentic')}>
                                <AiOutlineFileProtect />
                                <span>100% Authentic</span>
                            </div>
                            <div className={cx('shipping')}>
                                <FaShippingFast />
                                <span>Free Shipping</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('detail')}>
                    <h4>Product Specifications</h4>
                    <div className={cx('product-details')}>
                        <div className={cx('product-detail')}>
                            <label htmlFor="" className={cx('detail-title')}>
                                Category
                            </label>
                            <div className="detail-info">Hand Bag</div>
                        </div>
                        <div className={cx('product-detail')}>
                            <label htmlFor="" className={cx('detail-title')}>
                                Brand
                            </label>
                            <div className="detail-info">Helmet</div>
                        </div>
                        <div className={cx('product-detail')}>
                            <label htmlFor="" className={cx('detail-title')}>
                                Type
                            </label>
                            <div className="detail-info">Crossbody</div>
                        </div>
                        <div className={cx('product-detail')}>
                            <label htmlFor="" className={cx('detail-title')}>
                                Manufacturer
                            </label>
                            <div className="detail-info">Helmet</div>
                        </div>
                        <div className={cx('product-detail')}>
                            <label htmlFor="" className={cx('detail-title')}>
                                Size
                            </label>
                            <div className="detail-info">23</div>
                        </div>
                        <div className={cx('product-detail')}>
                            <label htmlFor="" className={cx('detail-title')}>
                                Material
                            </label>
                            <div className="detail-info">Fabric</div>
                        </div>
                    </div>
                </div>
                <div className={cx('describe')}>
                    <h4>Product Description</h4>
                    <span className={cx('des-name')}>HandBag</span>
                    <p>
                        {'- '}Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque porro neque eligendi.
                        Est quas facere, quasi eaque atque minus a?
                    </p>
                    <p>
                        {'- '}Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque porro neque eligendi.
                        Est quas facere, quasi eaque atque minus a?
                    </p>
                    <p>
                        {'- '}Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque porro neque eligendi.
                        Est quas facere, quasi eaque atque minus a?
                    </p>
                    <p>
                        {'- '}Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque porro neque eligendi.
                        Est quas facere, quasi eaque atque minus a?
                    </p>
                    <p>
                        {'- '}Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque porro neque eligendi.
                        Est quas facere, quasi eaque atque minus a?
                    </p>
                </div>
                <div className={cx('appraise')}></div>
                <div className={cx('more')}>
                    <h4>From The Same Brand</h4>
                    <div className={cx('product-mores')}>
                        <div className={cx('product-more')}>
                            <div className={cx('img')}>
                                <img src={img1} alt="product" />
                            </div>
                            <div className={cx('content')}>
                                <span className={cx('content-name')}>HandBag</span>
                                <span className={cx('content-price')}>300.000đ</span>
                            </div>
                        </div>
                        <div className={cx('product-more')}>
                            <div className={cx('img')}>
                                <img src={img1} alt="product" />
                            </div>
                            <div className={cx('content')}>
                                <span className={cx('content-name')}>HandBag</span>
                                <span className={cx('content-price')}>300.000đ</span>
                            </div>
                        </div>
                        <div className={cx('product-more')}>
                            <div className={cx('img')}>
                                <img src={img1} alt="product" />
                            </div>
                            <div className={cx('content')}>
                                <span className={cx('content-name')}>HandBag</span>
                                <span className={cx('content-price')}>300.000đ</span>
                            </div>
                        </div>
                        <div className={cx('product-more')}>
                            <div className={cx('img')}>
                                <img src={img1} alt="product" />
                            </div>
                            <div className={cx('content')}>
                                <span className={cx('content-name')}>HandBag</span>
                                <span className={cx('content-price')}>300.000đ</span>
                            </div>
                        </div>
                        <div className={cx('product-more')}>
                            <div className={cx('img')}>
                                <img src={img1} alt="product" />
                            </div>
                            <div className={cx('content')}>
                                <span className={cx('content-name')}>HandBag</span>
                                <span className={cx('content-price')}>300.000đ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
