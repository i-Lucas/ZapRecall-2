import React from "react";

import { Recursive } from "../../../components/fonts";
import { Container } from "./style";

export default function RenderCardNumber(status, setStatus, number) {
    return (
        <Container>
            <Recursive>Pergunta {number}</Recursive>
            <ion-icon onClick={() => setStatus({ ...status, state: 2 })} name="play" />
        </Container>
    )
};