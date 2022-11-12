import React, { useState } from 'react'
import Register from './Register';
import login1 from '../../images/Login.png'
import { Link, redirect } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../app/userSlice.js';
import { Redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {

    const [info, setInfo] = useState({email: '', password: '', checked: false});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();

        setInfo({...info, [e.target.name]: e.target.value, })
    }

    // const handleCheckbox = (e) => {
    //     console.log(info)
    //     e.target.value === "false" ? e.target.value = "true" : e.target.value = "false";
    //     setInfo({...info, [e.target.name]: e.target.value === 'true' ? false : true})
        
    //     console.log(info)
    // }

    const handleLogin = async(e) => {
        e.preventDefault();

        const result = await axios.post('http://localhost:3001/login', info)
        console.log(result.data.user);
        localStorage.setItem('id', result.data.user.id)

        const user1 = await axios.get(`http://localhost:3001/${result.data.user.id}`)

        // const loginUser = () => {
        //     const user = user1;
        // }
        console.log(user1.data)
        dispatch(login({user: user1.data[0]}));
        console.log(info)
        
        // console.log(state.user)
        navigate('/')
    }
    const user = useSelector((state)=>state)
    return (
        <div className="h-screen overflow-hidden">
            <div className="relative px-6 h-full text-gray-800">
                {/* <h1 className='absolute text-4xl font-bold top-[10%] left-[45%]'>Login</h1> */}
                <div className="flex justify-center flex-col items-center flex-wrap h-full g-6">
                    <div className="ml-20  w-5/12  mb-12 border-r-2 border-spacing-8 pl-7">
                        <form onSubmit={handleLogin}>
                            <div className="flex gap-4 flex-col items-center justify-center lg:justify-start">
                                <p className="text-lg mb-0 mr-4 block">Sign in with</p>
                                <div className='flex gap-8'>
                                    <button
                                        type="button"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                        className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                                    >

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4">
                                            <path
                                                fill="currentColor"
                                                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                            />
                                        </svg>
                                    </button>

                                    <button
                                        type="button"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                        className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4">
                                            <path
                                                fill="currentColor"
                                                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                            />
                                        </svg>
                                    </button>

                                    <button
                                        type="button"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                        className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4">
                                            <path
                                                fill="currentColor"
                                                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div
                                className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5 mr-7"
                            >
                                <p className="text-center font-semibold mx-4 mb-0">Or</p>
                            </div>

                            <div className='mr-7'>

                                <div className="mb-6">
                                    <input
                                        type="text"
                                        name='email'
                                        onChange={handleChange}
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput2"
                                        placeholder="Email address"
                                    />
                                </div>


                                <div className="mb-6">
                                    <input
                                        type="password"
                                        name='password'
                                        onChange={handleChange}
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput2"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-between items-center mb-6 mr-7">
                                <Link to={'/forgot'} className="text-gray-800 hover:underline underline-offset-3">Forgot password?</Link>
                            </div>

                            <div className="text-center lg:text-left">
                                <button
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-xl focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
                                >
                                    Login
                                </button>
                                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                    Don't have an account ?
                                    <Link
                                        to={'/register'}
                                        className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out hover:underline ml-1"
                                    >Register
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                    <br />
                    <div
                        className="grow-0 shrink-1 rounded-full flex hover:translate-x-2 transition-all justify-center basis-auto xl:w-6/12 lg:w-6/12  mb-12"
                    >
                        <img
                            src={login1}
                            className="w-96 "
                            alt="Sample image"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;