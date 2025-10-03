import Container from '../layout/Container'
import FooterText from './FooterText'
import Badges from './Badges'
import EmailBox from './EmailBox'

function FooterBottom() {
  return (
    <Container>
    <div className='flex flex-row-reverse w-full h-fit mb-8'>
        <FooterText />
        <div className='flex flex-col w-2/5' >
        <EmailBox />
        <Badges />
        </div>
    </div>
    </Container>
  )
}

export default FooterBottom