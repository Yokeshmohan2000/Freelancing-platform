import React from 'react'
import Navbar from './Navbar';

function Home() {
  return (
    <>
    

    <div className="container mx-auto mt-24 flex h-screen">
      <div className='mt-10 ml-24 '>
        <h1 className="text-6xl font-semibold text-green-800  mb-8">
         <span className='mb-8'> How work</span><br/>
          <span className='mb-8'>should work</span></h1>
        <p className=' mb-8'>Forget the old rules. You can have the best people.
          Right now. Right here.</p>
        <a href='/Chosework'><button class="mb-8 w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
          Get Started
        </button>
        </a>
      </div>

        <div className='ml-40 '>
          <img
            src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_440,h_300,f_auto,q_auto,dpr_2.0/brontes/hero/searching-talent@1x.png"
            alt="Freelance Platform Image"
            className="w-160 h-80 rounded-lg "
            
          />
        </div>
    </div>
    </>
  )
}

export default Home;