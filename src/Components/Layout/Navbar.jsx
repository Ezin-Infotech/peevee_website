import React, { useEffect, useState } from 'react'

// import { useNavigate } from 'react-router-dom';
function Navbar() {
    const [user1, setUser] = useState(false)
    let [open, setOpen] = useState(false)
    const [showModal, setShowModal] = useState(false)
    // const navigate = useNavigate()

    const handleToggle = () => {
        setOpen(!open); // Toggle the open state
    };
    const handleLogout = () => {
        // Redux --
        // Local Storage
        localStorage.removeItem('UserToken')
        // window.location.reload()
        setUser(false)
        // navigate('/')
    }



    return (
        <div>
            <div className='shadow-md w-full top-0 left-0 relative'>
                <div className={`md:flex  justify-between bg-[#161616] md:bg-black md:p-4  md:px-10 `}>
                    <div className={`font-bold text-2xl cursor-pointer p-4 ${!open ? 'border-b-2 border-black md:border-none' : ''}  flex items-center justify-between  font-[Poppins]`}>
                        <div className='flex'>
                            <img className='w-14' src="logo192.png" alt="" />
                            <span className='text-white'>This is Logo Image</span>
                        </div>

                        {/* Toggle Button */}
                        <button className="md:hidden block text-white" onClick={handleToggle}>
                            <i className='fa-solid fa-bars text-[#dce2e8]'/>
                        </button>
                    </div>



                    <ul className={`md:flex md:items-center md:pb-0 absolute md:static opacity-0.8 md:z-auto left-0 w-full md:w-auto md:pl-0 pl-4 bg-black bg-opacity-20 md:bg-black  border-t border-indigo-600  md:border-none ${open ? 'z-1 relative opacity-0.8  ' : ' md:opacity-100 opacity-0'}`}>
                        <li className='md:ml-8 font-base md:my-0 my-7 text-gray-200 hover:text-gray-200 duration-500' > HOME </li>
                        <li className="md:ml-8 font-base md:my-0 my-7 text-gray-200 hover:text-gray-200 duration-500">
                            SERVICES
                        </li>
                        <li className='md:ml-8 font-base md:my-0 my-7 text-gray-200 hover:text-gray-200 duration-500'> ABOUT</li>
                        <li className='md:ml-8 font-base md:my-0 my-7 text-gray-200 hover:text-gray-200 duration-500'> CAREERS</li>
                        <li className='md:ml-8 font-base md:my-0 text-gray-200 hover:text-gray-200 duration-500'> CONTACT</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar