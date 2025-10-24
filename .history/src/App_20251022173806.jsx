  import React from 'react'
  import Navbar from './components/Navbar'
 
import Hero from './components/Hero'
import Badges from './components/Badges'

  const App = () => {
    return (
      <div className='min-h-screen bg-white'>
        <Navbar/>
        <Hero/>
        <Badges/>
        
        
      </div>
    )
  }

  export default App