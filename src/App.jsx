
import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'

function App() {
  const [sideBarToggle, setSideBarToggle] = useState(false)
  return (
    <div className='flex'>
      <Sidebar sideBarToggle={sideBarToggle} />
      <Dashboard sideBarToggle={sideBarToggle} setSideBarToggle={setSideBarToggle} />

    </div>
  )
}

export default App
