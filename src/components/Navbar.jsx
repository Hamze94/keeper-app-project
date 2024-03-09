import React from 'react'
import { FiAlignJustify, } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { MdOutlineAddBox, MdOutlineWbSunny } from "react-icons/md";
export default function Navbar({ sideBarToggle, setSideBarToggle }) {
    return (
        <nav className='bg-[#9657e7]  w-full flex px-4 py-3 justify-between'>
            <div className="flex text-white items-center text-xl">
                <FiAlignJustify className='mt-1 font-semibold text-2xl' onClick={() => setSideBarToggle(!sideBarToggle)}> </FiAlignJustify> <h1 className=' text-xl pl-3'>KEEPER</h1>
            </div>
            <div className='flex items-center text-xl text-white  gap-x-5 '>
                <CiUser />
                <MdOutlineAddBox />
                <MdOutlineWbSunny />
            </div>
        </nav >
    )
}
