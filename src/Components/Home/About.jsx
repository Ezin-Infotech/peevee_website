import React from 'react'

const About = () => {
  return (
    <div className='lg:flex mt-12'>
        <div className='lg:w-1/2'>
            <img src="Logistics.png" alt="" className='w-[48rem] m-auto'/>
        </div>
        <div className='m-8 lg:w-1/2 flex flex-col max-w-3xl justify-center'>
            <p className='text-[#3d83e4] text-4xl lg:text-4xl font-light mb-5'>SERVICE IS OUR EDGE</p>
            <p className='text-xl md:text-2xl text-gray-500 font-light'>ProCargo USA offers a complete range of import and export forwarding services via all modes of transport.</p>
            <p className='text-xl md:text-2xl text-gray-500 font-light my-5 md:my-8'>Our professional expertise covers every spectrum: From initial set-up to transport documents (including letters of credit); coordination and customs formalities to follow-up and packing/crating services.</p>
            <a href="" className='w-fit bg-[#3d83e4] text-white px-6 py-3 rounded-md hover:bg-[#3d83e40f] hover:text-blue-400 hover:border hover:border-blue-500'>ABOUT PRO CARGO</a>
        </div>
    </div>
  )
}

export default About