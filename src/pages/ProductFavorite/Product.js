import Button from '~/components/Button/Button';
import classNames from 'classnames/bind';
import style from './Product.module.scss';
import img1 from '~/assets/imgs/women-4.jpg';
import heart from '~/assets/icons/heart-red.svg';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function ProductFavorite() {
    return (
        <div className={cx('product-favorite')}>
            <img className={cx('product-favorite__img')} src={img1} alt="" />
            <section className={cx('product-favorite__heading')}>
                <div className={cx('product-favorite__heading-desc')}>
                    <p>Clothing - Men</p>
                    <h4>Mid Century Modern T-Shirt</h4>
                </div>
                <div className={cx('heart')}>
                    <img src={heart} alt="" />
                </div>
            </section>
            <section className={cx('product-favorite__price')}>
                <div>$110</div>
            </section>
            <Button className={cx('product-favorite__button')} to="/cart" title="ADD TO CART" />
        </div>
    );
}

export default ProductFavorite;
