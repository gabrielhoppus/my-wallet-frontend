import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";

function Signup() {
    return (
        <Container>
            <Header>
                <p>MyWallet</p>
            </Header>
            <LoginForm>
                <label htmlFor="name">
                    <LoginInput
                        id="name"
                        type="text"
                        placeholder="Nome"
                        required
                    />
                </label>
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
                <label htmlFor="password_check">
                    <LoginInput
                        id="password"
                        type="password"
                        placeholder="Confirme a senha"
                        required
                    />
                </label>
                <LoginButton type="submit">
                    Cadastrar
                </LoginButton>
            </LoginForm>
            <StyledLink to={`/`}>
                <div>
                    Já tem uma conta? Entre agora!
                </div>
            </StyledLink>
        </Container>
    )
}

export default Signup;

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
    padding-top: 95px;
    margin: 0px auto 28px auto;
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
    margin-bottom: 32px;
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