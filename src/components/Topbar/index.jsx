import React from 'react'
import home from '../../assets/home.png'
import video from '../../assets/Vector.png'
import network from '../../assets/Vector (1).png'
import n from '../../assets/Vector (2).png'
import me from '../../assets/Vector (3).png'
import { useNavigate } from 'react-router-dom'
export default function Topbar() {
    const navigate = useNavigate()
    const goToRoute = (route) => {
        navigate(route)
    }

  return (
    <div className='bg-[#D9D9D9] h-[60px] w-full '>
        <div className='container m-auto '>
          <div className='flex justify-center items-center'>
            <div className='align-middle flex '>
            <div className='mr-[48px] mt-3 h-[30px]'>
              <img src={home} alt="" onClick={() =>goToRoute("/home") }/></div>
            <div className='mx-[48px] mt-4 h-[25px]'>
              <img src={video} alt="video icon" />
            </div>
            <div className='mx-[48px] mt-3 h-[30px]'>
              <img src={network} alt="video icon" />
            </div>
            <div className='mx-[48px] mt-3 h-[30px]'> 
              <img src={n} alt="video icon" />
            </div>
            <div className='mx-[48px] mt-3 h-[30px]'>
              <img src={me} alt="video icon" />
            </div>
            </div>
          </div>
          <div  className='flex justify-end items-end gap-5 '>
            <input className='w-[224px] h-[40px] border border-[#000000] rounded-lg outline-none mt-[-32px] ml-[30px]' type="text" />
            <div className='h-[40px] w-[40px] bg-black rounded-full mt-[-30px]'>
              <img src="" alt="" />
            </div>
          </div>



        </div>
    </div>
  )
}
