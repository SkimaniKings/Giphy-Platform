import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'

const AppLayout = () => {
  return (
    <div className='bg-gray-950 text-white min-h-screen'>
        <div className='container mx-auto px-4 py-8'> 
            <Header />
        <main>
            <Outlet />
        </main>
        </div>
    </div>
  )
}
export default AppLayout
