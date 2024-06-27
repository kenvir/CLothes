import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import qs from 'qs';

import classNames from 'classnames/bind';
import style from './Register.module.scss';
import { toastSuccess, toastError } from '~/components/Toasts/Toasts';

import Crumb from '~/components/Crumb/Crumb';

const cx = classNames.bind(style);

function Register({ Click, openLogin }) {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState('');

    const callAPI = async (data) => {
        // try {
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
        console.log(response);
        return response;
        //     if (!response.ok) {
        //         throw new Error('Registration failed');
        //     }

        //     // Registration successful
        //     // Redirect user or show success message
        // } catch (error) {
        //     console.error('Registration error:', error.message);
        //     // Display error message to the user
        // }
    };

    const onSubmit = async (data) => {
        try {
            const datas = await callAPI(data);

            if (datas.data.Error === true) {
                toastError(`${datas.data.Title}`);
            }
            if (datas?.data?.Error === false) {
                toastSuccess(`${datas.data?.Title}`);
                Click(false);
                openLogin(true);
            }
        } catch (error) {
            toastError(`${error.message}`);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Crumb title="Register" />
            <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={cx('form-title')}>Register</h2>
                <div className={cx('form-group')}>
                    <label htmlFor="email" className={cx('form-label')}>
                        Email address *
                    </label>
                    <Controller
                        id="email"
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'Email cannot be empty!',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email!',
                            },
                        }}
                        render={({ field }) => (
                            <input
                                {...field}
                                className={cx('form-control')}
                                type="email"
                                placeholder="Example: viet02092001@gmail.com"
                                autoComplete="off"
                            />
                        )}
                    />
                    {errors.email && <span className={cx('error-message')}>{errors.email.message}</span>}
                </div>
                <div className={cx('form-group')}>
                    <label htmlFor="password" className={cx('form-label')}>
                        Password *
                    </label>
                    <Controller
                        id="password"
                        name="password"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'Password cannot be empty!',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters long',
                            },
                            maxLength: {
                                value: 30,
                                message: 'Password cannot exceed 30 characters',
                            },
                        }}
                        render={({ field }) => (
                            <input
                                {...field}
                                className={cx('form-control')}
                                type="password"
                                placeholder="Enter password"
                                autoComplete="off"
                            />
                        )}
                    />
                    {errors.password && <span className={cx('error-message')}>{errors.password.message}</span>}
                </div>
                {/* <div className={cx('form-group')}>
                    <label htmlFor="password" className={cx('form-label')}>
                        Confirm Password *
                    </label>
                    <input
                        type="password"
                        className={cx('form-control')}
                        placeholder="Re-entered password"
                        autoComplete="on"
                        {...register('PasswordAgain', {
                            required: true,
                            validate: (val) => {
                                if (watch('Password') !== val) {
                                    return 'Your passwords does not match!';
                                }
                            },
                        })}
                    />
                    {errors.PasswordAgain && errors.PasswordAgain.type === 'required' && (
                        <span className={cx('error-message')}>Password again can not be empty !</span>
                    )}
                    {errors.PasswordAgain && errors.PasswordAgain.type === 'validate' && (
                        <span className={cx('error-message')}>Confirm password does not match !</span>
                    )}
                </div> */}
                <div className={cx('form-group')}>
                    <label htmlFor="confirm-password" className={cx('form-label')}>
                        Confirm Password *
                    </label>
                    <Controller
                        name="confirmPassword"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'Password confirmation is required!',
                            validate: (value) => value === password || 'The passwords do not match!',
                        }}
                        render={({ field }) => (
                            <input
                                {...field}
                                className={cx('form-control')}
                                type="password"
                                placeholder="Re-Enter password"
                                autoComplete="off"
                            />
                        )}
                    />
                    {errors.confirmPassword && (
                        <span className={cx('error-message')}>{errors.confirmPassword.message}</span>
                    )}
                </div>

                <button className={cx('submit')}>REGISTER</button>

                <div className={cx('switch')}>
                    <Link to="/login" className={cx('switch-login')}>
                        Or Login
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Register;
