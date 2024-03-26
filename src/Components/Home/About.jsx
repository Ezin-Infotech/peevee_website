import React from 'react'

const About = () => {
  return (
    <div className='lg:flex mt-12'>
        <div className='lg:w-1/2'>
            <img src="Logistics.jpg" alt="" className='w-[48rem] m-auto'/>
        </div>
        <div className='m-8 lg:w-1/2 flex flex-col max-w-3xl justify-center'>
            <p className='text-[#3d83e4] text-4xl lg:text-4xl font-light mb-5'>Services</p>
            <p className='text-xl md:text-2xl text-gray-500 font-light'>PEEVEE FREIGHT provides a worldwide network for all of your freight needs, with guaranteed and time- concrete  services, supported by preferred carriers with same day collection and delivery 🚚</p>
            <p className='text-xl md:text-2xl text-gray-500 font-light my-5 md:my-8'></p>
            <a href="" className='w-fit bg-[#3d83e4] text-white px-6 py-3 rounded-md hover:bg-[#3d83e40f] hover:text-blue-400 hover:border hover:border-blue-500'>ABOUT PEEVEE FREIGHT</a>
        </div>
    </div>
  )
}

export default About