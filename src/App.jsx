import React, { useEffect } from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import About from './pages/About'
import Home from './pages/Home'
import Aos from 'aos'

useEffect (()=>{
   Aos.init()
},[])

const App = () => {
  return (
    <div className=''>
      <BrowserRouter>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
           


       </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App