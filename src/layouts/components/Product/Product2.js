import React from 'react';
import { useState } from 'react';

import classNames from 'classnames/bind';
import style from './Product2.module.scss';

import img1 from '~/assets/imgs/man-large.jpg';

import SliderProduct from '~/layouts/components/Product/SliderProduct/SliderProduct';

import Product from '~/pages/API/Product.json';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';

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
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            navigation={true}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{ delay: 5000, disableOnInteraction: true }}
                            modules={[Navigation, Autoplay]}
                            className="mySwiper"
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                600: {
                                    slidesPerView: 2,
                                },
                                865: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {Product.filter((t) => t.type === product).map((d, i) => (
                                <SwiperSlide key={i}>
                                    <SliderProduct data={d} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product2;
