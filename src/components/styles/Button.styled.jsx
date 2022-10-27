import styled from 'styled-components';

const Button = styled.button`

  font-size:1.2rem;
  background-color:${({primary})=> primary ? "white"  :"#A62440" };
  color: ${({primary})=> primary ? "#A62440" : "white" };
  padding: 1rem;
  margin-right: 1rem;
  border: 1px solid #A62440;
  border-radius: 0.5rem;
  &:hover{
    background-color: ${({primary})=> primary ?  "white" :"#d70f5b" };
    color: ${({primary})=> primary ? "#d70f5b" : "white"};
    transform: scale(0.97);

  }
  cursor:pointer;
`;

export default Button;
