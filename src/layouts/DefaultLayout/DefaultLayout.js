import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from '~/layouts/components/Header/Header';
import Footer from '~/layouts/components/Footer/Footer';
import PartnerLogo from '~/layouts/components/PartnerLogo/PartnerLogo';
import Menu from '../components/Menu/Menu';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Menu />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <PartnerLogo />
            <Footer />
        </div>
    );
}

export default DefaultLayout;
