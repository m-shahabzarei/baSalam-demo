import React from 'react'
import Points from '../FooterComponents/Points'
import FooterMenu from '../FooterComponents/FooterMenu'
import FooterBottom from '../FooterComponents/FooterBottom'
import CopyRight from '../FooterComponents/CopyRight'
import MobileFooter from './mobile/MobileFooter'

function Footer() {
  return (
    <div className='bg-white h-[700px] items-center justify-around flex flex-col '>
        <Points />
        <FooterMenu />
        <MobileFooter />
        <FooterBottom />
        <CopyRight />
    </div>
  )
}

export default Footer