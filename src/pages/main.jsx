import React from "react";
import styled from "styled-components";

import Home from "./home";
import Deck from "./deck";

export default function Main() {

    const [visible, setVisible] = React.useState(true);
    const [data, setData] = React.useState([]);

    return (
        <MainContainer>
            <Home status={{ visible, setVisible, data, setData }} />
            <Deck visible={!visible} data={data} />
        </MainContainer>
    )
};

const MainContainer = styled.div`

    width: 100%;
    height: 100vh;
`;


