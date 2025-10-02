import Container from '../layout/Container'
import IApp from './IApp'

function FooterMenu() {
  return (
    <Container>
    <div className='flex flex-row-reverse w-full justify-between'>
        <img className="w-32 h-40" src='https://statics.basalam.com/public/admin/V0YKZ/12-25/YrfyhaNtfRAwDx4oazcmGSS8Ik1Pry6xVBLXaZ2fsDCQ90wgMT.svg' />
        <div className='flex w-full justify-evenly flex-row-reverse'>
            <ul className='flex flex-col h-fit text-right items-end justify-between'>
                <li><h1 className='mb-4 text-lg'>باسلام</h1></li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>مجله باسلام</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>درباره باسلام</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>به روزرسانی های باسلام</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>فرصت های شغلی</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>اعتماد به باسلام</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>قوانین و شرایط بازار</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>اکوسیستم باسلام</li>
            </ul>
            <ul className='flex flex-col h-fit text-right items-end justify-between'>
                <li><h1 className='mb-4 text-lg'>پشتیبانی</h1></li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>تماس باما</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>درباره متداول</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>پیگیری سفارش ها</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>گزارش خطای فنی</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>پیشنهاد امکان جدید</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>باسلام API</li>
            </ul>
                <ul className='flex flex-col h-fit text-right items-end justify-between'>
                <li><h1 className='mb-4 text-lg'>خرید و فروش</h1></li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>فروش در باسلام</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>کیف پول من</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>مدیریت غرفه</li>
            </ul>
                <ul className='flex flex-col h-fit text-right items-end justify-between'>
                <li><h1 className='mb-4 text-lg'>شبکه های اجتماعی</h1></li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>لینکدین</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>اینستاگرام</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>تلگرام</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>بله</li>
                <li className='text-sm opacity-70 cursor-pointer mb-3'>ایتا</li>
            </ul>
        </div>
        <IApp />
    </div>
    </Container>
  )
}

export default FooterMenu