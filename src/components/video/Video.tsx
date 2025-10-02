

interface T {
    img : string ,
    variant : "Y" | "X"
}

function Video({img,variant} : T) {
  return (
    checkVariant(variant,img)
  )
}


function checkVariant(variant: string, img: string){
    if(variant === "Y" ){
        return(
            <div className="min-w-40 max-w-40 min-h-72 max-h-72 rounded-xl flex overflow-hidden"><img src={img} className="w-full h-full rounded-xl cursor-pointer transition ease-in-out duration-500 hover:scale-110" /><span className="fa-solid fa-play top-32 text-white text-xl -right-[89px] relative"></span></div>
        )
    }
    else if( variant === "X"){
        return(
            <div className="min-h-40 max-h-40 min-w-72 max-w-72 rounded-xl flex overflow-hidden mx-1"><img src={img} className="w-full h-full rounded-xl cursor-pointer transition ease-in-out duration-500 hover:scale-110" /><span className="fa-solid fa-play top-16 text-white text-xl -right-[145px] relative"></span></div>
        )
    }
}

export default Video