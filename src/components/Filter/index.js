import classNames from 'classnames/bind';
import style from './Filter.module.scss';
import { IoSearch } from 'react-icons/io5';
import { VscDebugRestart } from 'react-icons/vsc';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import blog from '~/pages/API/Blog.json';

const cx = classNames.bind(style);

const listCategory = ['Men', 'Women', 'Kid'];
const listPrice = ['0 - 200.000', '200.001 - 500.000', '500.001 - 1.000.000', '> 1.000.000'];
const listColor = ['Black', 'White', 'Blue', 'Red', 'Beige'];
const listSize = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
const listTag = ['Clothing', 'HandBag', 'Skirt', 'Shoes', 'Accessories'];

function Filter({ isSearch, isRecent, isCategory, isPrice, isColor, isSize, isTags, setCategories }) {
    const [activeCategory, setActiveCategory] = useState();
    const [category, setCategory] = useState('');
    const [activePrice, setActivePrice] = useState();
    const [activeColor, setActiveColor] = useState();
    const [activeSize, setActiveSize] = useState();
    const [activeTag, setActiveTag] = useState();

    const handleActiveCategory = (index) => {
        // category ? setActiveCategory(index) : setActiveCategory();
        // activeCategory ? setActiveCategory() : setActiveCategory(index);
        setActiveCategory(index);

        console.log('activeCategory', activeCategory);
        console.log('category', category);
    };

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
                            // onChange={(e) => setInput(e.target.value)}
                        />
                        <IoSearch className={cx('icon-search')} />
                    </div>
                </div>
            ) : null}
            {isRecent ? (
                <div className={cx('filter')}>
                    <h2 className={cx('filter-type')}>Recent Post</h2>
                    <Link to={`/blogDetail/${blog[0].id}`} className={cx('recent')}>
                        <div className={cx('img')}>
                            <img src={`${window.location.origin}/${blog[0].img}`} alt="" />
                        </div>
                        <div className={cx('highlights')}>
                            <p className={cx('title')}>{blog[0].title}</p>
                            <div className={cx('time')}>
                                <span>FASHION</span>
                                <p>&nbsp;- {blog[0].date}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            ) : null}
            {isCategory ? (
                <div className={cx('filter')}>
                    <div className={cx('filter-header')}>
                        <h2 className={cx('filter-type')}>Categories</h2>
                        <VscDebugRestart
                            onClick={() => {
                                setActiveCategory('');
                                // setCategories('');
                            }}
                        />
                    </div>
                    <div className={cx('classify')}>
                        {listCategory.map((d, i) => (
                            <span
                                className={cx(
                                    'btn',
                                    activeCategory !== undefined && activeCategory === i ? 'active' : '',
                                )}
                                onClick={() => {
                                    // check element active -> null va nguoc lai
                                    activeCategory === i ? setActiveCategory(null) : setActiveCategory(i);
                                    // handleActiveCategory(i);
                                    setCategory(d);
                                    console.log('activeCategory', activeCategory);
                                    console.log('i', i);
                                    console.log(activeCategory !== undefined);
                                    console.log('bool', activeCategory === i);
                                    console.log('------');
                                }}
                                key={i}
                            >
                                {d}{' '}
                            </span>
                        ))}
                    </div>
                </div>
            ) : null}
            {isPrice ? (
                <div className={cx('filter')}>
                    <div className={cx('filter-header')}>
                        <h2 className={cx('filter-type')}>Price</h2>
                        <VscDebugRestart
                            onClick={() => {
                                setActivePrice(-1);
                            }}
                        />
                    </div>
                    <div className={cx('classify')}>
                        {listPrice.map((d, i) => (
                            <span
                                className={cx('btn', activePrice !== undefined && activePrice === i ? 'active' : null)}
                                onClick={() => {
                                    activePrice === i ? setActivePrice(null) : setActivePrice(i);
                                    // handleActivePrice(i);
                                }}
                                key={i}
                            >
                                {d}{' '}
                            </span>
                        ))}
                    </div>
                </div>
            ) : null}
            {isColor ? (
                <div className={cx('filter')}>
                    <div className={cx('filter-header')}>
                        <h2>Color</h2>
                        <VscDebugRestart
                            onClick={() => {
                                setActiveColor(-1);
                            }}
                        />
                    </div>
                    <div className={cx('classify')}>
                        {listColor.map((d, i) => (
                            <span
                                className={cx('btn', activeColor !== undefined && activeColor === i ? 'active' : null)}
                                onClick={() => {
                                    activeColor === i ? setActiveColor(null) : setActiveColor(i);
                                    // handleActiveColor(i);
                                }}
                                key={i}
                            >
                                {d}{' '}
                            </span>
                        ))}
                    </div>
                </div>
            ) : null}
            {isSize ? (
                <div className={cx('filter')}>
                    <div className={cx('filter-header')}>
                        <h2 className={cx('filter-type')}>Size</h2>
                        <VscDebugRestart
                            onClick={() => {
                                setActiveSize(-1);
                            }}
                        />
                    </div>
                    <div className={cx('classify-size')}>
                        {listSize.map((d, i) => (
                            <div
                                className={cx(
                                    'st-item',
                                    activeSize !== undefined && activeSize === i ? 'activeBg' : null,
                                )}
                                onClick={() => {
                                    activeSize === i ? setActiveSize(null) : setActiveSize(i);
                                    // handleActiveSize(i);
                                }}
                                key={i}
                            >
                                {d}
                            </div>
                        ))}
                    </div>
                </div>
            ) : null}
            {isTags ? (
                <div className={cx('filter')}>
                    <div className={cx('filter-header')}>
                        <h2 className={cx('filter-type')}>Tags</h2>
                        <VscDebugRestart
                            onClick={() => {
                                setActiveTag(-1);
                            }}
                        />
                    </div>
                    <div className={cx('classify-tags')}>
                        {listTag.map((d, i) => (
                            <div
                                className={cx(
                                    'st-item',
                                    activeTag !== undefined && activeTag === i ? 'activeBg' : null,
                                )}
                                onClick={() => {
                                    activeTag === i ? setActiveTag(null) : setActiveTag(i);
                                    // handleActiveTag(i);
                                }}
                                key={i}
                            >
                                {d}
                            </div>
                        ))}
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default Filter;
