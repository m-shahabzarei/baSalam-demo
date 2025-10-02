type T = {
    img : string ,
    text : string
}


function Post({img , text } : T) {
  return (
    <div className="h-60 w-96 rounded-xl cursor-pointer mt-5 ml-5">
        <img src={img} className="h-full w-full rounded-xl"/>
        <div className="relative -top-20 bg-white flex flex-col justify-between h-16 pt-2 px-2" dir="rtl" >
            <p className="text-xs">{text}</p>
            <span className="text-xs text-gray-600">تو مجله بخون</span>
        </div>
    </div>
  )
}

export default Post