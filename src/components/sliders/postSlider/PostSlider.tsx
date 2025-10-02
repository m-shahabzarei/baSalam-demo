import React, { useState } from 'react'
import Post from './Post'
import Container from '../../layout/Container'

function PostSlider() {


 const [move, setMove] = useState<boolean>(false);

  function moveR() {
    setMove(true);
  }
  function moveL() {
    setMove(false);
  }


  return (
    <Container>
    <div className='flex flex-col mt-10 overflow-hidden' dir='rtl'>
        <div
          onClick={moveR}
          className={`
            ${move ? "hidden" : "flex"}
            text-2xl text-orange-600 absolute bg-white w-10 h-10 rounded-xl text-center justify-center items-center shadow-md cursor-pointer trasnsition ease-in-out duration-500 right-5 top-[3500px] z-50 hover:bg-orange-600 hover:text-white`}
        >
          ▶
        </div>
        <div><h1>پست های مجله</h1></div>
        <div className={`flex flex-row w-fit  transition duration-500 ease-in-out
            ${move ? "translate-x-3/4" : ""}`}>
        <Post img='https://statics.basalam.com/public-112/photo/explore/aN/08-06/bxj5I4xKYNrxicUsivr68LJmKdreaePVHuFh1YEpyIOIwIJ1kX.jpg' text='مصیب: عاشق نباشی، زنبورها حوصله‌ات را سر می‌برند'/>
        <Post img='https://statics.basalam.com/public-118/photo/explore/aN/08-19/TX96iwqz8LslbKc6wWEPzJnbw9v3jlpbM2E3wJQ7hu9hoTLw69.jpg' text='مجتبی: بابام گفت دوست ندارم واسه بقیه کار کنی'/>
        <Post img='https://statics.basalam.com/public-127/photo/explore/aN/09-13/ign8fXwQfUwzRZB68Tq7A1jpojF7b56lIiUelBNEjD8jHOw17b.jpg' text='زهرا بانو؛ دختر ماهی‌فروش بندر بوشهر'/>
        <Post img='https://statics.basalam.com/public-110/photo/explore/aN/07-29/Lflkx6gCATYWpY2yKV4flfWsTgU0QKssXoUx5e5lw9YEmV0Hzo.jpg' text='احسان: فوتبال، زمینِ بازی من نبود  '/>
        <Post img='https://statics.basalam.com/public-108/photo/explore/aN/07-23/8j7xBgrahs4s6GTm7Pxgn1VVdzCQKzRiCAQZV1Bxj9rsviF9kB.jpg' text='سجاد: پارگی رباط صلیبی اسکیت‌فروشم کرد '/>
        <Post img='https://statics.basalam.com/public-105/photo/explore/aN/07-16/ICxC2bzE8jUGsmdoMnUy2h0VxvQHrOxWCGDFluwMRGKKlkt8it.jpg' text='الهه: موفق شدم، چون پول اولین کلاسم را نداشتم '/>
        <Post img='https://statics.basalam.com/public-104/photo/explore/aN/07-13/H28xxPDmdS022CCKb5fNyMWuYhANcQlr6OyAQJXAGx3QsHIFN8.jpg' text='رویا؛ خیاط غم و شادی آدم‌ها  '/>
        <Post img='https://statics.basalam.com/public-103/photo/explore/aN/07-08/DFnanufEXXaOUMwkASPa7TKbwgoz9Vhl4gCRwRzyOndmAYU2pc.jpg' text='علی؛ همسایه سدرها، همز‌بان بچه‌ها '/>
        <Post img='https://statics.basalam.com/public-101/photo/explore/aN/07-01/yU21NBAUiUTHw9jPIwNID84RL2emQvDM04CyeHpoZSLgglgPSO.jpg' text='پژمان؛ کفاش خیابان جیحون '/>
        <Post img='https://statics.basalam.com/public-99/photo/explore/aN/06-28/IU42UP0WZxo6L81YieKoowcxQcxoAvydg6v27GoQH4zK8h5hmV.jpg' text='علی؛ از قهرمانی دوچرخه‌سواری تا دوچرخه‌فروشی '/>
        </div>
        <div
          onClick={moveL}
          className={`${move ? "flex" : "hidden"}
            text-orange-600 text-2xl absolute bg-white w-10 h-10 rounded-xl text-center flex justify-center items-center shadow cursor-pointer trasnsition ease-in-out duration-500 left-5 top-[3500px] hover:bg-orange-600 hover:text-white`}
        >
          ◀
        </div>
    </div>
    </Container>
  )
}

export default PostSlider





