import Button from '~/components/Button/Button';
import classNames from 'classnames/bind';
import style from './Product.module.scss';
import img1 from '~/assets/imgs/women-4.jpg';

const cx = classNames.bind(style);

function ProductFavourite() {
    return (
        <div className={cx('product-favourite')}>
            <img className={cx('product-favourite__img')} src={img1} alt="" />
            <section className={cx('product-favourite__heading')}>
                <div className={cx('product-favourite__heading-desc')}>
                    <p>Clothing - Men</p>
                    <h4>Mid Century Modern T-Shirt</h4>
                </div>
                <div>

                </div>
            </section>
            <section className={cx('product-favourite__price')}>
                <div>$110</div>
            </section>
            <Button className={cx('product-favourite__button')} title="ADD TO CART" />
        </div>
    );
}

export default ProductFavourite;
