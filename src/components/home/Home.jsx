import React from 'react'
import Banner from './banner/Banner'
import Carosuel from './carsosuel/Carosuel'
import DaisyCard from './card/DaisyCard'
 import ProductFooter from './productfooter/ProductFooter'
import Best_sellers from './bestSellers/Best_sellers'

const Home = () => {
  return (
    <div> 
        <Banner/>
        <Carosuel/>
         <DaisyCard/>
         <Best_sellers/>
         <ProductFooter/>
    </div>
  )
}

export default Home