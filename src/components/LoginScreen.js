import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";

function LoginScreen() {
    const navigate = useNavigate();

    function userLogin(){
        navigate("/home");
    }

    return (
        <Container>
            <Header>
                <p>MyWallet</p>
            </Header>
            <LoginForm>
                <label htmlFor="email">
                    <LoginInput
                        id="email"
                        type="email"
                        placeholder="E-mail"
                        required
                    />
                </label>
                <label htmlFor="password">
                    <LoginInput
                        id="password"
                        type="password"
                        placeholder="Senha"
                        required
                    />
                </label>
                <LoginButton type="submit" onClick={userLogin}>
                    Entrar
                </LoginButton>
            </LoginForm>
            <StyledLink to={`/cadastro`}>
                <div>
                    Primeira vez? Cadastre-se!
                </div>
            </StyledLink>
        </Container>
    )
}

export default LoginScreen;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #8C11BE;
    width: 100%;
    height: 667px;
`;

const Header = styled.div`
    font-family: 'Saira Stencil One';
    width: 147px;
    padding-top: 159px;
    margin: 0px auto 24px auto;
    font-size: 32px;
    color: #FFFFFF;
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

const StyledLink = styled(Link)`
    margin-left: auto;
    margin-right: auto;
    font-weight: 700;
    font-size: 15px;
    text-align: center;
    color: #FFFFFF;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;