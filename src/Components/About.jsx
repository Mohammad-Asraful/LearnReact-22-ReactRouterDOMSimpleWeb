import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

const About = () => {

   const navigate = useNavigate()

   const goToService = (path) => {
      navigate(path)
   }

   return (
      <div>
         <Header />

         <section className='text-center text-white bg-slate-500 border-t-[1px] border-gray-600 h-screen'>

            <div className='px-10 mb-5'>
               <h1 className='text-2xl font-bold mb-5'>This is our about section, so we do explain you to all about of our company.</h1>

               <ul className='list-disc mb-5'>
                  <li className='text-justify bg-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto, ratione tempora adipisci distinctio repudiandae accusantium et praesentium deserunt explicabo beatae rem incidunt fugit dolorum facilis accusamus doloribus soluta sed!</li>
                  <li className='text-justify bg-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto, ratione tempora adipisci distinctio repudiandae accusantium et praesentium deserunt explicabo beatae rem incidunt fugit dolorum facilis accusamus doloribus soluta sed!</li>
                  <li className='text-justify bg-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto, ratione tempora adipisci distinctio repudiandae accusantium et praesentium deserunt explicabo beatae rem incidunt fugit dolorum facilis accusamus doloribus soluta sed!</li>
               </ul>


               <button onClick={() => goToService('/service')} className='bg-slate-900 px-4 py-2 rounded-lg mb-2'>Go To Services</button>
               <br />
               <small>Click and Go to service page otherwise we have dropdown menu, if you want so you can put your cursor on services menu then you can see every services items what services we have</small>
            </div>


         </section>
      </div>
   )
}

export default About