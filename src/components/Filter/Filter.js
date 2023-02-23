import classNames from 'classnames/bind';
import style from './Filter.module.scss';

const cx = classNames.bind(style);

function Filter() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('categories')}>
                <h2>Categories</h2>
                <div>
                    <span>Men</span>
                    <span>Women</span>
                    <span>Kids</span>
                </div>
            </div>
            <div className={cx('brand')}>
                {' '}
                <span>Men</span>
                <span>Women</span>
                <span>Kids</span>
            </div>
            <div className={cx('price')}></div>
            <div className={cx('color')}></div>
            <div className={cx('size')}></div>
            <div className={cx('tags')}></div>
        </div>
    );
}

export default Filter;
