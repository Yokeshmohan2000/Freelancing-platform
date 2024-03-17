import React from 'react'

function Navbar() {
  return (
    <div className=' bg-white navbar sticky top-0 z-50'>
        <nav className="bg-white-800 py-6 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-black text-xl font-bold">Freelance Platform</a>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-white text-black hover:text-gray-400 pl-6">Home</a></li>
          <li><a href="/about" className="text-white text-black hover:text-gray-400 pl-6">About</a></li>
          <li><a href="/find-work" className="text-white text-black hover:text-gray-400 pl-6">Find Work</a></li>
          <li><a href="/Login" className="text-white text-black hover:text-gray-400 pl-6"><span className='font-bold'>Login</span></a></li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Navbar