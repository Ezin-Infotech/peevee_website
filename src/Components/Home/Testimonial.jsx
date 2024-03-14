import React from 'react'

const Testimonial = () => {
  return (
    <div className='bg-[#f7f7f7] w-full'>
        <div className='mx-auto py-20 px-8'>
            <p className='text-4xl font-light text-center'>WHAT CLIENTS ARE SAYING</p>
            <hr className='w-64 mx-auto  border-blue-500 my-8'/>
            <div className='md:gap-5 lg:flex lg:gap-8 xl:w-2/3 xl:m-auto'>
                <div className='w-full lg:w-1/3'>
                    <p className='text-gray-500 italic '>“Pro Cargo is professional, courteous, proactive, and has some of the most competitive pricing in the business. I would highly recommend them to anyone for their logistics needs for ocean, air, or project cargo.”</p>
                    <p className='font-bold text-gray-500 mt-3'>Bobby Jacob, <a className='font-normal text-[#3d83e4] cursor-pointer'>MATEEN Express</a></p>
                </div>
                <div className='w-full my-8 lg:my-0 lg:w-1/3'>
                    <p className='text-gray-500 italic'>“Our relationship with Procargo dates back to 2007 and we’ve never looked back since. The family-like culture and understanding has given us a lot to depend on and will continue to do so.”</p>
                    <p className='font-bold text-gray-500 mt-3'>Brad Anderson, <a className='font-normal text-[#3d83e4] cursor-pointer'>Albemarle</a></p>
                </div>
                <div className='w-full lg:w-1/3'>
                    <p className='text-gray-500 italic'>“McIlhenny Company has acquired Pro Cargo’s services for 10 years. Because of their excellent and “over the top” assistance, our international shipments have been delivered in good order and in a timely manner.”</p>
                    <p className='font-bold text-gray-500 mt-3'>Patricia Thompson, <a className='font-normal text-[#3d83e4] cursor-pointer'>Tabasco – McIlhenny Co.</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial