import React from 'react'

export default function LoginComponent() {
  return (
    <div className='bg-white w-screen h-screen relative flex justify-center items-center'>
      <div className ='w-[920px] h-[780px] bg-[#FBF8FF] rounded-2xl '>
        <h1 className="font-bold text-center text-mon text-[64px] pt-[42px] ">Welcome Back <span className='text-rcolor '>You!</span></h1>

          <div className='relative mt-[56px] w-[536px] '>
          <input className='w-full h-[81px] border border-rcolor rounded-lg bg-none outline-none py-[26px] px=[52px] pl-[10px] ml-[192px]' type="email"  placeholder=''/>
          <p className=' top-[-25px] left-[201px] font-mon font-medium font-semibol text-[13px] text-[#000000] tracking-[1px] absolute'>Email Address</p>
          </div>
          
          <div className='relative mt-[36px] w-[536px] '>
          <input className='w-full h-[81px] border border-rcolor rounded-lg outline-none py-[26px] px=[52px] pl-[10px] ml-[192px]' type="email"  placeholder=''/>
          <p className=' top-[-25px] left-[201px] font-mon font-medium font-semibol text-[13px] text-[#000000] tracking-[1px] absolute'>Password</p>
          </div>
          
          <div className='relative text-center w-[140px] mr-[195px]'>
          <button  className='absolute font-mon font-semobol text-whit left-[192px] top-[25px] py-[2px] px-[38px] font-[16px] border border-rcolor rounded-lg  w-full cursor-pointer'>Log in</button>
          </div>

          <div className='relative flex justify-center items-center'>
          <div className='mt-[90px]  bg-[#D5D3DA] w-[536px] h-[2px]  '></div>
          <p className='bg-[#FBF8FF] px-[10px] font-pop font-regular font-semibol text-[24px] mb-[-90px]  text-rcolor tracking-[1px] absolute'>or</p>
          </div>

          <div className='text-center w-[427px]'>
          <button className=' font-mon font-semibold text-[16px] text-white bg-rcolor py-[20px] rounded-2xl w-full h-[70px] mt-[50px]  ml-[247px] cursor-pointer'>Lon in with Google</button>
          </div>

          <div className='text-center w-[427px]'>
          <button className=' font-mon font-semibold text-[16px] text-white bg-rcolor py-[20px] rounded-2xl w-full h-[70px] mt-[20px]  ml-[247px] cursor-pointer'>Log in with Google</button>
          </div>

          <div className='text-center pt-[20px]'>
            <p>Don’t have an account ? <span className='text-rcolor'>Sign up</span> </p>
          </div>
          


      </div>
    </div>
  )
}
 