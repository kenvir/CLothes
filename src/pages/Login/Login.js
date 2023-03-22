import React from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import style from './Login.module.scss';

import Crumb from '../../components/Crumb/Crumb';
import { useForm } from 'react-hook-form';

const cx = classNames.bind(style);

function Login() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    return (
        <div className={cx('wrapper')}>
            <Crumb title="Login" />
            <form className={cx('form')} onSubmit={handleSubmit()}>
                <h2 className={cx('form-title')}>Login</h2>
                <div className={cx('form-group')}>
                    <label htmlFor="fullname" className={cx('form-label')}>
                        Email address *
                    </label>
                    <input
                        type="text"
                        className={cx('form-control')}
                        placeholder="Example: viet02092001@gmail.com"
                        {...register('Email', {
                            required: true,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            },
                        })}
                    />
                    {errors.Email && errors.Email.type === 'required' && (
                        <span className={cx('error-message')}>Email cannot be empty !</span>
                    )}
                    {errors.Email && errors.Email.type === 'pattern' && (
                        <span className={cx('error-message')}>Invalid email !</span>
                    )}
                </div>
                <div className={cx('form-group')}>
                    <label htmlFor="password" className={cx('form-label')}>
                        Password *
                    </label>
                    <input
                        type="password"
                        className={cx('form-control')}
                        placeholder="Entered password"
                        autoComplete="on"
                        {...register('Password', {
                            required: true,
                            minLength: 6,
                            maxLength: 30,
                        })}
                    />
                    {errors.Password && errors.Password.type === 'required' && (
                        <span className={cx('error-message')}>Password cannot be empty !</span>
                    )}
                </div>

                <div className={cx('form-group-option')}>
                    <div className={cx('gi-more')}>
                        <label className={cx('save-pass')} for="save-pass">
                            <span>Save Password</span>
                            <input type="checkbox" id="save-pass" />
                            <span className={cx('checkmark')}></span>
                        </label>
                        <a href="#!" className={cx('forget-pass')}>
                            Forget your Password
                        </a>
                    </div>
                </div>

                <button className={cx('submit')}>SIGN IN</button>

                <div className={cx('switch')}>
                    <Link to="/register" className={cx('switch-login')}>
                        Or Create An Account
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
