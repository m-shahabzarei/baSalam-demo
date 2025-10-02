
type T ={
    logo : string ,
    shop : string ,
    city : string ,
    name : string ,
    img1 : string ,
    img2 : string ,
    img3 : string   
}


function NewShop({logo , shop , city , name , img1 , img2 , img3} : T) {
  return (
    <div className='w-[330px] h-52 border border-gray-200 rounded-xl flex flex-col p-4 mx-4 cursor-pointer' dir="ltr">
        <div className="w-full flex flex-row-reverse">
            <img src={logo} className="w-16 rounded-full"/>
        <div dir="rtl" className="mr-4 mt-2">
            <h2 className="text-[15px]">{shop}</h2>
            <div className="opacity-50 text-xs mt-1"><i className="fa-solid fa-location ml-1"></i><span>{city}</span><span className="opacity-40"> | </span><span>{name}</span></div>
        </div>
        </div>

        <div className="flex flex-row w-full h-full justify-between mt-3">
            <div className="border border-gray-200 rounded-xl w-24 h-24 flex justify-center items-center mx-1"><img className="w-full rounded-xl h-fit" src={img1} /></div>
            <div className="border border-gray-200 rounded-xl w-24 h-24 flex justify-center items-center mx-1"><img className="w-full rounded-xl h-fit" src={img2} /></div>
            <div className="border border-gray-200 rounded-xl w-24 h-24 flex justify-center items-center mx-1"><img className="w-full rounded-xl h-fit" src={img3} /></div>
        </div>
    </div>
  )
}

export default NewShop





