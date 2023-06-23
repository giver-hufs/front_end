import styled from "styled-components";

export const HeaderStyled = styled.div `
    height: 70px;
    background-color: #a0c49d;
    
    .Header {
        background-color: #a0c49d;
        height: 80px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .header-search input {
        width: 500px;
        height: 45px;
        border: none;
        border-radius: 60px;
        background: white;
    }

    .header-left{
        display: flex;
        gap: 20px;
        align-items: center;
    }

    .header-logo img {
        height: 40px;
    }

    .header-right {
        width: 45px;
    }

    .header-right-my {
        display: flex;
        gap: 20px;
        cursor: pointer;
    }
`