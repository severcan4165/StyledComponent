import data from "../data.js";
import CardContainer from "./styles/Card.styled.jsx";
import Flex, {CardFlex} from "./styles/Flex.styled.jsx"
import {CardImage} from "./styles/Header.styled.jsx"

const Card = () => {
  return (
    <CardContainer>      {data.map(item=> {
        const {id, title, body, image} = item;
        return(
            <Flex key = {id} id={id}>
                <CardFlex>
                    <h1>{title}</h1>
                    <p>{body}</p>
                </CardFlex>
                <div>
                    <CardImage src={`/images/${image}`} alt="cardImages"></CardImage>
                </div>
            </Flex>
        )
    })}
   </CardContainer>
  )
}

export default Card