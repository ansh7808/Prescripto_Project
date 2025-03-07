import React from 'react'
import { assets } from '../assets/assets'

export const Footer = () => {

  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* Left Section  */}
            <div >
             <img className='mb-5 w-40' src={assets.logo} alt="" />
             <p className='w-full md:w-2/3 text-gray-600 leading-6 '>Prescripto is your trusted healthcare companion, connecting you with top doctors for hassle-free appointments.
                 Your health, our priority—because timely care matters.</p>
            </div>

            {/* Center Section  */}
            <div>
              <p className='text-xl font-medium mb-5 '>COMPANY</p>
              <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
              </ul>
            </div>

            {/* Right Section */}
            <div>
              <p className='text-xl font-medium mb-5 '>GET IN TOUCH</p>
               <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+91-822-XXX-XXXX</li>
                <li>anshgupta@gmail.com</li>
               </ul>
            </div>
        </div>
        {/* CopyRIght Text */}
        <div>
          <hr/>
          <p className='text-sm py-5 text-center '>Copyright 2025 @Prescripto - All Right Reserved.</p>
        </div>
    </div>
  )
}
