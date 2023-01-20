import styled from "styled-components";
import { Link, useNavigate} from "react-router-dom";
import Exit from "../assets/exit.png";
import Plus from "../assets/plus.png";
import Minus from "../assets/minus.png";

function Home() {
    const navigate = useNavigate();

    function newEntry(){
        navigate("/nova-entrada")
    }

    function newExit(){
        navigate("/nova-saida")
    }

    return (
        <Container>
            <Header>
                <p>Olá, Fulano</p>
                <ExitIcon src={Exit} alt="exit-icon" />
            </Header>
            <Body>
                <p>Não há registros de entrada ou saída</p>
            </Body>
            <Footer>
                <StyledButton onClick={newEntry}>
                    <Icon src={Plus} alt="plus-icon" />
                    <p>Nova entrada</p>
                </StyledButton>
                <StyledButton onClick={newExit}>
                    <Icon src={Minus} alt="minus-icon" />
                    <p>Nova saída</p>
                </StyledButton>
            </Footer>
        </Container>
    )
}

export default Home;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #8C11BE;
    width: 100%;
    height: 667px;
`;

const Header = styled.div`
    width: 375px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 25px;
    margin-bottom: 22px;
    p {
        margin-left: 24px;
        font-weight: 700;
        font-size: 26px;
        color: #FFFFFF;
    }
`;

const ExitIcon = styled.img`
    width: 23px;
    height: 24px;
    margin-right: 24px;
`

const Body = styled.div`
    width: 326px;
    height: 446px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    background: #FFFFFF;
    border-radius: 5px;
    text-align: center;
    align-items: center;
    justify-content: center;
    p {
        width: 180px;
        height: 46px;
        font-weight: 400;
        font-size: 20px;
        color: #868686;
    }
`;

const Footer = styled.div`
    width: 326px;
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
`;

const StyledButton = styled.button`
    margin-top: 13px;
    width: 155px;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    border: none;
    display: flex;
    flex-direction: column;
    p{
        width: 64px;
        display: flex;
        text-align: left;
        margin: 31px 0 0 10px;
        font-weight: 700;
        font-size: 17px;
        color: #FFFFFF;
    }
`;

const Icon = styled.img`
    width: 25px;
    height: 25px;
    margin: 9px 0 0 8px;
`;