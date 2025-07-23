import React from 'react'
import {assets} from '../assets/assets.js'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='bg-[#003A10] min-h-screen pl-[4vw]'>
      <img src={assets.logo} alt="" className='mt-5 w-[14vw] hidden sm:block'/>
      <img src={assets.logo_small} alt="" className='mt-5 w-[max(5vw,40px)] mr-5 sm:hidden block ' />


      <NavLink to='/add-song' className='flex flex-col gap-5 mt-10'>
          <div className='flex item-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium'>
                  <img src={assets.add_song} alt="" className='w-5' />
                  <p className='hidden sm:block'>Add Song</p>
          </div>
      </NavLink>
      <NavLink to='/list-song' className='flex flex-col gap-5 mt-10'>
          <div className='flex item-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium'>
                  <img src={assets.song_icon} alt="" className='w-5' />
                  <p className='hidden sm:block'>List Song</p>
          </div>
      </NavLink>
      <NavLink to='/add-album' className='flex flex-col gap-5 mt-10'>
          <div className='flex item-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium'>
                  <img src={assets.add_album} alt="" className='w-5' />
                  <p className='hidden sm:block'>Add Album</p>
          </div>
      </NavLink>
      <NavLink to='/list-album' className='flex flex-col gap-5 mt-10'>
          <div className='flex item-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium'>
                  <img src={assets.album_icon} alt="" className='w-5' />
                  <p className='hidden sm:block'>List Album</p>
          </div>
      </NavLink>
    </div>
  )
}

export default SideBar
