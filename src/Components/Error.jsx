import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {

   const navigate = useNavigate()

   const returnHome = (path) => {
      navigate(path)
   }

   return (
      <div className='h-screen grid justify-center items-center bg-slate-500'>
         <div className='w-96'>
            <h1 className='text-9xl text-center font-bold text-red-800'>404</h1>
            <h1 className='text-3xl text-center font-bold text-red-800 uppercase'>OPPS! Page not found</h1>
            <p className='text-center mt-5'>Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem</p>

            <div className='text-center'>
               <button onClick={() => { returnHome('/') }} className='uppercase bg-slate-800 text-white py-1 px-3 rounded-full mt-5'>Return Home</button>
            </div>
         </div>
      </div>
   )
}

export default Error