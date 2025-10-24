  import React from 'react'
  import Navbar from './components/Navbar'
 
import Hero from './components/Hero'
import Badges from './components/Badges'
import Benefits from './components/Benifits'
import { Table } from 'lucide-react'

  const App = () => {
    return (
      <div className='min-h-screen bg-white'>
        <Navbar/>
        <Hero/>
        <Badges/>
        <Benefits/>
        <Table/>
        
        
      </div>
    )
  }

  export default App