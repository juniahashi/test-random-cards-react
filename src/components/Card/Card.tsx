import { CardInterface } from "types/card";
import * as S from './Card.styles';

const Card = (props: CardInterface) => {    
    return (
        <S.Container>
            <S.Image src={props.image} alt="" />
            <S.Content>
                <S.Description><strong>Description:</strong> {props.value} {props.suit}</S.Description>
                <S.Value><strong>Value:</strong> {props.points}</S.Value>
            </S.Content>
        </S.Container>
    )
}

export default Card;