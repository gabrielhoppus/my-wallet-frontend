import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

function NewEntry() {
    const navigate = useNavigate();

    function saveEntry(){
        navigate("/home");
    }

    return (
        <Container>
            <Header>
                <p>Nova entrada</p>
            </Header>
            <LoginForm>
                <label htmlFor="amount">
                    <LoginInput
                        id="amount"
                        type="text"
                        placeholder="Valor"
                        required
                    />
                </label>
                <label htmlFor="description">
                    <LoginInput
                        id="description"
                        type="text"
                        placeholder="Descrição"
                        required
                    />
                </label>
                <LoginButton type="submit" onClick={saveEntry}>
                    Salvar entrada
                </LoginButton>
            </LoginForm>
        </Container>
    )
}


export default NewEntry;

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
    margin-bottom: 40px;
    p {
        margin-left: 24px;
        font-weight: 700;
        font-size: 26px;
        color: #FFFFFF;
    }
`;

const LoginForm = styled.div`
    width: 326px;
    margin-left: auto;
    margin-right: auto;
`;

const LoginInput = styled.input`
    width: 311px;
    height: 58px;
    color: #000000;
    font-weight: 500;
    font-size: 20px;
    background: #FFFFFF;
    border-radius: 5px;
    border: none;
    margin-bottom: 13px;
    padding-left: 15px;
    ::placeholder {
        color: #000000;
    }
    :focus{
        outline: none;
        border: 2px solid #CCCCCC;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
        font-size: 20px;
        padding-left: 11px;
    }
    :focus::placeholder {
        color: transparent;
    }
`;

const LoginButton = styled.button`
    width: 326px;
    height: 46px;
    margin-bottom: 36px;
    background: #A328D6;
    border: none;
    border-radius: 5px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 20px;
`;