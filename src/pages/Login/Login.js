import React from 'react';
import classNames from 'classnames/bind';
import style from './Login.module.scss';

import Crumb from '../../components/Crumb/Crumb';

const cx = classNames.bind(style);

function Login() {
    return (
        <div className={cx('wrapper')}>
            <Crumb title="Login" />
            <form className={cx('form')}>
                <h2 className={cx('form-title')}>Login</h2>
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
                    <input
                        type="password"
                        // placeholder="VD: Thế Việt"
                        className={cx('form-control')}
                    />
                </div>

                <div className={cx('form-group')}>
                    <div className="gi-more">
                        <label className={cx('save-pass')} for="save-pass">
                            Save Password
                            <input type="checkbox" id="save-pass" />
                            <span className={cx("checkmark")}></span>
                        </label>
                        <a href="#!" className={cx("forget-pass")}>
                            Forget your Password
                        </a>
                    </div>
                </div>

                <button className={cx('submit')}>SIGN IN</button>
            </form>
        </div>
    );
}

export default Login;
