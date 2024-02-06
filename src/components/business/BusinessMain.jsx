
import { useState } from 'react'
import Hero from './Hero'
import Menu from './Menu'
import Pricing from './Pricing';

const BusinessMain = () => {

  const [isMenuOpen, setIsMenuOpen ] = useState(false);


  return (
    <div className=''>

        <Menu isMenuOpen={isMenuOpen} onClick={()=> setIsMenuOpen(!isMenuOpen)}/>

        <Hero />

        <Pricing />


    </div>
  )
}

export default BusinessMain