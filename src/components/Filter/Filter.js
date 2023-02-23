import classNames from 'classnames/bind';
import style from './Filter.module.scss';

const cx = classNames.bind(style);

function Filter() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('filter')}>
                <h2 className={cx('filter-type')}>Categories</h2>
                <div className={cx('classify')}>
                    <span>Men</span>
                    <span>Women</span>
                    <span>Kids</span>
                </div>
            </div>
            <div className={cx('filter')}>
                <h2 className={cx('filter-type')}>Brand</h2>
                <form action="/" className={cx('brand-classify')}>
                    <input type="checkbox" id="brand1" value="Calvin Klein" />
                    <label for="brand1">Calvin Klein</label>
                    <br />
                    <input type="checkbox" id="brand2" value="Polo" />
                    <label for="brand2">Polo</label>
                    <br />
                    <input type="checkbox" id="brand3" value="Diesel" />
                    <label for="brand3">Diesel</label>
                    <br />
                </form>
            </div>
            <div className={cx('filter')}>
                <h2 className={cx('filter-type')}>Price</h2>
                <div className={cx('classify')}>
                    <span>0 - 200.000</span>
                    <span>200.001 - 500.000</span>
                    <span>500.001 - 1.000.000</span>
                    <span>{'>'} 1.000.000</span>
                </div>
            </div>
            <div className={cx('filter')}>
                <h2>Color</h2>
                <div className={cx('classify-color')}>
                    <div className={cx('sc-item')}>
                        <input type="radio" id="s-size" />
                        <label for="s-size">Black</label>
                    </div>
                    <div className={cx('sc-item')}>
                        <input type="radio" id="m-size" />
                        <label for="m-size">Red</label>
                    </div>
                    <div className={cx('sc-item')}>
                        <input type="radio" id="l-size" />
                        <label for="l-size">Blue</label>
                    </div>
                    <div className={cx('sc-item')}>
                        <input type="radio" id="xs-size" />
                        <label for="xs-size">White</label>
                    </div>
                </div>
            </div>
            <div className={cx('filter')}>
                <h2 className={cx('filter-type')}>Size</h2>
                <div className={cx('classify-size')}>
                    <div className={cx('sc-item')}>
                        <input type="radio" id="s-size" />
                        <label for="s-size">s</label>
                    </div>
                    <div className={cx('sc-item')}>
                        <input type="radio" id="m-size" />
                        <label for="m-size">m</label>
                    </div>
                    <div className={cx('sc-item')}>
                        <input type="radio" id="l-size" />
                        <label for="l-size">l</label>
                    </div>
                    <div className={cx('sc-item')}>
                        <input type="radio" id="xs-size" />
                        <label for="xs-size">xs</label>
                    </div>
                </div>
            </div>
            <div className={cx('filter')}>
                <h2 className={cx('filter-type')}>Tags</h2>
                <div className={cx('classify-tags')}>
                    <a href="#!">Towel</a>
                    <a href="#!">Shoes</a>
                    <a href="#!">Coat</a>
                    <a href="#!">Dresses</a>
                    <a href="#!">Trousers</a>
                    <a href="#!">Men's hats</a>
                    <a href="#!">Backpack</a>
                </div>
            </div>
        </div>
    );
}

export default Filter;
