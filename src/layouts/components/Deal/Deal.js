import classNames from 'classnames/bind';
import style from './Deal.module.scss';

import img1 from '~/assets/imgs/time-bg.jpg';
import CountdownTimer from '~/components/SaleTimer/SaleTimer';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(style);

function Deal() {
    const saleEndTime = '2024-07-31T23:59:59';
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const callAPI = async () => {
            const response = await axios({
                method: 'get',
                url: `https://6556cd15bd4bcef8b611a0fc.mockapi.io/api/clothes/clothes`,
                type: 'json',
            });

            if (response.status === 200) {
                setProduct(response.data.reduce((max, d) => (d.sale > max.sale ? d : max), response.data[0]));
            }
            console.log(response.data);
            console.log(product);
        };

        callAPI();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('deal')}>
                <img className={cx('image-wrapper')} src={img1} alt="bg-deal" />
                <div className={cx('content')}>
                    <h1 className={cx('content-title')}>Deal Of The Week</h1>
                    <p className={cx('content-intro')}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ipsum dolor sit amet,
                        consectetur adipisicing elit
                    </p>
                    <span className={cx('content-price')}>
                        {product.price} / <p className={cx('content-product')}>&nbsp;{product.name}</p>
                    </span>
                    <CountdownTimer saleEndTime={saleEndTime} />
                    <Link to="/shop" className={cx('content-btn')}>
                        SHOP NOW
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Deal;
