import classNames from 'classnames/bind';
import style from './Deal.module.scss';

import img1 from '~/assets/imgs/time-bg.jpg';
import CountdownTimer from '~/components/SaleTimer/SaleTimer';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function Deal() {
    const saleEndTime = '2024-07-31T23:59:59';

    return (
        <div className={cx('wrapper')}>
            <div className={cx('deal')}>
                <img className={cx('image-wrapper')} src={img1} alt="bg-deal" />
                <div className={cx('content')}>
                    <h1 className={cx('content-title')}>Deal Of The Weak</h1>
                    <p className={cx('content-intro')}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ipsum dolor sit amet,
                        consectetur adipisicing elit
                    </p>
                    <span className={cx('content-price')}>
                        $35 / <p className={cx('content-product')}>&nbsp;HanBag</p>
                    </span>
                    <CountdownTimer saleEndTime={saleEndTime} />
                    <Link to="/shop" className={cx('content-btn')}>
                        SHOP NOW
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Deal;
