import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header/Header';
import Menu from '../components/Menu/Menu';
import Slider from '~/components/Slider/Slider';
import styles from './DefaultLayout.module.scss';
import Product from '../components/Product/Product';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <Menu />
      <Slider />
      <div className={cx('container')}>
        <div className={cx('content')}>{children}</div>
      </div>
      <Product />
    </div>
  );
}

export default DefaultLayout;
