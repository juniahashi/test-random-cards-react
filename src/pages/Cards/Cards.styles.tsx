import styled from "styled-components";

export const Container = styled.div`
    margin: 20px
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    color: #EF5D50;
    font-weight: bold;
    font-size: 20px;

    svg {
        cursor: pointer;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 25px;
`;

export const Button = styled.button`
    margin: 0 15px 5px 0;
`;

export const TextError = styled.div`
    color: red;
    font-size: 12px;
`;