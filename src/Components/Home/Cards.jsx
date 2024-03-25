import React from 'react'

const Cards = () => {
    const images = [
        
    ]
  return (
    <div className='mb-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:mx-24' >
            {
                images.map((image,index) => (
                    <div key={index} className='w-full'>
                        <img src={image} alt="" width={800} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Cards