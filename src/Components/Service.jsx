import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Header from './Header'


const Service = () => {
   return (
      <section className='text-center text-white bg-slate-500 border-t-[1px] border-gray-600 h-screen'>
         <Header />

         <ul className='flex justify-center pb-10 pt-2 w-screen'>
            <li>
               <NavLink to='/service/design'>Design</NavLink>
            </li>
            <li>
               <NavLink to='/service/frontend'>Frontend</NavLink>
            </li>
            <li>
               <NavLink to='/service/backend'>Backend</NavLink>
            </li>
         </ul>

         <Outlet />
      </section>
   )
}

export default Service