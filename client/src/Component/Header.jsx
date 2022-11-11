import React from 'react'
import Logo from '../images/Logo.png'
import Profile from '../images/Profile.png'

const Header = () => {
    return (
        <div className="hidden fixed -top-[45%] md:flex w-full h-full items-center justify-between">
            <div className="flex items-center gap-2">
                <img src={Logo} className="w-12 object-cover" alt="logo" />
                {/* <p className="text-headingColor text-xl font-bold"> City</p> */}
            </div>

            <div className="flex items-center gap-8">
                <ul className="flex items-center gap-24 "
                >
                    <li className="hover:bg-blue-700 hover:text-white px-4 py-2 rounded-full text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                        Home
                    </li>
                    <li className="hover:bg-blue-700 hover:text-white px-4 py-2 rounded-full text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                        Menu
                    </li>
                    <li className="hover:bg-blue-700 hover:text-white px-4 py-2 rounded-full text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                        About Us
                    </li>
                    <li className="hover:bg-blue-700 hover:text-white px-4 py-2 rounded-full text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                        Service
                    </li>
                </ul>
            </div>

            <div className="w-12 h-12 bg-white hover:bg-blue-600 transition-all mr-8 rounded-full flex justify-center items-center">
                <img

                    src={Profile}
                    className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                    alt="userprofile"

                />
            </div>
        </div>

    )
}

export default Header