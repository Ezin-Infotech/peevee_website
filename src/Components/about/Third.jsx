import React from 'react'

const Third = () => {
  return (
    <div className='lg:flex mt-12'>
        <div className='lg:w-1/2 mx-16'>
            <img src="https://procargo.com/wp-content/uploads/2018/11/Our-Mission.jpg" alt="" className='w-[48rem] m-auto'/>
        </div>
        <div className='m-8 lg:w-1/2 flex flex-col max-w-3xl justify-center'>
            <p className='text-[#ff9f00] text-3xl mb-2'>OUR MISSION</p>
            <p className='text-xl text-gray-500 font-light'>To be the best in our industry by continuing to improve our level of service.</p>
            <p className='text-[#ff9f00] text-3xl mt-4 mb-2'>OUR COMMITMENT</p>
            <p className='text-xl text-gray-800 font-light'>We commit ourselves to excellence for our customers and partners through continuous improvement of our service, technology, and communication.</p>
        </div>
    </div>
  )
}

export default Third