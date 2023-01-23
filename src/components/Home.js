import { useEffect, useContext, useState } from "react";
import { UserContext } from "./UserContext";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Exit from "../assets/exit.png";
import Plus from "../assets/plus.png";
import Minus from "../assets/minus.png";

function Home() {
    const navigate = useNavigate();
    const { name, token, setType } = useContext(UserContext);
    const [transaction, setTransaction] = useState([]);
    const [total, setTotal] = useState(0);
    const [balance, setBalance] = useState("");

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios.get(`${process.env.REACT_APP_API_URL}/transactions`, config)
            .then((res) => {
                setTransaction(res.data);
                if (transaction && Array.isArray(transaction) && transaction.length > 0) {
                    getTotal();
                }
            })
            .catch((err) => {
                console.log(err.message);
            });

    }, [transaction, token]);

    function getTotal() {
        let userBalance = 0;
        transaction.map((t) => t.type === "exit" ? userBalance -= Number(t.amount) : userBalance += Number(t.amount));
        setTotal(userBalance.toFixed(2));
        setBalance(total.toString().replace(".", ","));
    }


    function newEntry() {
        setType("entry");
        navigate("/nova-entrada");
    }

    function newWithdrawal() {
        setType("exit");
        navigate("/nova-entrada");
    }

    function endSession() {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios.delete(`${process.env.REACT_APP_API_URL}/sessions`, config)
        .then(() => {
            navigate("/");
        })
        .catch((err) => {
            console.log(err.message)
        })
        
    }

    return (
        <Container>
            <Header>
                <p>Olá, {name}</p>
                <ExitIcon src={Exit} alt="exit-icon" onClick={endSession} />
            </Header>
            <Body>
                <ValuesContainer>
                    {transaction.length > 0 ?
                        transaction.map((transaction) =>
                            <TransactionContainer key={transaction._id}>
                                <LeftContainer>
                                    <Date>
                                        {transaction.date}
                                    </Date>
                                    {transaction.description}
                                </LeftContainer>
                                <RightContainer color={transaction.type === "entry" ? "#03AC00" : "#C70000"}>
                                    {transaction.amount.replace(".", ",")}
                                </RightContainer>
                            </TransactionContainer>,
                        ) : <EmptyTransaction>Não há registros de entrada ou saída</EmptyTransaction>}
                </ValuesContainer>
                {transaction.length > 0 ?
                    <>
                        <TotalHeader>Saldo</TotalHeader>
                        <TotalContainer color={total >= 0 ? "#03AC00" : "#C70000"}>
                            {balance ? balance : "0,00"}
                        </TotalContainer>
                    </> : <></>}
            </Body>
            <Footer>
                <StyledButton onClick={newEntry}>
                    <Icon src={Plus} alt="plus-icon" />
                    <p>Nova entrada</p>
                </StyledButton>
                <StyledButton onClick={newWithdrawal}>
                    <Icon src={Minus} alt="minus-icon" />
                    <p>Nova saída</p>
                </StyledButton>
            </Footer>
        </Container>
    )
}

export default Home;

const EmptyTransaction = styled.div`
    width: 180px;
    font-weight: 400;
    font-size: 20px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
    color: #868686;
    margin-left: auto;
    margin-right: auto;
`;

const ValuesContainer = styled.div`
    height: 400px;
    overflow: scroll;
`;

const TotalHeader = styled.div`
    position: absolute;
    bottom: 10px;
    left: 15px;
    font-weight: 700;
    font-size: 17px;
    color: #000000;
`;

const TotalContainer = styled.div`
    position: absolute;
    bottom: 10px;
    right: 15px;
    color: ${props => props.color};
`;

const RightContainer = styled.div`
    padding-right: 11px;
    font-size: 16px;
    color: ${props => props.color};
`;

const TransactionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 23px;
`;

const Date = styled.div`
    min-width: 48px;
    font-weight: 400;
    font-size: 16px;
    color: #C6C6C6;
`;

const LeftContainer = styled.div`
    display: flex;
    max-width: 250px;
    margin-left: 12px;
    grid-gap: 10px;
    font-weight: 400;
    font-size: 16px;
    color: #000000;
`;

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
    margin-left: auto;
    margin-right: auto;
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
`;

const Body = styled.div`
    width: 326px;
    height: 446px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    background: #FFFFFF;
    border-radius: 5px;
    flex-direction: column;
    position: relative;
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