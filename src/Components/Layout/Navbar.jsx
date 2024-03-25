import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// import { useNavigate } from 'react-router-dom';
function Navbar() {
    const [user1, setUser] = useState(false)
    let [open, setOpen] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const navigate = useNavigate()

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
                <div className={`md:flex  justify-between bg-[#bf922d] md:bg-[#bf922d] md:px-10 `}>
                    <div className={`font-bold text-2xl cursor-pointer p-4 ${!open ? 'border-b-2 border-black md:border-none' : ''}  flex items-center justify-between  font-[Poppins]`}>
                        <div className='flex'>
                            <img className='w-36' src="logo.png" alt="" />
                        </div>

                        {/* Toggle Button */}
                        <button className="md:hidden block text-white" onClick={handleToggle}>
                            <i className='fa-solid fa-bars text-[#dce2e8]' />
                        </button>
                    </div>


                    <ul className={`md:flex md:items-center md:pb-0 absolute md:static opacity-0.8 md:z-auto left-0 w-full md:w-auto md:pl-0 pl-4 bg-[#bf922d   ] bg-opacity-20 md:bg-[#bf922d ]  border-t border-indigo-600  md:border-none ${open ? 'z-1 relative opacity-0.8  ' : ' md:opacity-100 opacity-0'}`}>
                        <li className={`md:ml-8 font-base md:my-0 cursor-pointer my-4 text-white `} onClick={() => {navigate('/');handleToggle()}} > HOME </li>
                        <li className={`md:ml-8 font-base md:my-0  cursor-pointer  my-4 text-white`} onClick={() => {navigate('/services');handleToggle()}}>
                            SERVICES
                        </li>
                        <li className={`md:ml-8 font-base md:my-0 cursor-pointer  my-4 text-white`} onClick={() => {navigate('/about');handleToggle()}} > ABOUT</li>
                        <li className={`md:ml-8 font-base md:my-0 cursor-pointer  my-4 text-white`} onClick={() => {navigate('/career');handleToggle()}} > CAREERS</li>
                        <li className={`md:ml-8 font-base md:my-0 cursor-pointer pb-4 md:pb-0  my-4 text-white`} onClick={() =>{navigate('/contact');handleToggle()}} > CONTACT</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar