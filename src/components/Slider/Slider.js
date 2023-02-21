import React from 'react';
import classNames from 'classnames/bind';
import style from './Slider.module.scss';
import img1 from '~/assets/imgs/hero-1.jpg.webp';
import img2 from '~/assets/imgs/hero-2.jpg.webp';

const cx = classNames.bind(style);

function Slider() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('slide-1')}>
        <img className={cx('banner')} src={img1} alt="img1" />
        <div className={cx('slider')}>
          <div className={cx('slider-left')}>
            <div className={cx('left-content')}>
              <span>BAG, KIDS</span>
              <h1 className={cx('title')}>BLACK FRIDAY</h1>
              <p className={cx('content')}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore
              </p>
              <button className={cx('btn')}>SHOP NOW</button>
            </div>
          </div>
          <div classNames={cx('slider-right')}>
            <div className={cx('circle-sale')}>
              <h2>SALE 50%</h2>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('slide-2')}>
        <img className={cx('banner')} src={img2} alt="img1" />
        <div className={cx('slider')}>
          <div className={cx('slider-left')}>
            <div className={cx('left-content')}>
              <span>BAG, KIDS</span>
              <h1 className={cx('title')}>BLACK FRIDAY</h1>
              <p className={cx('content')}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore
              </p>
              <button className={cx('btn')}>SHOP NOW</button>
            </div>
          </div>
          <div classNames={cx('slider-right')}>
            <div className={cx('circle-sale')}>
              <h2>SALE 50%</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
