import styled from "styled-components";

export const Container = styled.div`
    margin: 10px;
    width: 200px;
    padding: 10px;
    background-color: #84cd77;
    border-radius: 8px;
    box-shadow: 0 1px 5px 1px grey;

    -webkit-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    transition: all 0.2s ease; 
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Image = styled.img`
    width: 80%;

    :hover {
        transform: scale3d(1.05, 1.05, 1);
    }
`;

export const Description = styled.span`
    margin: 5px 0;
    font-size: 14px;
`;

export const Value = styled.span`
    font-size: 14px;
`;