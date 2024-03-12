import React from 'react'

const Banner = () => {
  return (
    <div className='w-screen h-[40rem] flex justify-center items-center' style={{ backgroundImage: 'url("https://procargo.com/wp-content/uploads/2018/07/Header.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='w-1/2 p-12 bg-[rgba(0,0,0,0.8)] '>
            <p className='text-white text-5xl font-light'>WE ARE PROCARGO USA</p>
            <p className='text-[#8eb8f1] text-4xl font-light my-3'>Logistics service providers for global commerce.</p>
            <p className='text-[#dce2e8] text-3xl font-light mb-12'>ProCargo USA provides cost-effective, innovative solutions for your cargo and transportation challenges.</p>

              <a className='text-white border border-[#3d83e4] py-3 px-4'>LET'S GET TO WORK</a>
        </div>
    </div>
  )
}

export default Banner