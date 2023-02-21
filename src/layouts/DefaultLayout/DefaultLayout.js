import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from '~/layouts/components/Header/Header';
import Footer from '~/layouts/components/Footer/Footer';
import PartnerLogo from '~/layouts/components/PartnerLogo/PartnerLogo';
import BannerSection from '~/layouts/components/BannerSection/BannerSection';
import Slider from '~/components/Slider/Slider';
import Product from '../components/Product/Product';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Slider />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <BannerSection />
            <Product />
            <PartnerLogo />
            <Footer />
        </div>
    );
}

export default DefaultLayout;
