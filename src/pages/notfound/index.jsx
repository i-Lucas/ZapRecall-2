import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Recursive } from "../../components/fonts";
import logo from "../../assets/img/logo.svg";

export default function NotFound() {

    const navigate = useNavigate();
    const [count, setCount] = React.useState(6);

    React.useEffect(() => {

        setTimeout(() => setCount(count - 1), 1000);
        if (count === 0) return navigate("/");
    });

    return (

        <Container>
            <img src={logo} alt="logo" /><br /><br />
            <Recursive color="#FFFFFF">Sorry</Recursive><br />
            <Recursive color="#FFFFFF">this page does not exist !</Recursive><br />
            <Recursive color="#FFFFFF">you will be redirected to the main page in</Recursive>
            <br />
            <Recursive color="#000000">{count}</Recursive>
        </Container>
    )
};

const Container = styled.section`

    width: 100%;
    height: 100vh;

    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: #FB6B6B;
`;