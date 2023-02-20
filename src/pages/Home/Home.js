import React from 'react';
import classNames from 'classnames/bind';
import style from './Home.module.scss';
import Header from '~/layouts/components/Header';

const cx = classNames.bind(style);

function Home() {
  return (
    <div className={cx('wrapper')}>
      <Header />
    </div>
  );
}

export default Home;
