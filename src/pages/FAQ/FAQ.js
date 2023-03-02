import React from 'react';
import classNames from 'classnames/bind';
import style from './FAQ.module.scss';
import Crumb from '~/components/Crumb/Crumb';

const cx = classNames.bind(style);

function FAQ() {
    return (
        <div className={cx('wrapper')}>
            <Crumb title="FAQs" />

            <div className={cx('container')}>
                
            </div>
        </div>
    );
}

export default FAQ;
