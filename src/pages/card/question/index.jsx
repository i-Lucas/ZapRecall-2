import React from "react"

import { Recursive } from "../../../components/fonts";
import { Container } from "./style";

export default function RenderCardQuestion(status, setStatus, question) {
    return (
        <Container>
            <Recursive>{question}</Recursive>
            <ion-icon name="play-forward" onClick={() => setStatus({ ...status, state: 3 })} />
        </Container>
    )
};