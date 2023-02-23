import React from 'react';
import classNames from 'classnames/bind';
import style from './Crumb.module.scss';

import { IoHome } from 'react-icons/io5';

const cx = classNames.bind(style);

function Crumb(props) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('crumb')}>
                <IoHome className={cx('icon')} />
                &nbsp;
                <a href="/#" className={cx('home')}>
                    Home &nbsp;
                </a>
                <span className={cx('page')}>
                    {' '}
                    {'>'} {props.title}
                </span>
            </div>
        </div>
    );
}

export default Crumb;
