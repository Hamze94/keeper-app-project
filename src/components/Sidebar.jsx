import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";

export default function Sidebar({ sideBarToggle }) {
    return (
        <div className={` ${sideBarToggle ? " hidden " : " block "} w-64 fixed  h-screen  mt-[53px]  z-10 bg-white`}>
            <div className=' rounded-lg bg-[#dfe7ff] p-5 m-2'>
                <h1 className='px-3 mt-2 text-lg'><IoIosAddCircleOutline className=' inline-block h-8 w-8 mr-2 -mt-1'></IoIosAddCircleOutline>
                    Add Project</h1>
            </div>
            <div className=' bg-[#dfe7ff] mx-1'>
                <h1 className=' text-lg  font-semibold '>STATS</h1>
            </div>
            <p className='text-center font-light'>Projects</p>
            <div className='font-medium p-2'>
                <p className='mb-3 mx-2'>Inbox</p>
                <p className='mb-3 mx-2'>Workspace</p>
                <p className='mb-3 mx-2'>CLA</p>
                <p className='mb-3 mx-2'>Project X</p>
            </div>




        </div>
    )
}
