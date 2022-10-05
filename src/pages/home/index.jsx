import React from "react";

import { data } from "./data";
import logo from "../../assets/img/logo.svg";
import { HomeContainer, Button, Select } from "./style";
import { Righteous, Recursive } from "../../components/fonts";

export default function Home({ status }) {

    const { setData, visible, setVisible } = status;

    return visible && (

        <HomeContainer>
            <img src={logo} alt="logo" />
            <Righteous>ZapRecall</Righteous>

            <Select defaultValue={"DEFAULT"} onChange={e => setData(data[e.target.value])}>
                <option value="DEFAULT" disabled>Escolha seu Deck</option>
                <option value="react">React</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="js">JavaScript</option>
            </Select>

            <Button disabled={!status.data.length > 0} onClick={() => setVisible(false)}>
                <Recursive color="#D70900">Iniciar Recall!</Recursive>
            </Button>
        </HomeContainer>
    )
};