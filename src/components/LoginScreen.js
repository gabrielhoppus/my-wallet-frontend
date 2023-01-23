import styled from "styled-components";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import { UserContext } from "./UserContext";

function LoginScreen() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [disableInput, setDisableInput] = useState(false);
    const navigate = useNavigate();
    const { setName, setToken } = useContext(UserContext);

    function userLogin(e) {
        setDisableInput(true);
        e.preventDefault();
        const body = { email, password };

        axios.post(`${process.env.REACT_APP_API_URL}/sessions`, body)
            .then((res) => {
                navigate("/home");
                setToken(res.data.token);
                setName(res.data.name);
            })
            .catch((err) => {
                alert(err.message);
                setDisableInput(false);
            });
    }

    return (
        <Container>
            <Header>
                <p>MyWallet</p>
            </Header>
            <LoginForm onSubmit={userLogin}>
                <label htmlFor="email">
                    <LoginInput
                        disabled={disableInput}
                        id="email"
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label htmlFor="password">
                    <LoginInput
                        disabled={disableInput}
                        id="password"
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </label>
                <LoginButton type="submit">
                    {disableInput ? <ThreeDots
                        height="13"
                        width="51"
                        color="#FFFFFF"
                    /> :
                        "Entrar"}
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
    
    width: 147px;
    padding-top: 159px;
    margin: 0px auto 24px auto;
    font-size: 32px;
    color: #FFFFFF;
    p {
        font-family: 'Saira Stencil One';
    }
`;

const LoginForm = styled.form`
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