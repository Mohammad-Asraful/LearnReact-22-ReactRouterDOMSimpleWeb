import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Contact from './Components/Contact'
import Error from './Components/Error'
import Help from './Components/Help'
import Home from './Components/Home'
import Service from './Components/Service'
import { Backend } from './Components/SubMenu/Backend'
import Design from './Components/SubMenu/Design'
import Frontend from './Components/SubMenu/Frontend'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />

          <Route path='service' element={<Service />}>

            <Route path='design' element={<Design />} />
            <Route path='frontend' element={<Frontend />} />
            <Route path='backend' element={<Backend />} />

          </Route>

          <Route path='contact' element={<Contact />} />
          <Route path='help' element={<Help />} />

          <Route path='*' element={<Error />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
