import styled from 'styled-components';

const Flex = styled.div`
  padding:2rem 3rem;
  background-color: #fff;
  margin: 2rem 0;
 
  border-radius:0.7rem;
  display: flex;
  flex-direction: ${({id})=> id % 2 === 0 ? "row-reverse" : "row" };
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  @media (max-width: ${({theme})=> theme.responsive}){
    flex-direction: column;
    text-align:center;
  }

  box-shadow: ${({noShadow})=> noShadow || `1px 8px 46px -6px rgba(117,117,117,1)`} ;

`;

export const CardFlex = styled.div`
  width:540px;
  
`;

export default Flex;
