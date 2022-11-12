import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/Logo.png'
import Profile from '../images/Profile.png'
import { motion } from "framer-motion"

const Header = () => {
    return (
        <div className=" hidden fixed  md:flex w-full  items-center justify-between">
            <Link to={'/'} className="flex items-center gap-2 cursor-pointer">
                <img src={Logo} className="w-12 object-cover" alt="logo" />
                {/* <p className="text-headingColor text-xl font-bold"> City</p> */}
            </Link>

            <div className="flex items-center gap-8">
                <ul className="flex items-center gap-24 "
                >
                    <li className="hover:text-gray-700 px-4 py-2 rounded-full text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                        <Link to={'/'} >Home</Link>
                    </li>
                    <li className="hover:text-gray-700 px-4 py-2 rounded-full text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                        Template
                    </li>
                    <li className="hover:text-gray-700 px-4 py-2 rounded-full text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                        Services
                    </li>
                    <li className="hover:text-gray-700 px-4 py-2 rounded-full text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                        About Us
                    </li>
                </ul>
            </div>

            <div className="transition-all mr-10 rounded-full flex justify-center items-center">
                <img

                    src={Profile}
                    className="w-12 cursor-pointer "
                    alt="userprofile"

                />
            </div>
        </div>

    )
}

export default Header