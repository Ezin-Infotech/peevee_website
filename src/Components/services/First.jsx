import React from 'react'

const First = () => {
  return (
    <div className='mx-8'>
        <div className='my-8 gap-8 lg:flex'>
            <div className='p-7 bg-[rgba(0,0,0,0.7)] mb-5 md:w-1/2'>
                <p className='text-white text-3xl font-light'>OUR SERVICES</p>
                <p className='text-white text-2xl font-light'>Learn more about our services.</p>
            </div>
            <div>
                <img src="https://procargo.com/wp-content/uploads/2018/11/Services-Hdr-768x240.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default First