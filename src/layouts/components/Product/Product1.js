import React from 'react';
import { useState } from 'react';

import classNames from 'classnames/bind';
import style from './Product1.module.scss';

import img1 from '~/assets/imgs/women-large.jpg';

import SliderProduct from '~/layouts/components/Product/SliderProduct/SliderProduct';

const cx = classNames.bind(style);

const listProduct = ['Clothing', 'HandBag', 'Shoes', 'Accessories'];

function Product1(props) {
    const [productActive, setProductActive] = useState(0);

    const [, setProduct] = useState('Clothing');

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
                        <SliderProduct></SliderProduct>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product1;
