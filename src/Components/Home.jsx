import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

const Home = () => {

   const navigate = useNavigate()

   const goToAbout = (path) => {
      navigate(path)
   }

   return (
      <div>
         <Header />

         <section className='bg-slate-500 border-t-[1px] border-black text-white h-screen px-10'>
            <h1 className='text-3xl font-bold text-white text-center'>Let's Make</h1>

            <p className='text-center text-xl font-bold mt-3'>Let's Make is a big softwere platform.</p>
            <p className='text-center mt-2'>We are multi service provider for every business. We're not only limited to one service but we have everything you need to manage your business.</p>

            <div>
               <h1>It have:</h1>

               <ul className='list-disc'>
                  <li className='bg-slate-500'>Figma Designer</li>
                  <li className='bg-slate-500'>UI Designer</li>
                  <li className='bg-slate-500'>Frontend Developer</li>
                  <li className='bg-slate-500'>Backend Developer</li>
                  <li className='bg-slate-500'>Networking</li>
               </ul>
            </div>

            <div className='text-center flex justify-center gap-10'>
               <button onClick={() => { goToAbout('/about') }} className='bg-slate-700 py-1 px-3 rounded-lg mt-5'>Go to about</button>

               <button onClick={() => { goToAbout('/abouts') }} className='bg-slate-700 py-1 px-3 rounded-lg mt-5'>Go to Error page for wrong location</button>


            </div>
         </section>

      </div>
   )
}

export default Home