import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

function NewEntry() {
    const navigate = useNavigate();
    const { token, type } = useContext(UserContext);
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [disableInput, setDisableInput] = useState(false);
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const body = {
        amount,
        description,
        type
    };

    function saveEntry(e) {
        setDisableInput(true);
        e.preventDefault();

        axios.post(`${process.env.REACT_APP_API_URL}/transactions`, body, config)
            .then(() => {
                alert("Transação efetuada com sucesso");
                navigate("/home");
            })
            .catch((err) => {
                alert(err.message);
                setDisableInput(false);
            });
    }

    return (
        <Container>
            <Header>
                <p>
                    {type === "entry" ? "Nova Entrada" : "Nova Saída"}
                </p>
            </Header>
            <LoginForm onSubmit={saveEntry}>
                <label htmlFor="amount">
                    <LoginInput
                        disabled={disableInput}
                        id="amount"
                        type="number"
                        placeholder="Valor"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                        required
                    />
                </label>
                <label htmlFor="description">
                    <LoginInput
                        disabled={disableInput}
                        id="description"
                        type="text"
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        required
                    />
                </label>
                <ApplyButton type="submit" disabled={disableInput}>
                    {disableInput ? <ThreeDots
                        height="13"
                        width="51"
                        color="#FFFFFF"
                    /> :
                        type === "entry" ? "Salvar Entrada" : "Salvar Saída"}
                </ApplyButton>
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
    ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        }

    input[type=number] {
        -moz-appearance: textfield;
    }
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

const ApplyButton = styled.button`
    width: 326px;
    height: 46px;
    margin-bottom: 36px;
    background: #A328D6;
    border: none;
    border-radius: 5px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 20px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
`;