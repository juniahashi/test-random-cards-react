import cardService from "api/cardAPI";
import Card from "components/Card/Card";
import { CardContext } from "context/CardContex";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardInterface } from "types/card";
import { ReactComponent as IconArrowBack } from "assets/icon-arrow-back.svg"
import * as S from './Cards.styles';

const Cards = () => {
    const { name, setName } = useContext(CardContext);
    const navigate = useNavigate();

    const [cards, setCards] = useState<CardInterface[]>([]);
    const [countClicks, setCountClicks] = useState<number>(0);
    const [hasClickError, setHasClickError] = useState<boolean>(false);

    const maxClicks = 3;

    useEffect(() => {
        if (!name) {
            navigate('/')
        }
        loadCards(5)
    }, [])

    const loadCards = async (countCard: number) => {
        const listCards: CardInterface[] = [...cards]
        const newCards: CardInterface[] = await cardService.getCards(countCard)
        const mapCards = newCards.map(item => ({
            ...item,
            points: Math.floor(Math.random() * 10)
        }))
        listCards.push(...mapCards)
        setCards(listCards)
    }

    const handleClickAddCard = () => {
        if ( countClicks >= maxClicks) {
            setHasClickError(true)
        } else {
            setCountClicks(countClicks + 1)
            loadCards(1)
        }
    }

    const handleClickShuffleCards = () => {
        let count = cards.length;
        let list = [...cards]
        while(count) {
            list.push(list.splice(Math.floor(Math.random() * count), 1)[0]);
          count -= 1;
        }
        setCards(list)
    }

    const handleClickBack = () => {
        resetData()
        navigate('/')
    }

    const resetData = () => {
        setCountClicks(0);
        setCards([]);
        setHasClickError(false);
        setName('');
    }

    return (
        <S.Container>
            <S.Header>
                <IconArrowBack onClick={handleClickBack}/>
                <span>Nome: {name}</span>    
            </S.Header>
            <S.Button onClick={handleClickShuffleCards}>Embaralhar cartas</S.Button>
            <S.Button onClick={handleClickAddCard}>Adicionar nova carta</S.Button>
            {hasClickError && (
                <S.TextError>{`Só é possível adicionar ${maxClicks} cartas`}</S.TextError>
            )}
            <S.Content>
                {cards.map((card, index) => (
                    <Card key={index} {...card}></Card>
                ))}
            </S.Content>
        </S.Container>
    )
}

export default Cards