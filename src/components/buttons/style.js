import styled from "styled-components";

export const DivButton = styled.div`
    margin-top: 14px;
    width: 330px;
    height: 50px;
    background-color: #eeeee4;
    line-height: 50px;
    border-radius: 14px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;

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