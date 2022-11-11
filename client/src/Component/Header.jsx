import React from 'react'

const Header = () => {
    return (
        <div className="hidden md:flex w-full h-full items-center justify-between">
            <div className="flex items-center gap-2">
                <img src='' className="w-8 object-cover" alt="logo" />
                <p className="text-headingColor text-xl font-bold"> City</p>
            </div>

            <div className="flex items-center gap-8">
                <ul className="flex items-center gap-24 "
                >
                    <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                        Home
                    </li>
                    <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                        Menu
                    </li>
                    <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                        About Us
                    </li>
                    <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                        Service
                    </li>
                </ul>
            </div>

            <div className="relative">
                <img

                    src=''
                    className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                    alt="userprofile"

                />


            </div>
        </div>

    )
}

export default Header