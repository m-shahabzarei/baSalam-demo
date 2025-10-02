interface Iproduct {
    img:string ,
    title:string ,
    city:string ,
    shop:string ,
    rate:number ,
    sell:number ,
    offer:number ,
    price:number ,
    offerPrice:number ,
    count:number,
    badge:"medal" | "free"
}


function Product({img , title , city , shop , rate , sell , offer , price , offerPrice , count , badge} : Iproduct) {
  return (
    <div className="bg-white h-[510px] w-52 m-2 rounded-2xl flex flex-col items-center p-4 cursor-pointer" dir="ltr">
        <img src={img} className="rounded-2xl" />
        <div className="flex flex-col justify-between h-full mt-4">
        <p className="text-sm" dir="rtl">{title}</p>
        <div className="text-gray-400 text-xs" dir="rtl"><i className="fa-solid fa-store ml-1"></i><span>{city}</span><span className="opacity-50"> | </span><span>{shop}</span></div>
        <div className="text-xs" dir="rtl"><i className="fa-solid fa-star text-yellow-400 ml-1"></i><span className="ml-1">{rate}</span><span className="text-gray-400">{`(${sell} تجربه)`}</span></div>
        <div className="bg-orange-50 rounded h-20 p-2 flex flex-col justify-between">
            <div><span className="text-orange-600">%{offer}</span><i className="fa-solid fa-fire text-orange-600 text-xs ml-1 mr-3"></i><del className="text-gray-400">{price}</del></div>
            <div className="w-fit" dir="rtl"><span>{offerPrice}</span><span className="text-gray-400 text-xs mr-2">تومان</span></div>
        </div>
        <div dir="rtl"><span className="text-orange-600 text-xs">{count} تا مونده</span></div>
          <div className="m-1 w-full h-7">{badgeChecker(badge)}</div>
        </div>
    </div>
  )
}
export default Product







function badgeChecker(badge : string){
 if(badge === "medal"){
            return(
                <div className="bg-gray-300 opacity-60 text-black rounded-xl w-fit text-xs p-1"><span>غرفه برتر</span><i className="fa-solid fa-medal ml-1"></i></div>
            )
  }
  else if(badge === "free"){
            return(
                <div className="bg-gray-300 opacity-60 text-black rounded-xl w-fit text-xs p-1"><span>ارسال رایگان</span><i className="fa-solid fa-truck ml-1"></i></div>
            )
  }
  else{
    return <div></div>
  }
}          