import React, { useState } from 'react'
import Container from '../layout/Container';

function IconSlider() {

 const [move, setMove] = useState<boolean>(false);

  function moveR() {
    setMove(true);
  }
  function moveL() {
    setMove(false);
  }

  return (
    <Container >
    <div  className={`flex justify-between h-18 w-full overflow-hidden transition duration-500 ease-in-out mt-7`} dir='rtl'>
        <div
          onClick={moveR}
          className={`
            ${move ? "hidden" : "flex"}
            text-2xl text-orange-600 absolute bg-white w-10 h-10 rounded-xl text-center justify-center items-center shadow-md cursor-pointer trasnsition ease-in-out duration-500 right-5 top-[655px] hover:bg-orange-600 hover:text-white`}
        >
          ▶
        </div>
        <div className={`mr-0 flex justify-between h-full text-center w-[1400px] transition duration-500 ease-in-out
            ${move ? "translate-x-[300px]" : ""}
            `} >
        <div className='flex flex-col justify-center w-52 items-center h-1/3 px-5 border-gray-200 border-x-[1px]'><span className='text-4xl'>🧹</span><span className='text-xs opacity-70 mt-1'>برندهای پوشاک</span></div>
        <div className='flex flex-col justify-center w-52 items-center h-1/3 px-5 border-gray-200 border-x-[1px]'><span className='text-4xl'>🛏️</span><span className='text-xs opacity-70 mt-1'>برندهای پوشاک</span></div>
        <div className='flex flex-col justify-center w-52 items-center h-1/3 px-5 border-gray-200 border-x-[1px]'><span className='text-4xl'>🧣</span><span className='text-xs opacity-70 mt-1'>برندهای پوشاک</span></div>
        <div className='flex flex-col justify-center w-52 items-center h-1/3 px-5 border-gray-200 border-x-[1px]'><span className='text-4xl'>👕</span><span className='text-xs opacity-70 mt-1'>برندهای پوشاک</span></div>
        <div className='flex flex-col justify-center w-52 items-center h-1/3 px-5 border-gray-200 border-x-[1px]'><span className='text-4xl'>📦</span><span className='text-xs opacity-70 mt-1'>برندهای پوشاک</span></div>
        <div className='flex flex-col justify-center w-52 items-center h-1/3 px-5 border-gray-200 border-x-[1px]'><span className='text-4xl'>🧹</span><span className='text-xs opacity-70 mt-1'>برندهای پوشاک</span></div>
        <div className='flex flex-col justify-center w-52 items-center h-1/3 px-5 border-gray-200 border-x-[1px]'><span className='text-4xl'>🧣</span><span className='text-xs opacity-70 mt-1'>برندهای پوشاک</span></div>
        <div className='flex flex-col justify-center w-52 items-center h-1/3 px-5 border-gray-200 border-x-[1px]'><span className='text-4xl'>👕</span><span className='text-xs opacity-70 mt-1'>برندهای پوشاک</span></div>
        <div className='flex flex-col justify-center w-52 items-center h-1/3 px-5 border-gray-200 border-x-[1px]'><span className='text-4xl'>📦</span><span className='text-xs opacity-70 mt-1'>برندهای پوشاک</span></div>        
        <div className='flex flex-col justify-center w-52 items-center h-1/3 px-5 border-gray-200 border-x-[1px]'><span className='text-4xl'>👕</span><span className='text-xs opacity-70 mt-1'>برندهای پوشاک</span></div>
        <div className='flex flex-col justify-center w-52 items-center h-1/3 px-5 border-gray-200 border-x-[1px]'><span className='text-4xl'>📦</span><span className='text-xs opacity-70 mt-1'>برندهای پوشاک</span></div>
        </div>
        <div
          onClick={moveL}
          className={`${move ? "flex" : "hidden"}
            text-orange-600 text-2xl absolute bg-white w-10 h-10 rounded-xl text-center flex justify-center items-center shadow cursor-pointer trasnsition ease-in-out duration-500 left-5 top-[655px] hover:bg-orange-600 hover:text-white`}
        >
          ◀
        </div>
    </div>
    </Container>
  )
}

export default IconSlider 