import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {CgProfile} from 'react-icons/cg';
import {IoMdNotificationsOutline} from 'react-icons/io';
// import Sidebar from '../components/Sidebar'
import {CiSettings} from 'react-icons/ci'
const Dashboard = () => {
  return (
    <div >
       
  <div className="px-12 py-8 w-full flex flex-row justify-between z-20 bg-gray-200 shadow-lg">
<h1 className="z-10 pl-56 text-xl font-semibold font-sans">Good Morning Mr Thomas </h1>
<input type="text" placeholder="search by students,staffs" className="rounded-xl pl-5 outline-none placeholder:text-gray-300 "/>
<div className="flex space-x-8">
<CgProfile/>
<IoMdNotificationsOutline/>
<CiSettings/>
</div>
      </div>
    <h1 className='text-center text-yellow-600 px-8 py-12 text-2xl flex justify-center'>Welcome To Goshen Dashboard</h1>  
    </div>
  )
}

export default Dashboard
