import styled from "styled-components";

export const Righteous = styled.h1`

    font-family: 'Righteous';
    font-weight: 400;
    font-size: ${props => props.size ? props.size : " 36px;"};
    color: ${props => props.color ? props.color : "#FFFFFF;"};
`;

export const Recursive = styled.h1`

    font-family: 'Recursive';
    font-size: ${props => props.size ? props.size : "18px"};
    color: ${props => props.color};
`;