import styled from "styled-components";

export const Container = styled.footer`

    width: 100%;
    height: 15%;
    position: relative;

    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
`;

export const MessageContainer = styled.section`

    width: 100%;
    height: 60%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const IconsContainer = styled.section`

    width: 100%;
    height: 40%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.button`

    width: 8%;
    height: 25%;
    bottom: 5%;
    right: 1%;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    font-size: 12px;
    cursor: pointer;
    position: absolute;
    border-radius: 5px;
    font-family: 'Righteous';
    background-color: #FB6B6B;

    &:hover {
        transform: scale(1.10);
    }

    @media screen and (max-width: 760px) {
        width: 15%;
    }
`;