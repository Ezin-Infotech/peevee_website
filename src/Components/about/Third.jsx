import React from 'react'

const Third = () => {
  return (
    <div className='lg:flex mt-12'>
        <div className='lg:w-1/2 mx-16'>
            <img src="https://procargo.com/wp-content/uploads/2018/11/Our-Mission.jpg" alt="" className='w-[48rem] m-auto'/>
        </div>
        <div className='m-8 lg:w-1/2 flex flex-col max-w-3xl justify-center'>
            <p className='text-[#ff9f00] text-3xl mb-2'>OUR MISSION</p>
            <p className='text-xl text-gray-500 font-light'>Maintaining our high standard of service will help us become the best in our business.</p>
            <p className='text-[#ff9f00] text-3xl mt-4 mb-2'>OUR COMMITMENT</p>
            <p className='text-xl text-gray-800 font-light'>Through constant advancements in technology, communication, and service, we commit to provide our clients and partners with excellence.</p>
        </div>
    </div>
  )
}

export default Third