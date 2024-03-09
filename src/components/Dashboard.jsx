import React from 'react'
import Navbar from './Navbar'
import AddTask from './AddTask'
import List from './List'

export default function Dashboard({ sideBarToggle, setSideBarToggle }) {
    return (<>

        <div className='w-full '>
            <Navbar sideBarToggle={sideBarToggle} setSideBarToggle={setSideBarToggle} />
            <div className={`${sideBarToggle ? "" : "h-screen bg-gray-600/50 "}overscroll-none w-full  h-screen px-5 mt-0 `}>
                <AddTask />
                <List />
            </div>
        </div>
    </>
    )
}
