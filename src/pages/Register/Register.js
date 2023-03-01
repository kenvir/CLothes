import React from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import style from './Register.module.scss';

import Crumb from '~/components/Crumb/Crumb';

const cx = classNames.bind(style);

function Register() {
    return (
        <div className={cx('wrapper')}>
            <Crumb title="Register" />
            <form className={cx('form')}>
                <h2 className={cx('form-title')}>Register</h2>
                <div className={cx('form-group')}>
                    <label for="fullname" className={cx('form-label')}>
                        Username or email address *
                    </label>
                    <input
                        type="text"
                        // placeholder="VD: Thế Việt"
                        className={cx('form-control')}
                    />
                </div>
                <div className={cx('form-group')}>
                    <label for="password" className={cx('form-label')}>
                        Password *
                    </label>
                    <input type="password" className={cx('form-control')} />
                </div>
                <div className={cx('form-group')}>
                    <label for="password" className={cx('form-label')}>
                        Confirm Password *
                    </label>
                    <input type="password" className={cx('form-control')} />
                </div>

                <button className={cx('submit')}>REGISTER</button>

                <div className={cx('switch')}>
                    <Link to="/login" className={cx('switch-login')}>Or Login</Link>
                </div>
            </form>
        </div>
    );
}

export default Register;
