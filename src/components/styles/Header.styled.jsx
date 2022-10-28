import styled from 'styled-components';

const Header = styled.header`

  width:60vw;
  margin: 5rem auto 0;
  background-color: ${({ theme }) => theme.colors.header};
  padding: 4rem 1rem;
`;
export const Logo = styled.img`
    width: 300px;
    padding: 2rem;

`;
export const Nav = styled.nav`
   
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media (max-width: ${({theme})=> theme.responsive}){
        flex-direction: column;

    }
 

`;
export const Image = styled(Logo)`

    @media (max-width: ${({theme})=> theme.responsive}){
        margin: 2rem 0;
    }

`;
export const CardImage = styled.img`
    width:300px;
    height:200px;
`;


export default Header;
