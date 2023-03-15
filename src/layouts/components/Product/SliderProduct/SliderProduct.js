import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';

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

// import "./SliderProduct.css"

const cx = classNames.bind(style);

function SliderProduct() {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            autoplay={{delay: 5000, disableOnInteraction: true,}} 
            modules={[Navigation, Autoplay]}
            className="mySwiper"
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                600: {
                    slidesPerView: 2,
                },
                865: {
                    slidesPerView: 3,
                },
            }}
        >
            <SwiperSlide>
                <div className={cx('product-item')}>
                    <div className={cx('product-img')}>
                        <img src={img2} alt="women" />
                        <BsHeart className={cx('product-favorite')} />
                        <div className={cx('product-sale')}>SALE</div>
                        <div className={cx('product-option')}>
                            <div className={cx('product-option-inner')}>
                                <div className={cx('option-icon-wrapper')}>
                                    <BsClipboard className={cx('option-icon')} />
                                </div>
                                <div className={cx('option-content')}>
                                    <span>+ Quick View</span>
                                </div>
                                <div className={cx('option-shuffle-wrapper')}>
                                    <FontAwesomeIcon className={cx('option-shuffle')} icon={faShuffle} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('product-text')}>
                        <span className={cx('product-type')}>TOWEL</span>
                        <span className={cx('product-name')}>Converse Shoes</span>
                        <div className={cx('product-price')}>
                            $20
                            <span>$14</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={cx('product-item')}>
                    <div className={cx('product-img')}>
                        <img src={img2} alt="women" />
                        <BsHeart className={cx('product-favorite')} />
                        <div className={cx('product-sale')}>SALE</div>
                        <div className={cx('product-option')}>
                            <div className={cx('product-option-inner')}>
                                <div className={cx('option-icon-wrapper')}>
                                    <BsClipboard className={cx('option-icon')} />
                                </div>
                                <div className={cx('option-content')}>
                                    <span>+ Quick View</span>
                                </div>
                                <div className={cx('option-shuffle-wrapper')}>
                                    <FontAwesomeIcon className={cx('option-shuffle')} icon={faShuffle} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('product-text')}>
                        <span className={cx('product-type')}>TOWEL</span>
                        <span className={cx('product-name')}>Converse Shoes</span>
                        <div className={cx('product-price')}>
                            $20
                            <span>$14</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={cx('product-item')}>
                    <div className={cx('product-img')}>
                        <img src={img2} alt="women" />
                        <BsHeart className={cx('product-favorite')} />
                        <div className={cx('product-sale')}>SALE</div>
                        <div className={cx('product-option')}>
                            <div className={cx('product-option-inner')}>
                                <div className={cx('option-icon-wrapper')}>
                                    <BsClipboard className={cx('option-icon')} />
                                </div>
                                <div className={cx('option-content')}>
                                    <span>+ Quick View</span>
                                </div>
                                <div className={cx('option-shuffle-wrapper')}>
                                    <FontAwesomeIcon className={cx('option-shuffle')} icon={faShuffle} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('product-text')}>
                        <span className={cx('product-type')}>TOWEL</span>
                        <span className={cx('product-name')}>Converse Shoes</span>
                        <div className={cx('product-price')}>
                            $20
                            <span>$14</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={cx('product-item')}>
                    <div className={cx('product-img')}>
                        <img src={img2} alt="women" />
                        <BsHeart className={cx('product-favorite')} />
                        <div className={cx('product-sale')}>SALE</div>
                        <div className={cx('product-option')}>
                            <div className={cx('product-option-inner')}>
                                <div className={cx('option-icon-wrapper')}>
                                    <BsClipboard className={cx('option-icon')} />
                                </div>
                                <div className={cx('option-content')}>
                                    <span>+ Quick View</span>
                                </div>
                                <div className={cx('option-shuffle-wrapper')}>
                                    <FontAwesomeIcon className={cx('option-shuffle')} icon={faShuffle} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('product-text')}>
                        <span className={cx('product-type')}>TOWEL</span>
                        <span className={cx('product-name')}>Converse Shoes</span>
                        <div className={cx('product-price')}>
                            $20
                            <span>$14</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default SliderProduct;
