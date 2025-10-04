import Button from '../button/Button'

function EmailBox() {
  return (
    <div className=' w-full flex flex-col justify-between max-md:pr-0 pr-8'>
        <h1 dir='rtl'>ایمیلت رو وارد کن تا از تخفیف ها باخبر بشی</h1>
        <div className='flex flex-row justify-end mt-5 w-full'>
            <Button type='special' variant='secondary' >ارسال</Button>
            <input type='email' className='border-gray-300 w-3/4 rounded-lg px-2 py-4 ml-4 border-2 focus:border-orange-600 focus:outline-stone-200 focus:outline-offset-2' placeholder='ایمیل' dir='rtl'/>
        </div>
    </div>
  )
}

export default EmailBox