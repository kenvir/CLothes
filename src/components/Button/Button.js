import React from 'react';
import { Link } from 'react-router-dom';
import ClassNames from 'classnames';
import classNames from 'classnames/bind';
import style from './Button.module.scss';

const cx = classNames.bind(style);

function Button({ className, onClick, to, ...props }) {
    return (
        <Link className={ClassNames(style.wrapper, className)} onClick={onClick} to={to}>
            <div className={cx('button')}>
                <span className={cx('page')}>{props.title}</span>
            </div>
        </Link>
    );
}

export default Button;
