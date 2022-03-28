import { CardContext } from "context/CardContex";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as S from './Home.styles';

const Home = () => {
    const { name, setName } = useContext(CardContext);
    const navigate = useNavigate();
    
    const handleSetName = (value: string) => setName(value)

    const handleClick = () => navigate("/cards");
    
    return (
        <S.Container>
            <S.Title>Test Random Cards</S.Title>
            <S.InputField>
                <S.Input
                    data-testid="input-name"
                    type="text" className="form-control"
                    name="name"
                    value={name}
                    onChange={e => handleSetName(e.target.value)}/>
                    <S.Label>Nome:</S.Label>
            </S.InputField>
            <S.Button
                data-testid="next-button"
                disabled={!name} 
                onClick={handleClick} 
                type="button"
            >
                Ver cartas
            </S.Button>
        </S.Container>
    )
}

export default Home