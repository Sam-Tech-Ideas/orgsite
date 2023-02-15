import React from 'react'
import v1 from '../assets/v2.svg'

const Contact = () => {
  return (
    <div className='' >
<section class="text-white">
  <div class=" py-24 px-3 ">
    <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start ">
      <h1 class="flex-grow sm:pr-16 text-5xl font-extrabold text-white items-center p-3">Contact us for the service you want to use.</h1>
      <a href="mailto:axestech1@gmail.com" target='_blank'className='flex-shrink-0 text-white bg-blue-600 border-0 py-2 px-8  hover:bg-blue-700 rounded text-lg mt-10 flex sm:mt-0 justify-center'> 
      Contact Us
      </a>
      
    </div>
  </div>
  <img src={v1} alt="CONTENT" className='p-3'/>
</section>
    </div>
  )
}

export default Contact
