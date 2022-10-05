import React from "react";

import Icon from "../../components/icons";
import { Recursive } from "../../components/fonts";
import { Container, MessageContainer, IconsContainer, Button } from "./style";

export default function Footer({ props }) {

    const { answers, questions } = props;

    const messages = {
        win: <>Parabéns ! <br /> Você não esqueceu de nenhum flashcard !</>,
        lose: <>Putz...<br />Ainda faltam alguns... Mas não desanime !</>,
        score: <>{answers.length}/{questions.length} Concluídos</>
    };

    const content = questions.length !== answers.length ? messages.score :
        answers.includes("error") ?
            messages.lose : messages.win;

    function RenderIcons() {

        const mapIcons = answers.map((answers, index) => <Icon id={answers} key={index} />)

        return (
            <IconsContainer>
                {content === messages.score ? mapIcons
                    : content === messages.win ?
                        <Icon id={"win"} /> : <Icon id={"lose"} />}
            </IconsContainer>
        )
    };

    function ResetButton() {
        return content !== messages.score && <Button onClick={() => location.reload()} >Reset</Button>
    };

    return (
        <Container>
            <MessageContainer>
                <Recursive color="black" size="18px">
                    {content}
                </Recursive>
            </MessageContainer>
            <RenderIcons />
            <ResetButton />
        </Container>
    )
};