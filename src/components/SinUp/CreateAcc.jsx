import React from 'react'


export default function CreateAcc() {
  return (
    <div className=' relative flex justify-center items-center '>
      <div className='bg-[#FBF8FF] py-[100px] px-[100px] mt-[120px]'>
      <h1 className='font-mon font-bold text-[48px] text-scolor '>Create Your <samp className='font-mon font-bold text-[48px] text-rcolor '>account</samp></h1>
      <div className='my-[20px]'>
      <p>Full Name</p>
        <input type="text" className='block pl-4 text-gray-900  placeholder:text-gray-400 py-2 w-[500px] border border-rcolor rounded-lg outline-none ' placeholder="Full Name"/>
      </div>
      <div className='my-[20px]'>
        <p>Email  or Number</p>
        <input type="text" className='block pl-4 text-gray-900  placeholder:text-gray-400 py-2 w-[500px] border border-rcolor rounded-lg outline-none ' placeholder="Full Name"/>
      </div>
      <div className='my-[20px]'>
        <p>Password</p>
        <input type="text" className='block pl-4 text-gray-900  placeholder:text-gray-400 py-2 w-[500px] border border-rcolor rounded-lg outline-none ' placeholder="Full Name"/>
      </div>
      <div className='my-[20px]'>
        <p>Confirm Password</p>
        <input type="text" className='block pl-4 text-gray-900  placeholder:text-gray-400 py-2 w-[500px] border border-rcolor rounded-lg outline-none ' placeholder="Full Name" />
      </div>
      <div className=' text-center'>
      <button className=' font-mon font-semibold text-[16px] text-white bg-rcolor  rounded-full w-[320px] py-4 cursor-pointer text-center my-4'>Create account</button>
      <p>Already have an account?<samp> Sign up</samp></p>
      </div>

      </div>
      
      
    </div>
  )
}
