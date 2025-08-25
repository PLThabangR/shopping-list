import React from 'react'
import Registration from '../registration/Registration'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
 <div className=' h-screen md:w-auto  sm:w-full container p-2 flex flex-col items-center'>
        

 <Registration/>


      </div>



    </div>
  )
}

export default Home