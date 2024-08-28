import React from 'react'
import image from './../../assets/OBJECTS.png'
export default function SignUp() {

  
  return (
    <div className='w-screen	h-screen flex '>
      <div className='w-1/2 mt-[140px] ml-[160px]'>
        <img  src={image} alt="" />
      </div>
      <div className='w-1/2'>
        <div className='py-[30px] px-[35px] mt-[100px] bg-[#FBF8FF] w-[682px] rounded-2xl'>
          <h1 className='font-pop text-[70px] font-bold text-rcolor '>Happening <samp className='font-pop text-[70px] text-black font-semibold'>now</samp></h1>
          <p className='font-mon text-[48px] '>Join <samp className='font-mon text-rcolor'>today.</samp></p>
          <div className='text-center w-[427px] mt-[40px]'>
          <button className=' font-mon font-semibold text-[16px] text-white bg-rcolor py-[20px] rounded-3xl w-full h-[70px] cursor-pointer'>Create account</button>
          </div>

          <div className='bg-[#D5D3DA] w-[420px] h-[2px] my-[35px] relative flex justify-center items-center '>
          <p className='bg-[#FBF8FF] px-[10px] font-pop font-regular font-semibol text-[24px]  text-rcolor tracking-[1px] absolute'>or</p>
          </div>


          <div className='text-center w-[427px] '>
          <button className=' font-mon font-semibold text-[16px] text-white bg-rcolor py-[20px] rounded-3xl w-full h-[70px] cursor-pointer'>Signup with Google</button>
          </div>

          <div className='text-center w-[427px] my-[35px]'>
          <button className=' font-mon font-semibold text-[16px] text-white bg-rcolor py-[20px] rounded-3xl w-full h-[70px] cursor-pointer'>Signup with Apple</button>
          </div>

          <div>
            <p className='w-[427px] font-mon font-normal text-[16px]'>
            By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
            </p>
          </div>

          <div className='relative flex mt-[60px] mb-[30px]' >
            <p className='font-mon font-normal text-[24px]'>Already have an account?</p>
            <button className='absolute font-mon font-semobol ml-[400px] py-[2px] px-[38px] font-[16px] border border-rcolor rounded-full  w-[140px] cursor-pointer'>Log in</button>
          </div>

        </div>
      </div>
      
    </div>
  )
}
