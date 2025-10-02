import {useState} from 'react'
import Video from '../video/Video'
import Container from '../layout/Container'

type T = {
    variant : "X" | "Y",
    title : string
}

function VideoSlider({variant , title} : T) {



 const [move, setMove] = useState<boolean>(false);

  function moveR() {
    setMove(true);
  }
  function moveL() {
    setMove(false);
  }



  return (
    <Container>
    <div className='mt-10 overflow-hidden' dir='rtl'>

        <h1>{title}</h1>
            {checkVariant(variant)}

    </div>
    </Container>
  )







  
function checkVariant(variant : string ) {
        if(variant === "Y"){
            return(
              <>
                      <div
          onClick={moveR}
          className={`
            ${move ? "hidden" : "flex"}
            text-2xl text-orange-600 absolute bg-white w-10 h-10 rounded-xl text-center justify-center items-center shadow-md cursor-pointer trasnsition ease-in-out duration-500 right-5 top-[2320px] z-50 hover:bg-orange-600 hover:text-white`}
        >
          ▶
        </div>
        <div className={`mt-4 w-[2100px] flex justify-between  transition duration-500 ease-in-out
            ${move ? "translate-x-1/2" : ""} `}>
        <Video img='https://statics.basalam.com/public-130/photo/explore/aN/09-20/nXHxsdavlnitWwOjCr6VXyqRbXrcWHXaOp9NL0Fs6kneJqMS9N.jpg' variant={variant} />
        <Video img='https://statics.basalam.com/public-130/photo/explore/aN/09-20/xkFsKjBwavtQJf0NT84j3XqpZlydmqUFha6yq9qjpDlPTc9n3T.jpg' variant={variant} />
        <Video img='https://statics.basalam.com/public-130/photo/explore/aN/09-20/iEPDH8UCDEYczQVjM9Lts7xVjoCjVDFXb939kNSwDvKV6GJoJL.jpg' variant={variant} />
        <Video img='https://statics.basalam.com/public-129/photo/explore/aN/09-16/t4X0hVET2f8f09I77IaGBJ12rp32Vs5I3wPtLtdjyOMihe460b.jpg' variant={variant} />
        <Video img='https://statics.basalam.com/public-129/photo/explore/aN/09-16/twlGv4ax8dBSNWwpYqeXPCcfu6eaWXyLLsVXJFSb4CAg1KAOR9.jpg' variant={variant} />
        <Video img='https://statics.basalam.com/public-129/photo/explore/aN/09-16/NnQgOLUlZ2b9xPiXTn2UE83FhyFAkscutgCtEy4ISiOY49WuVY.jpg' variant={variant} />
        <Video img='https://statics.basalam.com/public-128/photo/explore/aN/09-13/ld2mm096wYchMMasEIiyv3wYtqBVxPpGswqBR6RmuExNlIXGty.jpg' variant={variant} />
        <Video img='https://statics.basalam.com/public-127/photo/explore/aN/09-13/ha7mOs40z8l012o0jUbttCrImTyvRc5Ghqs3cJXX8JmLFy50Zq.jpg' variant={variant} />
        <Video img='https://statics.basalam.com/public-125/photo/explore/aN/09-09/45V8OiToUbxA59XNDQPoE4a8D3hrIWhumWakOC4cjoTBkyznk9.jpg' variant={variant} />
        <Video img='https://statics.basalam.com/public-122/photo/explore/aN/08-30/zxI1H24qEVhefGC29dwTWYTYvllEsI7gD0GnubJ645WTCyARxH.jpg' variant={variant} />
        <Video img='https://statics.basalam.com/public-122/photo/explore/aN/08-30/hPaS29mNPSRVU4Paj5RhcJA3lCO0Ca5cVoaAvKhOnDcd2SuOeV.jpg' variant={variant} />
        </div>
                <div
          onClick={moveL}
          className={`${move ? "flex" : "hidden"}
            text-orange-600 text-2xl absolute bg-white w-10 h-10 rounded-xl text-center flex justify-center items-center shadow cursor-pointer trasnsition ease-in-out duration-500 left-5 top-[2320px] hover:bg-orange-600 hover:text-white`}
        >
          ◀
        </div>
        </>
            )
        }
        else if(variant === "X"){
            return(
              <>
        <div
          onClick={moveR}
          className={`
            ${move ? "hidden" : "flex"}
            text-2xl text-orange-600 absolute bg-white w-10 h-10 rounded-xl text-center justify-center items-center shadow-md cursor-pointer trasnsition ease-in-out duration-500 right-5 top-[3200px] z-50 hover:bg-orange-600 hover:text-white`}
        >
          ▶
        </div>
       <div className={`mt-4 w-[2100px] flex justify-between  transition duration-500 ease-in-out
            ${move ? "translate-x-[2100px]" : ""} `}>
        <Video img='https://statics.basalam.com/public-132/photo/explore/aN/09-23/F6NMQBEsqCeIVoP4QtVruu3J8dk4kDySo5UcabSfzPRZINS4hL.jpg' variant={variant} />
        <Video img='https://statics.basalam.com/public-130/photo/explore/aN/09-20/C4eGxrBr6zIhjoRhOQBa6oB4ileMZdRJRcBCqQUCEyEImgcLS4.jpg' variant={variant} />
        <Video img='https://statics.basalam.com/public-130/photo/explore/aN/09-20/90xBFFIRdqaZsEWJG1K6PPlwv9j4Lcaac6X1HMoior5S4FvadL.jpg' variant={variant} />
        <Video img='https://statics.basalam.com/public-130/photo/explore/aN/09-20/GZ22EMtZMV7tIJ0E1AigcjujxvR3Dh2q8Hpkls80vhFPJDCxIA.jpg' variant={variant} />
        <Video img='https://statics.basalam.com/public-129/photo/explore/aN/09-16/oLUcqIkRkBojWm567nyelrP634ULdWXb3bHW2NkszAZJoSf7Oj.jpg' variant={variant} />
        <Video img='https://statics.basalam.com/public-129/photo/explore/aN/09-16/VMZvlXh8p2auLfDXg5ozQdWQmBqUSwdsOtPiJh3pMVdIyfF4qa.jpg' variant={variant} />
        <Video img='https://statics.basalam.com/public-125/photo/explore/aN/09-09/G84hI4jeFpFE3ohtqjEbnhV6EpVBJn2F0o8QDcRzwkZTJU1530.jpg' variant={variant} />
        <Video img='https://statics.basalam.com/public-124/photo/explore/aN/09-06/yw0uDQjWhQi5Ewry35ykFJ1CvpgTFMBSIFMmqRU3raCYDFuAh1.jpg' variant={variant} />
        <Video img='https://statics.basalam.com/public-123/photo/explore/aN/09-02/SF7PSp0W21iJ4axPBbCAWTtriV6Pf6r2O0hy9r7QwxiMVWJQMC.jpg' variant={variant} />
        <Video img='https://statics.basalam.com/public-122/photo/explore/aN/08-30/Z4fOB7WP9m3ETVNTu2coUxNBg638Jp5B47b0gFymRTJqH0nrWj.jpg' variant={variant} />
        <Video img='https://statics.basalam.com/public-119/photo/explore/aN/08-23/Jp61KdJyKeFjO2kx4dsHylGeVBRdVBywmGROfKXKBp5dgrmHB6.jpg' variant={variant} />
        </div>
                        <div
          onClick={moveL}
          className={`${move ? "flex" : "hidden"}
            text-orange-600 text-2xl absolute bg-white w-10 h-10 rounded-xl text-center flex justify-center items-center shadow cursor-pointer trasnsition ease-in-out duration-500 left-5 top-[3200px] hover:bg-orange-600 hover:text-white`}
        >
          ◀
        </div>
        </>
            )
        }
}

}





export default VideoSlider