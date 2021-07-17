import React from 'react'
import Image from 'next/image'
import logo from "../public/logo.png"
import HeaderIcon from './HeaderIcon'
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon
} from "@heroicons/react/solid";
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon
} from "@heroicons/react/outline";

function Header() {
    return (
        <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
            {/* Left Header */}
            <div className='flex items-center'>
                <Image src={logo}
                width={70}
                height={40}
                layout="fixed"
                />
                <div className='flex items-center rounded-full bg-gray-100 p-2'>
                    <SearchIcon className='h-6  text-gray-600'/>
                    <input className='hidden md:inline-flex flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink' type="text" name="search" id="search" placeholder="Search Facebook" />
                </div>
            </div>
            {/* Center Header */}
            <div className="flex justify-center flex-grow">
                <div className='flex space-x-6 md:space-x-2'>
                    <HeaderIcon Icon={HomeIcon} active={true} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>

            {/* Right Header */}
            <div>
                
                <p className='font-semibold pr-3 whitespace-nowrap'>Vishal Ghosh</p>
            </div>
        </div>
    )
}

export default Header
