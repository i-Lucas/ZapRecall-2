import React from "react";
import win from "../assets/img/win.svg";
import lose from "../assets/img/lose.svg";

export default function Icon({ id }) {

    const icons = {

        hit: <span style={{ color: "#2FBE34" }} ><ion-icon name="happy" /></span>,
        doubt: <span style={{ color: "#FF922E" }} ><ion-icon name="alert-circle" /></span>,
        error: <span style={{ color: "#FF3030" }} ><ion-icon name="close-circle" /></span>,
        win: <img src={win} alt="win" />,
        lose: <img src={lose} alt="lose" />
    };

    return icons[id];
};