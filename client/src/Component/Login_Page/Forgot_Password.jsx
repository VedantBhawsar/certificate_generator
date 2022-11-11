import React from 'react'
import { BsCheck2All } from 'react-icons/bs';
import forgot from '../../images/ForgotPassword.png'

const Forgot_Password = () => {
    return (
        <div className="h-screen overflow-hidden">
            <div className="px-6 h-full text-gray-800">
                <div
                    className="flex justify-center  items-center flex-wrap h-full g-6"
                >

                    <div className="ml-20  w-5/12  mb-12 border-r-2 border-spacing-8 pl-7">
                        <form>
                            <div className='flex '>
                                <h4 className='pr-4 text-2xl font-semibold '>Forgot </h4>
                                <h4 className='text-2xl font-semibold'>Password</h4>
                            </div>
                            <div
                                className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5 mr-7">
                            </div>

                            <div className='mr-7'>
                                <div className="mb-6">
                                    <input
                                        type="email"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput2"
                                        placeholder="Email address"
                                    />
                                </div>

                                <div className='flex '>
                                    <div className="mb-3 mr-7">
                                        <input
                                            type="text"
                                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            id="exampleFormControlInput2"
                                            placeholder="OTP"
                                            maxLength='6'
                                        />
                                    </div>
                                    <div>
                                        <button
                                            type='button'
                                            className="inline-block px-7 py-3 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-xl focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out "
                                        >
                                            Get OTP
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* This will show after completing otp verificaton */}
                            <div className='text-red-500 flex items-center mb-3 '>
                                <BsCheck2All className='mr-1' />OTP Verified Successfully
                            </div>



                            <div className="text-center lg:text-left">
                                <button
                                    type="button"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-xl focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
                                >
                                    Reset
                                </button>
                            </div>
                        </form>
                    </div>
                    <br />
                    <div
                        className="grow-0 shrink-1 flex justify-center hover:translate-x-2 transition-all basis-auto xl:w-6/12 lg:w-6/12  mb-12"
                    >
                        <img
                            src={forgot}
                            className="w-[35rem] rounded-full"
                            alt="Sample image"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forgot_Password