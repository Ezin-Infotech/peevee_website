import React from 'react'

const About = () => {
  return (
    <div className='lg:flex mt-12'>
        <div className='lg:w-1/2'>
            <img src="Logistics.png" alt="" className='w-[48rem] m-auto'/>
        </div>
        <div className='m-8 lg:w-1/2 flex flex-col max-w-3xl justify-center'>
            <p className='text-[#3d83e4] text-4xl lg:text-4xl font-light mb-5'>SERVICE IS OUR EDGE</p>
            <p className='text-xl md:text-2xl text-gray-500 font-light'>PEEVEE provides a full collection of import and export forwarding services across all transportation types.</p>
            <p className='text-xl md:text-2xl text-gray-500 font-light my-5 md:my-8'>Our comprehensive range of professional skills includes everything from initial setup to transit documentation (including letters of credit); from follow-up and customs procedures to packing and crating services.</p>
            <a href="" className='w-fit bg-[#3d83e4] text-white px-6 py-3 rounded-md hover:bg-[#3d83e40f] hover:text-blue-400 hover:border hover:border-blue-500'>ABOUT PEEVEE</a>
        </div>
    </div>
  )
}

export default About