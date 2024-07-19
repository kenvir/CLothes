import { SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import style from './SliderProduct.module.scss';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import img2 from '~/assets/imgs/women-4.jpg';
import { BsClipboard, BsHeart } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function SliderProduct({ data }) {
    const [quickView, setQuickView] = useState(false);

    const handleQuickView = () => {
        setQuickView(!quickView);
    };

    return (
        <div className={cx('content')}>
            <Link to={`/productDetail/${data.id}`} className={cx('product-item')}>
                <div className={cx('product-img')}>
                    <img src={img2} alt="women" />
                    <BsHeart className={cx('product-favorite')} />
                    {data.sale && data.sale !== '0' && data.sale !== 'null' && (
                        <div className={cx('product-sale')}>SALE</div>
                    )}
                    {/* <div className={cx('product-option')}>
                        <div className={cx('product-option-inner')}>
                            <div className={cx('option-icon-wrapper')}>
                                <div onClick={() => (window.location.href = `/cart/${data.id}`)}>
                                    <BsClipboard className={cx('option-icon')} />
                                </div>
                            </div>
                            <div className={cx('option-content')}>
                                <span onClick={handleQuickView}>+ Quick View</span>
                                {quickView && (
                                    <div className={cx('quick-view')}>
                                        <span className={cx('quick-view--title')}>
                                            <span className={cx('quick-view--infor')}>Name:</span> {data.name}
                                        </span>
                                        <span className={cx('quick-view--title')}>
                                            <span className={cx('quick-view--infor')}>Brand:</span> {data.brand}
                                        </span>
                                        <span className={cx('quick-view--title')}>
                                            <span className={cx('quick-view--infor')}>Type:</span> {data.type}
                                        </span>
                                        <span className={cx('quick-view--title')}>
                                            <span className={cx('quick-view--infor')}>Color:</span> {data.color}
                                        </span>
                                        <span className={cx('quick-view--title')}>
                                            <span className={cx('quick-view--infor')}>Rating:</span> 4.5* Rating
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className={cx('option-shuffle-wrapper')}>
                                <FontAwesomeIcon className={cx('option-shuffle')} icon={faShuffle} />
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className={cx('product-text')}>
                    <span className={cx('product-type')}>{data.type}</span>
                    <span className={cx('product-name')}>{data.name}</span>
                    <div className={cx('product-price')}>
                        <span className={cx('price-sale')}>
                            {data.sale === '0' ? data.price : (data.price * data.sale) / 100}
                        </span>
                        <span>{data.price}</span>
                    </div>
                </div>
            </Link>
            <div className={cx('product-option')}>
                <div className={cx('product-option-inner')}>
                    <div className={cx('option-icon-wrapper')}>
                        <div onClick={() => (window.location.href = `/cart/${data.id}`)}>
                            <BsClipboard className={cx('option-icon')} />
                        </div>
                    </div>
                    <div className={cx('option-content')}>
                        <span onClick={handleQuickView}>+ Quick View</span>
                        {quickView && (
                            <div className={cx('quick-view')}>
                                <span className={cx('quick-view--title')}>
                                    <span className={cx('quick-view--infor')}>Name:</span> {data.name}
                                </span>
                                <span className={cx('quick-view--title')}>
                                    <span className={cx('quick-view--infor')}>Brand:</span> {data.brand}
                                </span>
                                <span className={cx('quick-view--title')}>
                                    <span className={cx('quick-view--infor')}>Type:</span> {data.type}
                                </span>
                                <span className={cx('quick-view--title')}>
                                    <span className={cx('quick-view--infor')}>Color:</span> {data.color}
                                </span>
                                <span className={cx('quick-view--title')}>
                                    <span className={cx('quick-view--infor')}>Rating:</span> 4.5* Rating
                                </span>
                            </div>
                        )}
                    </div>
                    <div className={cx('option-shuffle-wrapper')}>
                        <FontAwesomeIcon className={cx('option-shuffle')} icon={faShuffle} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SliderProduct;
