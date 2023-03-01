import classNames from 'classnames/bind';
import style from './Filter.module.scss';
import { IoSearch } from 'react-icons/io5';
import img1 from '~/assets/imgs/recent-1.jpg';

const cx = classNames.bind(style);

function Filter({ isSearch, isRecent, isCategory, isBrand, isPrice, isColor, isSize, isTags }) {
    return (
        <div className={cx('wrapper')}>
            {isSearch ? (
                <div className={cx('filter')}>
                    <h2 className={cx('filter-type')}>Search</h2>
                    <div className={cx('search')}>
                        <input
                            type="text"
                            className={cx('inputSearch')}
                            placeholder="Search ..."
                            // onChange={(e) => setinput(e.target.value)}
                        />
                        <IoSearch className={cx('icon-search')} />
                    </div>
                </div>
            ) : null}
            {isRecent ? (
                <div className={cx('filter')}>
                    <h2 className={cx('filter-type')}>Recent Post</h2>
                    <div className={cx('recent')}>
                        <div className={cx('img')}>
                            <img src={img1} alt="" />
                        </div>
                        <div className={cx('highlights')}>
                            <p className={cx('title')}>
                                The Personality Trait That Makes The Personality Trait That Makes
                            </p>
                            <div className={cx('time')}>
                                <span>FASHION</span>
                                <p>&nbsp;- May 19, 2019</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
            {isCategory ? (
                <div className={cx('filter')}>
                    <h2 className={cx('filter-type')}>Categories</h2>
                    <div className={cx('classify')}>
                        <span>Men</span>
                        <span>Women</span>
                        <span>Kids</span>
                    </div>
                </div>
            ) : null}
            {isBrand ? (
                <div className={cx('filter')}>
                    <h2 className={cx('filter-type')}>Brand</h2>
                    <form action="/" className={cx('brand-classify')}>
                        <input type="checkbox" id="brand1" value="Calvin Klein" />
                        <label htmlFor="brand1">Calvin Klein</label>
                        <br />
                        <input type="checkbox" id="brand2" value="Polo" />
                        <label htmlFor="brand2">Polo</label>
                        <br />
                        <input type="checkbox" id="brand3" value="Diesel" />
                        <label htmlFor="brand3">Diesel</label>
                        <br />
                    </form>
                </div>
            ) : null}
            {isPrice ? (
                <div className={cx('filter')}>
                    <h2 className={cx('filter-type')}>Price</h2>
                    <div className={cx('classify')}>
                        <span>0 - 200.000</span>
                        <span>200.001 - 500.000</span>
                        <span>500.001 - 1.000.000</span>
                        <span>{'>'} 1.000.000</span>
                    </div>
                </div>
            ) : null}
            {isColor ? (
                <div className={cx('filter')}>
                    <h2>Color</h2>
                    <div className={cx('classify-color')}>
                        <div className={cx('sc-item')}>
                            <input type="radio" id="s-size" />
                            <label htmlFor="s-size">Black</label>
                        </div>
                        <div className={cx('sc-item')}>
                            <input type="radio" id="m-size" />
                            <label htmlFor="m-size">Red</label>
                        </div>
                        <div className={cx('sc-item')}>
                            <input type="radio" id="l-size" />
                            <label htmlFor="l-size">Blue</label>
                        </div>
                        <div className={cx('sc-item')}>
                            <input type="radio" id="xs-size" />
                            <label htmlFor="xs-size">White</label>
                        </div>
                    </div>
                </div>
            ) : null}
            {isSize ? (
                <div className={cx('filter')}>
                    <h2 className={cx('filter-type')}>Size</h2>
                    <div className={cx('classify-size')}>
                        <div className={cx('sc-item')}>
                            <input type="radio" id="s-size" />
                            <label htmlFor="s-size">s</label>
                        </div>
                        <div className={cx('sc-item')}>
                            <input type="radio" id="m-size" />
                            <label htmlFor="m-size">m</label>
                        </div>
                        <div className={cx('sc-item')}>
                            <input type="radio" id="l-size" />
                            <label htmlFor="l-size">l</label>
                        </div>
                        <div className={cx('sc-item')}>
                            <input type="radio" id="xs-size" />
                            <label htmlFor="xs-size">xs</label>
                        </div>
                    </div>
                </div>
            ) : null}
            {isTags ? (
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
            ) : null}
        </div>
    );
}

export default Filter;
