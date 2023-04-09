import React from 'react'
import Image from 'next/image'
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { RiArrowDownSFill } from 'react-icons/ri';
import { GoSearch } from 'react-icons/go';
import { BsCart3 } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import flag from '/public/flag.png'
import logo from '/public/logo.webp'

function Header() {
  return (
    <header>
        {/* Top nav */}
        <div className='flex items-center justify-between bg-gray-900 p-1 flex-grow py-2 w-full h-[60px]'>
            
            {/* Logo */}
            <div className='link'>
                <div className='lg:hidden px-1 pb-3'>
                    <AiOutlineMenu size={30} color='white'/>
                </div>
                <Image
                    src={logo}
                    width={100}
                    height={20} 
                    objectFit='contain'
                    className='cursor-pointer'
                />
            </div>

            {/* Delivery to */}
            <div className='hidden lg:flex link'>
                <HiOutlineLocationMarker size={20}/>
                
                <div>
                    <div className='text-[12px] text-gray-100'>Delivery to</div>
                    <div className='text-[14px]'>Kyrgyzstan</div>
                </div>
            </div>

            {/* Search */}
            <div className='hidden sm:flex grow items-center px-1'>
                <div className='flex justify-center items-center bg-gray-100 text-[11px] text-gray-600 font-medium w-[60px] h-[40px] rounded-l-md border-r border-r-gray-300 cursor-pointer'>
                    <div className='pr-1'>All</div>
                    <RiArrowDownSFill size={15}/>
                </div>
                <input class="block w-full h-[40px] border-none border-transparent focus:border-transparent focus:outline-none pl-1" type="text" placeholder='Search Amazon'/>
                <div className='flex items-center justify-center bg-orange-300 hover:bg-orange-400 h-[40px] cursor-pointer rounded-r-md p-[5px] px-2'>
                    <GoSearch size={20}/>
                </div>
            </div>

            {/* Language */}
            <div className='hidden lg:flex link'>
                <Image
                    src={flag}
                    width={30}
                    height={25}
                    objectFit='contain'
                    className='pr-1'
                />
                <div className='text-white font-medium'>KG</div>
                <RiArrowDownSFill size={15} color='gray'/>
            </div>

            {/* Account & List */}
            <div className='hidden lg:flex link'>
                <div className='text-white'>
                    <div className='text-[12px]'>
                        Hello
                        <span>, sign in</span>
                    </div>

                    <div className='flex items-center text-[14px] font-medium'>
                        Account & List
                        <RiArrowDownSFill size={15} color='gray'/>
                    </div>
                </div>
            </div>

            {/* Returns & Orders */}
            <div className='hidden lg:flex link'>
                <div className='text-white'>
                    <div className='text-[12px]'>
                        Returns
                    </div>

                    <div className='flex items-center text-[14px] font-medium'>
                        & Orders
                    </div>
                </div>
            </div>

            {/* Cart */}
            <div className='relative link'>
                <div className='flex items-end'>
                    <span className='absolute text-center right-[47px] top-0 rounded-full text-[15px] w-[20px]'>
                        <div className='text-orange-400 bg-gray-900 h-[16px] font-medium'>0</div>
                    </span>
                    <div className='flex justify-center items-center'>
                        <BsCart3 size={30} color='white'/>
                    </div>
                    <div className='pl-1'>Cart</div>
                </div>
                
            </div>


        </div>

        {/* Bottom nav */}
        <div className='hidden md:flex items-center justify-between bg-gray-800 p-1 flex-grow py-2 w-screen h-[40px]'>
            <div className='flex items-center'>
                <div className='flex bottom-link'>
                    <AiOutlineMenu size={17} className='pr-1'/>
                    All
                </div>
                <div className='bottom-link'>Today`s Deals</div>
                <div className='bottom-link'>Customer Service</div>
                <div className='bottom-link'>Registry</div>
                <div className='bottom-link'>Gift Cards</div>
                <div className='bottom-link'>Sell</div>
            </div>

            <div className='bottom-link'>Shop deals in Electronics</div>
        </div>
    </header>
  )
}

export default Header


