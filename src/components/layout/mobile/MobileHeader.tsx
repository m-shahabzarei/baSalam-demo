import { useEffect, useState } from "react";

function MobileHeader() {



  const [showHeader, setShowHeader] = useState(true);

  let lastScroll = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if(currentScroll < 220){
        setShowHeader(false)
      }
      else if (currentScroll < lastScroll) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);





  return (
    <div className="flex justify-center items-center ">
    <div className={`${showHeader ? "fixed top-0 w-full" : "w-[95%]"} max-md:flex bg-gray-100 hidden flex-row justify-evenly items-center  h-fit text-right px-1 mb-4 rounded z-50`}><i className='fa-solid fa-camera-retro text-gray-500 text-xl cursor-pointer'></i><input className='bg-gray-100 py-3 pr-3 text-right w-[85%] focus:outline-none font-thin placeholder:font-sans placeholder:font-bold' type='text' placeholder='جست و جو در بازار' /><i className='fa-solid fa-search text-gray-400 text-xl'></i></div>
    
    <nav className="fixed bottom-0 w-full bg-white h-14 z-[2300] py-2">
      <ul className="w-full flex flex-row-reverse justify-around h-full">
        <li className="flex flex-col-reverse justify-between items-center h-full text-orange-600"><span className="text-sm ">خانه</span><i className="fa-regular fa-home"></i></li>
        <li className="flex flex-col-reverse justify-between items-center h-full text-gray-600"><span className="text-sm">دسته بندی</span><i className="fa-solid fa-shapes"></i></li>
        <li className="flex flex-col-reverse justify-between items-center h-full text-gray-600"><span className="text-sm">سبدخرید</span><i className="fa-solid fa-cart-shopping"></i></li>
        <li className="flex flex-col-reverse justify-between items-center h-full text-gray-600"><span className="text-sm">گفت و گوها</span><i className="fa-regular fa-message"></i></li>
        <li className="flex flex-col-reverse justify-between items-center h-full text-gray-600"><span className="text-sm">حساب کاربری</span><i className="fa-regular fa-user"></i></li>
      </ul>
    </nav>
    </div>
  )
}

export default MobileHeader