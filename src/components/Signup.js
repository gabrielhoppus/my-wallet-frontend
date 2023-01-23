import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";

function Signup() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmation, setConfirmation] = useState("");
    const [disableInput, setDisableInput] = useState(false);
    const [user, setUser] = useState("");
    const { setName } = useContext(UserContext);
    const navigate = useNavigate();

    function userSignup(e) {
        
        setDisableInput(true);
        e.preventDefault();
        const body = { name: user, email, password, confirmation };
        axios.post(`${process.env.REACT_APP_API_URL}/users`, body)
            .then(() => {
                alert("Cadastro realizado com sucesso!");
                navigate("/");
                setName(user);
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
            <LoginForm onSubmit={userSignup} >
                <label htmlFor="name">
                    <LoginInput
                        disabled={disableInput}
                        id="name"
                        type="text"
                        placeholder="Nome"
                        value={user}
                        onChange={e => setUser(e.target.value)}
                        required
                    />
                </label>
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
                        autocomplete="chrome-off"
                        required
                    />
                </label>
                <label htmlFor="password_check">
                    <LoginInput
                        disabled={disableInput}
                        id="password_check"
                        type="password"
                        placeholder="Confirme a senha"
                        value={confirmation}
                        onChange={e => setConfirmation(e.target.value)}
                        autocomplete="chrome-off"
                        required
                    />
                </label>
                <LoginButton type="submit" disabled={disableInput}>
                    {disableInput ? <ThreeDots
                        height="13"
                        width="51"
                        color="#FFFFFF"
                    /> :
                        "Cadastrar"}
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