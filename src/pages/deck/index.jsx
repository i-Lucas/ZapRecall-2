import React from "react";

import Flashcard from "../card";
import Footer from "../footer";
import logo from "../../assets/img/logo.svg";
import { Righteous } from "../../components/fonts";
import { DeckContainer, Header, Main } from "./style";

export default function Deck({ visible, data }) {

    const [questions, setQuestions] = React.useState([]);
    const [answers, setAnswers] = React.useState([]);

    function RenderCards() {
        return questions.map(({ question, answer }, index) =>

            <Flashcard
                question={question}
                answer={answer}
                number={index + 1}
                key={index}
                finish={answer => setAnswers([...answers, answer])}
            />
        )
    };

    function BuildCards() {

        const random = data.sort((a, b) => Math.random() - 0.5);
        return questions.length === 0 ? setQuestions([...random]) : RenderCards();
    };

    function RenderContent() {
        return (
            <DeckContainer>
                <Header>
                    <img src={logo} alt="logo" />
                    <Righteous>ZapRecall</Righteous>
                </Header>
                <Main>
                    {BuildCards()}
                </Main>
                <Footer props={{ answers, questions }} />
            </DeckContainer>
        )
    };

    return visible && RenderContent();
};