import Crumb from '~/components/Crumb/Crumb';
import ProductFavorite from '../ProductFavorite/Product';
import Button from '~/components/Button/Button';
import classNames from 'classnames/bind';
import style from './Favorite.module.scss';

const cx = classNames.bind(style);

function Favorite() {
    return (
        <div className={cx('wrapper')}>
            <Crumb title="Favorite" />
            <section className={cx('favorite-heading')}>
                <div className={cx('heading-left')}>
                    <h2 className={cx('title')}>Wish List</h2>
                    <p className={cx('desc')}>3 items in your wish list</p>
                </div>
                <div className={cx('heading-right')}>
                    <h3 className={cx('right-title')}>$300</h3>
                    <p className={cx('desc')}>Estimated total</p>
                    <Button className={cx('button')} to="/cart" title="ADD ALL TO CART"></Button>
                </div>
            </section>
            <section className={cx('favorite-product')}>
                <ProductFavorite />
                <ProductFavorite />
                <ProductFavorite />
            </section>
        </div>
    );
}

export default Favorite;
