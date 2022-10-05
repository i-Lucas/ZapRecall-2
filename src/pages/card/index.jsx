import React from "react";
import styled from "styled-components";

import RenderCardNumber from "./number";
import RenderCardAnswer from "./answer";
import RenderCardQuestion from "./question";
import { Recursive } from "../../components/fonts";
import Icon from "../../components/icons";

export default function Flashcard({ question, answer, number, finish }) {

    const [status, setStatus] = React.useState({ state: 1, result: "" });
    const { state, result } = status;
    const open = state > 1 && state !== 4;

    function Content() {

        if (state === 1) return RenderCardNumber(status, setStatus, number);
        if (state === 2) return RenderCardQuestion(status, setStatus, question);
        if (state === 3) return RenderCardAnswer(status, setStatus, finish, answer);
        if (state === 4) return RenderResults(number, result);
    };

    return <Card open={open}> <Content /> </Card>
};

function RenderResults(number, result) {

    const color = result === "hit" ? "#2FBE34" : result === "doubt" ? "#FF922E" : "#FF3030";

    return (
        <ShowResults color={color} >
            <Recursive>Pergunta {number}</Recursive>
            <Icon id={result} />
        </ShowResults>
    )
};

const Card = styled.section`

    width: 50%;
    height: ${props => props.open ? "30%" : "20%;"};
    margin: 1% auto;
    
    border-radius: 5px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);

    @media screen and (max-width: 760px) {
        width: 80%;
        height: ${props => props.open ? "25%" : "15%;"};
    }
`;

const ShowResults = styled.section`

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;

    text-decoration-line: line-through;
    color: ${props => props.color};
    font-weight: 700;

    ion-icon {
        font-size: 20px;
    }
`;