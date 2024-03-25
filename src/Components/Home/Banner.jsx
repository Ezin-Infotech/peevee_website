import React from 'react'

const Banner = () => {
  return (
    <div className=' min-h-96 flex justify-center items-center' style={{ backgroundImage: 'url("https://procargo.com/wp-content/uploads/2018/07/Header.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='p-8 bg-[rgba(191,146,45,0.4)] w-[21rem] md:w-[38rem] lg:w-[64rem] my-5 md:my-24  mx-auto'>
            <p className='text-white text-4xl lg:text-5xl font-light'>WE ARE HERE</p>
            <p className='text-white text-3xl lg:text-4xl font-light my-3'>For your complete logistics solutions</p>
            <p className='text-[#dce2e8] text-2xl lg:text-3xl font-light mb-12'>PEEVEE offers creative, reasonably priced solutions for your shipping concern's.</p>
            <a className='text-white border border-gray-400 py-3 px-4 hover:border-[rgba(0,0,0,0.05)] hover:bg-[rgba(255,255,255,0.2)] cursor-pointer'>LET'S GET TO WORK</a>
        </div>
    </div>
  )
}

export default Banner