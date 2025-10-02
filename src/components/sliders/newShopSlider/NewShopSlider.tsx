import {useState} from 'react'
import Container from '../../layout/Container'
import NewShop from './NewShop'

function NewShopSlider() {

 const [move, setMove] = useState<boolean>(false);

  function moveR() {
    setMove(true);
  }
  function moveL() {
    setMove(false);
  }


  return (
    <Container>
        <div className='bg-white h-72 w-full mt-10 rounded-xl py-1 px-4 overflow-hidden'>
        <div
          onClick={moveR}
          className={`
            ${move ? "hidden" : "flex"}
            text-2xl text-orange-600 absolute bg-white w-10 h-10 rounded-xl text-center justify-center items-center shadow-md cursor-pointer trasnsition ease-in-out duration-500 right-14 top-[2930px] hover:bg-orange-600 hover:text-white`}
        >
          ▶
        </div>
            <div className='flex flex-row justify-between h-14 items-center' dir='rtl'><h1>خرید از غرفه های تازه نفس</h1><span className='text-orange-600 cursor-pointer'>مشاهده همه {">"}</span></div>
            <div className={`flex flex-row transition duration-500 ease-in-out
            ${move ? "translate-x-[700px]" : ""}`} dir='rtl'>
                <NewShop logo='https://statics.basalam.com/public-129/users/zJKJqJ/09-15/VBrbuYRL9nW0A5o0ptGF5UXDmrmX4kAOOcOEvybKeeN44Gzk8g.jpg_100X100X90.jpg' shop='Amir Wood امیر چوب' city='چهاردانگه' name='امیر محمد گودرزی' img1='https://statics.basalam.com/public-128/users/zJKJqJ/09-13/IVUgH8e7a46MwoJsJlCXwuqLnHeG4plGOz8Hb3UEFTR1ie44Tq.jpg_256X256X70.jpg' img2='https://statics.basalam.com/public-128/users/zJKJqJ/09-13/Y2l9ajAjSpVIIgM23XHgQtjTpW44MiRB7aEOLiSbvpfsHSalEy.jpg_256X256X70.jpg' img3='https://statics.basalam.com/public-128/users/zJKJqJ/09-13/mkw6SEgxqKFwh4aD2a4Yotjgb7fmMvZJXaUwO3w4rYbHmqVlvS.jpg_256X256X70.jpg' />
                <NewShop logo='https://statics.basalam.com/public-130/users/Mx0nle/09-19/UQ0Qbg1z2XpumVocMwLgH516Em1DzYnH7ijVAtfWivwewdzOlR.jpg_256X256X70.jpg' shop='سنا استیل تجهیزات' city='تهران' name='سیامک حمیدی' img1='https://statics.basalam.com/public-130/users/Mx0nle/09-19/UQ0Qbg1z2XpumVocMwLgH516Em1DzYnH7ijVAtfWivwewdzOlR.jpg_256X256X70.jpg' img2='https://statics.basalam.com/public-130/users/Mx0nle/09-19/rVhSNYSrx40QZv66n2ehu9UGfwj9SdWxyk38i1OrE3SAPXTnK9.jpg_256X256X70.jpg' img3='https://statics.basalam.com/public-130/users/Mx0nle/09-19/bN3EJ4F8xxHtozXbEXOvlgiHA06FnrP79QMllLzxSqjLhcNtSB.jpg_256X256X70.jpg' />
                <NewShop logo='https://statics.basalam.com/public-130/users/JW8bow/09-19/JCqNMu96yXnvH4LdQilZmFPZP3olgepVVj4gQ2Ijok5JVZqpwK.jpg_256X256X70.jpg' shop='ساعت و بدلیجات یاس' city='زرند' name='یاس' img1='https://statics.basalam.com/public-130/users/JW8bow/09-19/JCqNMu96yXnvH4LdQilZmFPZP3olgepVVj4gQ2Ijok5JVZqpwK.jpg_256X256X70.jpg' img2='https://statics.basalam.com/public-130/users/JW8bow/09-19/oef0VDgErGryYPqXttBlvBsGTACXhgkEUi6wBL5gjsLycI5L2Z.jpg_256X256X70.jpg' img3='https://statics.basalam.com/public-131/users/JW8bow/09-20/0V0Vj1hlVxKObkiSkmaOGEutyKGJP5jnNnYODHSiBTXaTsEESx.jpg_256X256X70.jpg' />
                <NewShop logo='https://statics.basalam.com/public-126/users/V6qgaj/09-09/LGWsn1IAwQdaKDz9MJuNo3ySvMZGv6vovtRlQd2oIVom0MSch8.jpg_256X256X70.jpg' shop='نوین رایانه رباط' city='قم' name='حسین محمدی' img1='https://statics.basalam.com/public-126/users/V6qgaj/09-09/pce2eBe1bOJmWeLonXEEaHzLDDLqFl5Fzw74Ju4d7uHAMoSudr.jpg_256X256X70.jpg' img2='https://statics.basalam.com/public-126/users/V6qgaj/09-09/LGWsn1IAwQdaKDz9MJuNo3ySvMZGv6vovtRlQd2oIVom0MSch8.jpg_256X256X70.jpg' img3='https://statics.basalam.com/public-126/users/V6qgaj/09-09/Mf0nn5aj7zh8IZAvWpNjpnbZoabPt640FtoXt4HvwpNoh0nzRM.jpg_256X256X70.jpg' />
                <NewShop logo='https://statics.basalam.com/public-127/users/80Vx6m/09-12/92h5xeWmmPPeI9FB3j7oCHhAO6zkiM9dVlk8A7PscdtZX54n2b.jpg_100X100X90.jpg' shop='هنرهای دستی بلوط' city='همدان' name='لیلا عباسی' img1='https://statics.basalam.com/public-129/users/80Vx6m/09-17/E6GT7jZ2Oode6CWl3gonQIwSfoGsMHediIl05S2ycrnmbgPyBs.jpg_256X256X70.jpg' img2='https://statics.basalam.com/public-128/users/80Vx6m/09-15/RtVDf8duhIEFWlroDYJf26o6PnSSAwEunykQRAUinbmJCvgI33.jpg_256X256X70.jpg' img3='https://statics.basalam.com/public-129/users/80Vx6m/09-17/ltn4YwvagTJoFvcNAk7JJQJWzdeXpqru78lMRPvlqVlOIAt2qt.jpg_256X256X70.jpg' />
            </div>
        <div
          onClick={moveL}
          className={`${move ? "flex" : "hidden"}
            text-orange-600 text-2xl absolute bg-white w-10 h-10 rounded-xl text-center flex justify-center items-center shadow cursor-pointer trasnsition ease-in-out duration-500 left-14 top-[2930px] hover:bg-orange-600 hover:text-white`}
        >
          ◀
        </div>
        </div>
    </Container>
  )
}

export default NewShopSlider



// {                <NewShop logo='' shop='' city='' name='' img1='' img2='' img3='' />}