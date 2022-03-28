import styled from "styled-components";

export const Container = styled.div`
    margin: 20px
`;
export const InputField = styled.div`
    position: relative;
    padding: 15px 0 0;
    margin: auto;
    width: 50%;
`;
export const Title = styled.h1`
    color: #EF5D50
`;

export const Input = styled.input`
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid #EF5D50;
    outline: 0;
    font-size: 1.3rem;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
`;

export const Label = styled.label`
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: #EF5D50;
`;

export const Button = styled.button`
    margin-top: 30px;

    :disabled {
        background-color: rgba(239, 93, 80, 0.5);
        cursor: default;
    }
`;