  import React from 'react'
  import Navbar from './components/Navbar'
 
import Hero from './components/Hero'
import Badges from './components/Badges'
import Benefits from './components/Benifits'
import Table from './components/Table'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'



  const App = () => {
    return (
      <div className='min-h-screen bg-white'>
        <Navbar/>
        <Hero/>
        <Badges/>
        <Benefits/>
        <Table/>
        <Testimonials/>
        <Footer/>
        
        
      </div>
    )
  }

  export default App