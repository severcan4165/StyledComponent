import Button from "./styles/Button.styled.jsx"
import Flex, {CardFlex} from "./styles/Flex.styled.jsx"
import StyledHeader, { Image, Logo, Nav  } from "./styles/Header.styled.jsx"


const Header = () => {
  return (
    <StyledHeader>


        <Nav>
            <Logo src = "/images/logo.png"  alt = "claruswayLogo" />
            <div>
                <Button primary >Apply Courses</Button>
                <Button >Talk to Adviser</Button>
            </div>
            
        </Nav>
        <Flex noShadow>
            <CardFlex>
            <h1>The IT Career of Your Dreams Starts Here!</h1>
            <p>Clarusway is a leading international software Bootcamp. Join a micro class online with other trainees
                and learn coding skills with a highly-skilled instructor.</p>
            <Button>Start Your New Career</Button>
            </CardFlex>
            <div>
                <Image src="/images/hero.jpg" alt=""></Image>
            </div>
           
        </Flex>
      
      
        
    </StyledHeader>
  )
}

export default Header