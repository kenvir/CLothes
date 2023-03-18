import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import classNames from 'classnames/bind';
import style from './ProductDetail.module.scss';
import Crumb from '~/components/Crumb/Crumb';
import axios from 'axios';
import { Link } from 'react-router-dom';

import img1 from '~/assets/imgs/women-4.jpg';
import img from '~/assets/imgs/product.jpg';

import { AiFillStar, AiOutlineQuestionCircle, AiOutlineFileProtect } from 'react-icons/ai';
import { FaShippingFast } from 'react-icons/fa';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { TbArrowBackUp } from 'react-icons/tb';

const cx = classNames.bind(style);

function ProductDetail() {
    const param = useParams();

    const [productDetail, setProductDetail] = useState([]);

    const callApi = async () => {
        const response = await axios({
            method: 'get',
            url: `http://localhost:3030/api/v1/getAllStuff`,
            type: 'json',
        });

        if (response.status === 200) {
            setProductDetail(response.data.data.find((d) => d.id === parseInt(param.id)));
        }
    };

    useEffect(() => {
        callApi();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <Crumb title="Shop | Hand Bag" />
            {productDetail && (
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
                                <span>{productDetail.name}</span>
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
                                    <span>{parseFloat(productDetail.price)} đ</span>
                                </div>
                                <div className={cx('cost-sale')}>
                                    <span>
                                        {parseFloat(productDetail.sale) === 0
                                            ? parseFloat(productDetail.price)
                                            : (parseFloat(productDetail.price) * parseFloat(productDetail.sale)) /
                                              100}{' '}
                                        đ
                                    </span>
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
                                    <Link to='/checkout'>Buy Now</Link>
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
                                <div className="detail-info">{productDetail.type}</div>
                            </div>
                            <div className={cx('product-detail')}>
                                <label htmlFor="" className={cx('detail-title')}>
                                    Name
                                </label>
                                <div className="detail-info">{productDetail.name}</div>
                            </div>
                            <div className={cx('product-detail')}>
                                <label htmlFor="" className={cx('detail-title')}>
                                    Brand
                                </label>
                                <div className="detail-info">{productDetail.brand}</div>
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
                                <div className="detail-info">{productDetail.size}</div>
                            </div>
                            <div className={cx('product-detail')}>
                                <label htmlFor="" className={cx('detail-title')}>
                                    Color
                                </label>
                                <div className="detail-info">{productDetail.color}</div>
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
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductDetail;
