import classNames from 'classnames/bind';
import style from './ProductItem.module.scss';

import img1 from '~/assets/imgs/women-4.jpg';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function ProductItem({ data = [] }) {
    console.log(typeof data);

    return (
        <div className={cx('result')}>
            <p className={cx('title')}>Product result</p>

            <Link to={`/productDetail/${data.id}`}>
                <div className={cx('search-result')} key={data.id}>
                    <img src={img1} alt="" />
                    <div className={cx('product')}>
                        <span className={cx('product-title')}>{data.name}</span>
                        <p>{data.price}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ProductItem;
