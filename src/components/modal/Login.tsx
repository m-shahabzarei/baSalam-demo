/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck

import Button from "../button/Button"

function Login({onClose}) {



  return (
  <>
  <div className="bg-black opacity-70 w-full left-0 top-0 h-full fixed z-[2020]">

  </div> 

  <div className="xl:w-[60vw] max-xl:w-[80%] max-xl:h-[80%] bg-white z-[2040] fixed top-[15%] left-[20%] xl:h-[35vw] rounded-2xl xl:grid  max-xl:flex max-xl:flex-col-reverse xl:grid-cols-8  overflow-hidden">
    
    <div className="xl:col-span-5 max-xl:h-full pb-10 pt-5 px-12 flex justify-between items-end flex-col">
      <span className="max-xl:relative max-xl:-top-20 text-3xl cursor-pointer font-bold hover:text-gray-400" onClick={onClose}>&times;</span>
      <h1 className="text-2xl">عضویت یا ورود</h1>
      <label>:شماره تلفن همراه </label>
      <input dir="rtl" type="number" placeholder="اینجا بنویس" className="-mt-4 w-full border-gray-200 rounded-lg py-[1vw] px-[2vw] border-2 transition duration-500 focus:border-orange-600 focus:outline-stone-200 focus:outline-offset-2"></input>
      <span className="text-gray-500 text-xs max-xl:-mt-3 -mt-6">مثال : 0919123456</span>
      <span className="text-xs text-gray-700">عضویت شما به منزله پذیرش مقررات <u className="text-blue-500 cursor-pointer">باسلامه</u></span>
      <label className="text-sm text-gray-600 items-center flex gap-3">به این شماره دسترسی ندارم<input type="checkbox" className="accent-orange-600 w-4 h-4 rounded border-gray-500 "/></label>
      <div className="w-full h-12"><Button type="special" variant="secondary">دریافت کد تایید</Button></div>
    </div>

    <div className="xl:bg-orange-600 max-xl:-mb-12 xl:col-span-3 text-white flex items-center justify-center">
    <img className="xl:invert max-xl:w-32 max-xl:h-32 max-xl:relative max-xl:top-10 xl:brightness-0" src="https://statics.basalam.com/public/admin/V0YKZ/12-25/YrfyhaNtfRAwDx4oazcmGSS8Ik1Pry6xVBLXaZ2fsDCQ90wgMT.svg"/>
    </div>
    
  </div>
  </>
  )

}





export default Login