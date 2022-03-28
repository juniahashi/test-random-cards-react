import { CardInterface } from "types/card";

const cardService = {

    async getCards(count: number): Promise<any> {
        try {
            const response: any = await fetch(`http://deckofcardsapi.com/api/deck/new/draw/?count=${count}`)
            const data = await response.json()
            const cardList: CardInterface[] = [...data.cards]
            return cardList
        } catch (e) {
            console.error(e)
        }
    }
}

export default cardService;