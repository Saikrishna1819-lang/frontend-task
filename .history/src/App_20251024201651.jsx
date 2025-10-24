  import React from 'react'
  import Navbar from './components/Navbar'
 
import Hero from './components/Hero'
import Badges from './components/Badges'
import Benefits from './components/Benifits'
import Table from './components/Table'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Banner from './components/Banner'
import LowerBanner from './components/LowerBanner'
import Cards from './components/Cards'



  const App = () => {
    return (
      <div className='min-h-screen bg-white'>
        <Navbar/>
        <Hero/>
        <Badges/>
        <Cards/>
        <Benefits/>
        <Table/>
          <Banner/>
        <Testimonials/>
        <LowerBanner/>
        <Footer/>
        
        
      </div>
    )
  }

  export default App