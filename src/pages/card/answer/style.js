import styled from "styled-components";

export const Container = styled.section`

    width: 100%;
    height: 100%;

    display: flex;
    text-align: center;
    border-radius: 5px;
    flex-direction: column;
    background-color: #FFFFD4;
`;

export const AnswerContaner = styled.section`

    width: 80%;
    height: 65%;
    margin: 0 auto;
    
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 760px) {
        width: 100%:
    }
`;

export const ButtonContainer = styled.section`

    width: 60%;
    height: 35%;
    margin: 0 auto;
    
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 760px) {
        width: 100%;
    }
`;

export const Button = styled.section`

    width: 30%;
    height: 80%;

    display: flex;
    cursor: pointer;
    text-align: center;
    border-radius: 5px;
    align-items: center;
    justify-content: center;

    background-color: ${props => props.color};

    &:hover {
        transform: scale(1.10);
    }

    @media screen and (max-width: 760px) {
        width: 30%;
    }
`;