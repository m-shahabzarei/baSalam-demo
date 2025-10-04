import { useState } from 'react'
import IApp from '../../FooterComponents/IApp'
import Container from '../Container'

function MobileFooter1() {


    const [Status1, setStatus1] = useState(false)
    const [Status2, setStatus2] = useState(false)
    const [Status3, setStatus3] = useState(false)
    const [Status4, setStatus4] = useState(false)

    function Status1Setter(){
        setStatus1(!Status1)
    }
        function Status2Setter(){
        setStatus2(!Status2)
    }

        function Status3Setter(){
        setStatus3(!Status3)
    }

        function Status4Setter(){
        setStatus4(!Status4)
    }




  return (
    <Container>
    <div className=' flex flex-col-reverse w-full justify-center items-center'>
        <div className='flex items-center w-full justify-evenly flex-col'>
            <ul className={`flex w-full text-gray-600 flex-col ${Status1 ? "h-fit" : "h-10"} overflow-hidden text-right items-end justify-between border-b-2 border-gray-100`}>
                <li className='flex w-full flex-row-reverse items-center justify-between' onClick={Status1Setter}><h1 className='mb-4 text-lg'>باسلام</h1>    <i className={`fa-solid ${Status1 ? 'fa-arrow-up' : 'fa-arrow-down'}`}></i> </li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>مجله باسلام</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>درباره باسلام</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>به روزرسانی های باسلام</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>فرصت های شغلی</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>اعتماد به باسلام</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>قوانین و شرایط بازار</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>اکوسیستم باسلام</li>
            </ul>
            <ul className={`flex w-full text-gray-600 flex-col ${Status2 ? "h-fit" : "h-10"} overflow-hidden text-right items-end justify-between border-b-2 border-gray-100`}>
                <li className='flex w-full flex-row-reverse items-center justify-between' onClick={Status2Setter}><h1 className='mb-4 text-lg'>پشتیبانی</h1>    <i className={`fa-solid ${Status2 ? 'fa-arrow-up' : 'fa-arrow-down'}`}></i> </li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>تماس باما</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>درباره متداول</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>پیگیری سفارش ها</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>گزارش خطای فنی</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>پیشنهاد امکان جدید</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>باسلام API</li>
            </ul>
            <ul className={`flex w-full text-gray-600 flex-col ${Status3 ? "h-fit" : "h-10"} overflow-hidden text-right items-end justify-between border-b-2 border-gray-100`}>
                <li className='flex w-full flex-row-reverse items-center justify-between' onClick={Status3Setter}><h1 className='mb-4 text-lg'>خرید و فروش</h1>    <i className={`fa-solid ${Status3 ? 'fa-arrow-up' : 'fa-arrow-down'}`}></i> </li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>فروش در باسلام</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>کیف پول من</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>مدیریت غرفه</li>
            </ul>
            <ul className={`flex w-full text-gray-600 flex-col ${Status4 ? "h-fit" : "h-10"} overflow-hidden text-right items-end justify-between border-b-2 border-gray-100`}>
                <li className='flex w-full flex-row-reverse items-center justify-between' onClick={Status4Setter}><h1 className='mb-4 text-lg'>شبکه های اجتماعی</h1>    <i className={`fa-solid ${Status4 ? 'fa-arrow-up' : 'fa-arrow-down'}`}></i> </li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>لینکدین</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>اینستاگرام</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>تلگرام</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>بله</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>ایتا</li>
            </ul>
        </div>
        <IApp />
    </div>
    </Container>  )
}

export default MobileFooter1