import classNames from 'classnames/bind';
import style from './ProductItem.module.scss';

import img1 from '~/assets/imgs/women-4.jpg';

const cx = classNames.bind(style);

function ProductItem({ data }) {
    return (
        <div className={cx('result')}>
            <p className={cx('title')}>Product result</p>
            {data.map((d, i) => (
                <div className={cx('search-result')}>
                    <img src={img1} alt="" />
                    <div className={cx('product')}>
                        <span className={cx('product-title')}>{d.name}</span>
                        <p>{d.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductItem;
