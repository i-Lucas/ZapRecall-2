import styled from "styled-components";

export const Container = styled.section`

    width: 100%;
    height: 100%;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-around;
    
    border-radius: 5px;
    padding: 0 5% 0 5%;
    text-align: center;
    background-color: #FFFFD4;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);

    ion-icon {

        position: absolute;
        cursor: pointer;
        bottom: 5%;
        right: 5%;
        
        &:hover {
            transform: scale(1.20);
        }
    }
`;