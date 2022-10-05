import styled from "styled-components";

export const HomeContainer = styled.div`

    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #FB6B6B;
    justify-content: space-around;
`;

export const Select = styled.select`

    width: 20%;
    height: 8%;

    color: #ADADAD;
    cursor: pointer;
    text-align: center;
    border-radius: 5px;
    font-family: 'Righteous';
    background-color: #FFFFFF;

    @media screen and (max-width: 760px) {
        width: 55%;
    }
`;

export const Button = styled.button`

    width: 20%;
    height: 8%;

    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    border-radius: 5px;
    background: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    &:hover {
        transform: scale(1.10);
    }

    @media screen and (max-width: 760px) {
        width: 55%;
    }
`;