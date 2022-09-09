import { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { useForm, Controller } from 'react-hook-form'
import { LOGIN_USER } from '../../graphql/mutations'
import { graphqlClient } from '../../utils/graphqlClient'
import { setIsLogin } from '../../graphql/cache'
import withCurrenUser from '../../components/hocs/withCurrentUser'
import UserInterface from '../../interfaces/UserInterface'
import useAuth from '../../hooks/useAuth'
import Link from 'next/link'
import dynamic from 'next/dynamic'

// const Layout = dynamic(
//   () => import('../../components/layouts/layout'),
//   { ssr: false }
// )

interface Credentials {
    email: string
    password: string
}

interface Props {
    currentUser: UserInterface
}

const SignIn = ({ currentUser }: Props) => {
    const {
        control,
        handleSubmit,
        setValue,
        watch,
        reset,
        setError,
        formState: { errors, isValid },
    } = useForm<Credentials>({ mode: 'onBlur' })
    const router = useRouter()

    const [showPassword, setShowPassword] = useState(false)

    useEffect(() => {
        currentUser && router.push('/admin')
    }, [currentUser, router])

    const { login, loginData, loginError } = useAuth()

    const handleSignIn = async (formData: Credentials) => {
        const payload = {
            email: formData.email,
            password: formData.password,
        }
        try {
            const { login, error, loading } = await graphqlClient.request(
                LOGIN_USER,
                {
                    input: payload,
                    fetchPolicy: 'cache-first',
                    errorPolicy: 'ignore',
                },
            )

            if (login) {
                const token = localStorage.setItem('accessToken', login.token as string)
                setIsLogin(true)
                router.push('/admin')
            }
        } catch (error) {
            setError('email', {
                type: 'manual',
                message: 'Invalid email or password',
            })
        }
    }

    return (
        <Fragment>

            {/* <Layout title="Signin"> */}
            <section className="d-flex align-items-center justify-content-center flex-column min-vh-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 mx-auto">
                            <div className="card card-item">
                                <div className="card-body">
                                    <h3 className="card-title text-center fs-24 lh-35 pb-">
                                        Sign in to Your Account!
                                    </h3>
                                    <div className="section-block"></div>
                                    <div className="pt-4">
                                        <div className="input-box">
                                            <label className="label-text">Email or Username</label>
                                            <div className="form-group">
                                                <Controller
                                                    name="email"
                                                    control={control}
                                                    render={({ field }) =>
                                                        <input
                                                            {...field}
                                                            type="email"
                                                            className={`form-control form--control ${errors.email && `is-invalid`}`}
                                                            id="exampleInputEmail1"
                                                            autoComplete="off"
                                                            placeholder="Enter your email"
                                                        />
                                                    }
                                                    rules={{ required: true }}
                                                />
                                                <span className="la la-user input-icon"></span>

                                                {errors.email && <small className="invalid-feedback">{errors.email.message ? errors.email.message : 'Please enter your email'}</small>}
                                            </div>
                                        </div>
                                        <div className="input-box">
                                            <label className="label-text">Password</label>
                                            <div className="input-group mb-3">
                                                <Controller
                                                    name="password"
                                                    control={control}
                                                    defaultValue=""
                                                    render={({ field }) =>
                                                        <input
                                                            {...field}
                                                            type={showPassword ? 'text' : 'password'}
                                                            className={`form-control form--control ${errors.password && `is-invalid`}`}
                                                            id="exampleInputPassword2"
                                                            autoComplete="current-password"
                                                            placeholder="password"
                                                        />
                                                    }
                                                    rules={{ required: true }}
                                                />
                                                <span className="la la-lock input-icon"></span>

                                                <div 
                                                    className="input-group-appendj" 
                                                    style={{ 
                                                        borderTopRightRadius: '5px',
                                                        borderBottomRightRadius: '5px',
                                                        border: `${errors.password ? '#EC5252' : '#ced4da'} 1px solid`,
                                                     }}
                                                >
                                                    <button
                                                        className="btn theme-btn theme-btn-transparent toggle-password"
                                                        type="button"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                    >
                                                        {showPassword ? (
                                                            <svg
                                                                className="eye-off"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                height="22px"
                                                                viewBox="0 0 24 24"
                                                                width="22px"
                                                                fill={showPassword ? '#EC5252' : '#7f8897'}
                                                            >
                                                                <path
                                                                    d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"
                                                                    fill="none"
                                                                />
                                                                <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z" />
                                                            </svg>
                                                        ) : (
                                                            <svg
                                                                className="eye-on"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                height="22px"
                                                                viewBox="0 0 24 24"
                                                                width="22px"
                                                                fill={showPassword ? '#EC5252' : '#7f8897'}
                                                            >
                                                                <path d="M0 0h24v24H0V0z" fill="none" />
                                                                <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z" />
                                                            </svg>
                                                        )}
                                                    </button>
                                                </div>

                                                {errors.password && <small className="invalid-feedback">Please enter your password</small>}
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <div className="d-flex align-items-center justify-content-between pb-4">
                                                <div className="custom-control custom-checkbox fs-15">
                                                    {/* <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="rememberMeCheckbox"
                                                        required
                                                    />
                                                    <label
                                                        className="custom-control-label custom--control-label"
                                                        htmlFor="rememberMeCheckbox"
                                                    >
                                                        Remember Me
                                                    </label> */}
                                                </div>
                                                <a href="recover" className="btn-text">
                                                    Forgot my password?
                                                </a>
                                            </div>
                                            <button className="btn btn-primary" type="submit" onClick={handleSubmit(handleSignIn)}>
                                                Sign in Account{' '}
                                                <i className="la la-arrow-right icon ml-1"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* </Layout> */}
        </Fragment>
    )
}

export default withCurrenUser(SignIn)