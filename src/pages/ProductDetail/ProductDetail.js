import React from 'react';

import classNames from 'classnames/bind';
import style from './ProductDetail.module.scss';
import Crumb from '~/components/Crumb/Crumb';

import img1 from '~/assets/imgs/women-4.jpg';
import img from '~/assets/imgs/product.jpg';

import { AiFillStar, AiOutlineQuestionCircle, AiOutlineFileProtect } from 'react-icons/ai';
import { FaShippingFast } from 'react-icons/fa';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { TbArrowBackUp } from 'react-icons/tb';

import { useLocation } from 'react-router-dom';

const cx = classNames.bind(style);

function ProductDetail({ data }) {
    const search = useLocation().search;
    const id = new URLSearchParams(search).get('id');

    console.log(data);
    console.log(id);

    return (
        <div className={cx('wrapper')}>
            <Crumb title="Shop | Hand Bag" />

            {data && (
                <div className={cx('container')}>
                    <div className={cx('header')}>
                        <div className={cx('left-header')}>
                            <div className={cx('imgs')}>
                                <div className={cx('img-main')}>
                                    <img src={img} alt="img-main" />
                                </div>
                                <div className={cx('img-extra')}>
                                    <img src={img} alt="img-extra" />
                                    <img src={img} alt="img-extra" />
                                    <img src={img} alt="img-extra" />
                                    <img src={img} alt="img-extra" />
                                    <img src={img} alt="img-extra" />
                                </div>
                            </div>
                        </div>
                        <div className={cx('right-header')}>
                            <div className={cx('product-name')}>
                                <span>{data.name}</span>
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
                                    <span>{data.price} đ</span>
                                </div>
                                <div className={cx('cost-sale')}>
                                    <span>{(data.price * parseFloat(data.sale)) / 100} đ</span>
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
                                        <input
                                            type="text"
                                            defaultValue="1"
                                            onChange={(e) => {
                                                e.target.value(e);
                                            }}
                                        />
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
                                <div className="detail-info">{data.type}</div>
                            </div>
                            <div className={cx('product-detail')}>
                                <label htmlFor="" className={cx('detail-title')}>
                                    Name
                                </label>
                                <div className="detail-info">{data.name}</div>
                            </div>
                            <div className={cx('product-detail')}>
                                <label htmlFor="" className={cx('detail-title')}>
                                    Brand
                                </label>
                                <div className="detail-info">{data.brand}</div>
                            </div>
                            <div className={cx('product-detail')}>
                                <label htmlFor="" className={cx('detail-title')}>
                                    Manufacturer
                                </label>
                                <div className="detail-info">China</div>
                            </div>
                            <div className={cx('product-detail')}>
                                <label htmlFor="" className={cx('detail-title')}>
                                    Size
                                </label>
                                <div className="detail-info">{data.size}</div>
                            </div>
                            <div className={cx('product-detail')}>
                                <label htmlFor="" className={cx('detail-title')}>
                                    Color
                                </label>
                                <div className="detail-info">{data.color}</div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('describe')}>
                        <h4>Product Description</h4>
                        <span className={cx('des-name')}>T-Shirt</span>
                        <p>
                            {'- '}Quá đep luôn nạ Áo xinh về khách khen lắm luôn HÀNG VỀ SIU XINH, E GOM TÍP Về tay chỉ
                            #190k/ 1c thuii , chất cotton.
                        </p>
                        <p>
                            {'- '}Mẫu này ce nhất định phải sắm nhó , màu xinh cực Size full : S đến 3 XL , thích rộng
                            nhiều tăng size giúp e ah BẢNG SIZE CHO MN THAM KHẢO : Size S - 3XL size S: 40kg - 52kg size
                            M: 53 - 59kg size L: 60 - 66kg size XL: 67 - 73kg size 2XL: 74 - 80kg size 3XL: 81 - 86kg.
                        </p>
                        <p>{'- '}Hàng về sau khoảng 2 weeks.</p>
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
                            {/* <div className={cx('product-more')}>
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
                            </div> */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductDetail;
