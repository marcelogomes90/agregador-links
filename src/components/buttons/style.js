import styled from "styled-components";

export const DivButton = styled.div`
    margin-top: 14px;
    width: 330px;
    height: 50px;
    background-color: rgba(238, 238, 228, 0.7);
    line-height: 50px;
    border-radius: 14px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    transition: all 0.2s ease-out;

    &:hover {
        width: 340px;
        height: 52px;
        margin-top: 18px;
        line-height: 54px;
        background-color: #ddddd4;
    }

    &:active {
        width: 330px;
        height: 50px;
        margin-top: 20px;
        line-height: 50px;
    }
`

export const DivIcon = styled.div`
    position: relative;
    left: -85px;
`

export const Ancora = styled.a`
    text-decoration: none;
    color: black;

`

export const Texto = styled.p`
    width: 100px;
    text-align: center;
    line-height: 120%;
`