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

  <div className="w-[60vw] bg-white z-[2040] fixed top-[15%] left-[20%] h-[35vw] rounded-2xl grid grid-cols-8 overflow-hidden">
    
    <div className="col-span-5 pb-10 pt-5 px-12 flex justify-between items-end flex-col">
      <span className="text-3xl cursor-pointer font-bold hover:text-gray-400" onClick={onClose}>&times;</span>
      <h1 className="text-2xl">عضویت یا ورود</h1>
      <label>:شماره تلفن همراه </label>
      <input dir="rtl" type="number" placeholder="اینجا بنویس" className="-mt-4 w-full border-gray-200 rounded-lg py-4 px-4 border-2 transition duration-500 focus:border-orange-600 focus:outline-stone-200 focus:outline-offset-2"></input>
      <span className="text-gray-500 text-xs -mt-6">مثال : 0919123456</span>
      <span className="text-xs text-gray-700">عضویت شما به منزله پذیرش مقررات <u className="text-blue-500 cursor-pointer">باسلامه</u></span>
      <label className="text-sm text-gray-600 items-center flex gap-3">به این شماره دسترسی ندارم<input type="checkbox" className="accent-orange-600 w-4 h-4 rounded border-gray-500 "/></label>
      <div className="w-full h-12"><Button type="special" variant="secondary">دریافت کد تایید</Button></div>
    </div>
    <div className="bg-orange-600 col-span-3 text-white flex items-center justify-center">
    <img className="invert brightness-0" src="https://statics.basalam.com/public/admin/V0YKZ/12-25/YrfyhaNtfRAwDx4oazcmGSS8Ik1Pry6xVBLXaZ2fsDCQ90wgMT.svg"/>
    </div>
  </div>
  </>
  )

}





export default Login