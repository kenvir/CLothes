import React, { useContext } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import qs from 'qs';

import classNames from 'classnames/bind';
import style from './Login.module.scss';

import Crumb from '../../components/Crumb/Crumb';
import { toastSuccess, toastError } from '~/components/Toasts/Toasts';

const cx = classNames.bind(style);

function Login({ Click, setUser, Close }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const CT = useContext();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const callApi = async (data) => {
        const response = await axios({
            method: 'get',
            url: 'https://6556cd15bd4bcef8b611a0fc.mockapi.io/api/clothes/users',
            data: qs.stringify({
                Email: data.email,
                PassWord: data.passWord,
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
        });

        const account = response.data.find((d) => d.email === data.Email);
        const passAcc = account.passWord === parseInt(data.Password);

        if (account && passAcc) {
            console.log('Login success!!!');
        } else {
            console.log('Email or PassWord incorrect!!!');
        }

        return response;
    };

    // const handleLogin = async (data) => {
    //     try {
    //         const datas = await callApi(data);

    //         if (datas.data.Error === true) {
    //             toastError(`${datas.data.Title}`);
    //         }
    //         if (datas?.data?.Error === false) {
    //             toastSuccess('Login success!');
    //             localStorage.setItem('VNXUser', JSON.stringify(datas.data));
    //             CT.setCurrentUser(datas.data);
    //             setTimeout(() => {
    //                 setUser(`${datas.data?.Title}`);
    //                 Close(false);
    //             }, 2000);
    //         }
    //     } catch (error) {
    //         toastError(`${error.message}`);
    //     }
    // };

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('API_ENDPOINT/login', { email, password });
            localStorage.setItem('token', response.data.token);
            console.log(response.data.token);
            navigate('/dashboard');
        } catch (error) {
            console.error('Error logging in', error);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Crumb title="Login" />
            <form className={cx('form')} autoComplete="off" onSubmit={handleSubmit(handleLogin)}>
                <h2 className={cx('form-title')}>Login</h2>
                <div className={cx('form-group')}>
                    <label htmlFor="email" className={cx('form-label')}>
                        Email address *
                    </label>
                    <input
                        type="text"
                        className={cx('form-control')}
                        id="Email"
                        // value={email}
                        placeholder="Example: viet02092001@gmail.com"
                        autoComplete="new-password"
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
                        id="PassWord"
                        // value={password}
                        placeholder="Enter password"
                        autoComplete="off"
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
                        <label className={cx('save-pass')} htmlFor="save-pass">
                            <span>Save Password</span>
                            <input type="checkbox" id="save-pass" />
                            <span className={cx('checkmark')}></span>
                        </label>
                        <a href="#!" className={cx('forget-pass')}>
                            Forget your Password
                        </a>
                    </div>
                </div>

                <button className={cx('submit')} type="submit">
                    SIGN IN
                </button>

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
