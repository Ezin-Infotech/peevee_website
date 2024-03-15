import React from 'react'

const LearnMore = () => {
  return (
    <div className='flex justify-center items-center py-24 bg-[#f7f7f7]'>
        <div className='text-center '>
            <p className='text-3xl md:text-5xl font-light'>WE GO ABOVE AND BEYOND</p>
            <p className='text-gray-500 text-xl md:text-2xl font-light mt-3 px-5'>Personalized freight forwarding options that satisfy your particular needs.</p>
            <div className='w-full lg:flex justify-between my-24'>
                <p className='text-lg'>Evaluate</p>
                <p className='text-lg my-12 lg:my-0'>Personalize</p>
                <p className='text-lg'>Ajust</p>
            </div>
            <a className='bg-[#3d83e4] text-white px-6 py-3 rounded cursor-pointer hover:bg-[#3d83e426] hover:text-blue-400'>LEARN MORE</a>
        </div>
    </div>
  )
}

export default LearnMore