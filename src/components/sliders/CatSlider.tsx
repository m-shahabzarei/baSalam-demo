import React, { useState } from 'react'
import Container from '../layout/Container';

function CatSlider() {

 const [move, setMove] = useState<boolean>(false);

  function moveR() {
    setMove(true);
  }
  function moveL() {
    setMove(false);
  }

  return (
    <Container>
    <div  className={`flex justify-between  h-fit w-full transition duration-500 ease-in-out mt-9 overflow-hidden`} dir='rtl'>
        <div
          onClick={moveR}
          className={`
            ${move ? "hidden" : "flex"}
            text-2xl max-md:hidden text-orange-600 absolute bg-white w-10 h-10 rounded-xl text-center justify-center items-center shadow-md cursor-pointer trasnsition ease-in-out duration-500 right-5 top-[2060px] hover:bg-orange-600 hover:text-white`}
        >
          ▶
        </div>
        <div className={`flex justify-evenly h-full text-center w-[1500px] transition duration-500 ease-in-out
            ${move ? "translate-x-1/4" : ""}
            `} >
        <div className='flex flex-col justify-center w-52 items-center h-1/3 px-5 border-gray-200 border-x-[1px]'><span className='text-4xl'><img className='w-12 h-fit' src="https://statics.basalam.com/public-76/photo/explore/aN/04-21/qQy6ILLAWJQcYMCmLYNsgtUmLbVU7eoc25bx2moYYgoimmyO9G.SVG"/></span><span className='text-xs opacity-70 mt-1'>برندهای پوشاک</span></div>
        <div className='flex flex-col justify-center w-52 items-center h-1/3 px-5 border-gray-200 border-x-[1px]'><span className='text-4xl'><img className='w-12 h-fit' src="https://statics.basalam.com/public-76/photo/explore/aN/04-21/ihA4MB6lb0k3crzIaVD3kou9cR84ZRCsmqHto7Xr63gK3n6TMe.SVG"/></span><span className='text-xs opacity-70 mt-1'>برندهای پوشاک</span></div>
        <div className='flex flex-col justify-center w-52 items-center h-1/3 px-5 border-gray-200 border-x-[1px]'><span className='text-4xl'><img className='w-12 h-fit' src="https://statics.basalam.com/public-76/photo/explore/aN/04-21/xPEloWwsRCQcM2dNKhH8P0wNxUxJWS5bkoeCR1RPszS83oqv2a.SVG"/></span><span className='text-xs opacity-70 mt-1'>برندهای پوشاک</span></div>
        <div className='flex flex-col justify-center w-52 items-center h-1/3 px-5 border-gray-200 border-x-[1px]'><span className='text-4xl'><img className='w-12 h-fit' src="https://statics.basalam.com/public-76/photo/explore/aN/04-21/fhZTlPyGjxIu8zpwq9VdQfeys4TPObl8M6qlcvZxNk9KyZPi2s.SVG"/></span><span className='text-xs opacity-70 mt-1'>برندهای پوشاک</span></div>
        <div className='flex flex-col justify-center w-52 items-center h-1/3 px-5 border-gray-200 border-x-[1px]'><span className='text-4xl'><img className='w-12 h-fit' src="https://statics.basalam.com/public-76/photo/explore/aN/04-21/qQy6ILLAWJQcYMCmLYNsgtUmLbVU7eoc25bx2moYYgoimmyO9G.SVG"/></span><span className='text-xs opacity-70 mt-1'>برندهای پوشاک</span></div>
        <div className='flex flex-col justify-center w-52 items-center h-1/3 px-5 border-gray-200 border-x-[1px]'><span className='text-4xl'><img className='w-12 h-fit' src="https://statics.basalam.com/public-76/photo/explore/aN/04-21/ihA4MB6lb0k3crzIaVD3kou9cR84ZRCsmqHto7Xr63gK3n6TMe.SVG"/></span><span className='text-xs opacity-70 mt-1'>برندهای پوشاک</span></div>
        <div className='flex flex-col justify-center w-52 items-center h-1/3 px-5 border-gray-200 border-x-[1px]'><span className='text-4xl'><img className='w-12 h-fit' src="https://statics.basalam.com/public-76/photo/explore/aN/04-21/xPEloWwsRCQcM2dNKhH8P0wNxUxJWS5bkoeCR1RPszS83oqv2a.SVG"/></span><span className='text-xs opacity-70 mt-1'>برندهای پوشاک</span></div>
        <div className='flex flex-col justify-center w-52 items-center h-1/3 px-5 border-gray-200 border-x-[1px]'><span className='text-4xl'><img className='w-12 h-fit' src="https://statics.basalam.com/public-76/photo/explore/aN/04-21/fhZTlPyGjxIu8zpwq9VdQfeys4TPObl8M6qlcvZxNk9KyZPi2s.SVG"/></span><span className='text-xs opacity-70 mt-1'>برندهای پوشاک</span></div>
        <div className='flex flex-col justify-center w-52 items-center h-1/3 px-5 border-gray-200 border-x-[1px]'><span className='text-4xl'><img className='w-12 h-fit' src="https://statics.basalam.com/public-76/photo/explore/aN/04-21/qQy6ILLAWJQcYMCmLYNsgtUmLbVU7eoc25bx2moYYgoimmyO9G.SVG"/></span><span className='text-xs opacity-70 mt-1'>برندهای پوشاک</span></div>
        <div className='flex flex-col justify-center w-52 items-center h-1/3 px-5 border-gray-200 border-x-[1px]'><span className='text-4xl'><img className='w-12 h-fit' src="https://statics.basalam.com/public-76/photo/explore/aN/04-21/ihA4MB6lb0k3crzIaVD3kou9cR84ZRCsmqHto7Xr63gK3n6TMe.SVG"/></span><span className='text-xs opacity-70 mt-1'>برندهای پوشاک</span></div>
        <div className='flex flex-col justify-center w-52 items-center h-1/3 px-5 border-gray-200 border-x-[1px]'><span className='text-4xl'><img className='w-12 h-fit' src="https://statics.basalam.com/public-76/photo/explore/aN/04-21/xPEloWwsRCQcM2dNKhH8P0wNxUxJWS5bkoeCR1RPszS83oqv2a.SVG"/></span><span className='text-xs opacity-70 mt-1'>برندهای پوشاک</span></div>
        <div className='flex flex-col justify-center w-52 items-center h-1/3 px-5 border-gray-200 border-x-[1px]'><span className='text-4xl'><img className='w-12 h-fit' src="https://statics.basalam.com/public-76/photo/explore/aN/04-21/fhZTlPyGjxIu8zpwq9VdQfeys4TPObl8M6qlcvZxNk9KyZPi2s.SVG"/></span><span className='text-xs opacity-70 mt-1'>برندهای پوشاک</span></div>
        </div>
        <div
          onClick={moveL}
          className={`${move ? "flex" : "hidden"}
            text-2xl max-md:hidden text-orange-600 absolute bg-white w-10 h-10 rounded-xl text-center justify-center items-center shadow-md cursor-pointer trasnsition ease-in-out duration-500 left-5 top-[2060px] hover:bg-orange-600 hover:text-white`}
        >
          ◀
        </div>
    </div>
    </Container>
  )
}

export default CatSlider 