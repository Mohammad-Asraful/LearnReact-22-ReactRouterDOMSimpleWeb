import React from 'react'
import { NavLink } from 'react-router-dom'
import './Style/Header.css'

const Header = () => {

   return (
      <div className='text-white items-center flex justify-around bg-slate-500 py-3'>

         <a href='https://manage.lets-make.online/login' target='_blank' rel="noreferrer">Let's Make</a>

         <div>
            <ul className='flex gap-1 justify-center'>
               <li>
                  <NavLink to='/'>Home</NavLink>
               </li>
               <li>
                  <NavLink to='/about'>About</NavLink>
               </li>

               <li className='service-items relative'>
                  <NavLink to='/service'>Services</NavLink>

                  <ul className='absolute hidden left-0'>
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

               </li>

               <li>
                  <NavLink to='/contact'>Contact</NavLink>
               </li>
               <li>
                  <NavLink to='/help'>Help</NavLink>
               </li>
            </ul>
         </div>

         <button className='bg-blue-600 py-1 px-3 rounded-lg'>Log in</button>

      </div>
   )
}

export default Header