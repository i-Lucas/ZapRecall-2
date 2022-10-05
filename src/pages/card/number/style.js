import styled from "styled-components";

export const Container = styled.section`

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    ion-icon {

        cursor: pointer;

        &:hover {
            transform: scale(1.20);
        }
    }
`;