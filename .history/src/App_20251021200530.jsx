  import React from 'react'
  import Navbar from './components/Navbar'
  import { Routes,Route } from 'react-router-dom'
  import Home from './pages/Home'
  import About from './pages/About'
  import Contact from './pages/Contact'

  const App = () => {
    return (
      <div className='flex flex-col'>
        <Navbar/>
        <div className='mt-[80px]'>
          <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/aboutUs' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
        </div>
        
      </div>
    )
  }

  export default App