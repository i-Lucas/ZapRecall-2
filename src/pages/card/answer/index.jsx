import React from "react";

import { Recursive } from "../../../components/fonts";
import { Container, AnswerContaner, ButtonContainer, Button } from "./style";

export default function RenderCardAnswer(status, setStatus, finish, answer) {

    function RenderOptions() {

        const options = [
            { content: "Não lembrei", result: "error", color: "#FF3030" },
            { content: "Quase não lembrei", result: "doubt", color: "#FF922E" },
            { content: "Zap!", result: "hit", color: "#2FBE34" }
        ];

        function update(result) {
            setStatus({ ...status, state: 4, result });
            finish(result);
        };

        return options.map(({ content, result, color }, index) =>

            <Button
                key={index}
                color={color}
                onClick={() => update(result)}>
                <Recursive size="14px" color="#FFFFFF">
                    {content}
                </Recursive>
            </Button>
        )
    };

    return (
        <Container>
            <AnswerContaner>
                <Recursive>{answer}</Recursive>
            </AnswerContaner>
            <ButtonContainer>
                <RenderOptions />
            </ButtonContainer>
        </Container>
    )
};
