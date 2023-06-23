import styled from "styled-components";

export const HeaderStyled = styled.div `
    height: 70px;
    background-color: #a0c49d;
    display: flex;
    align-items: center;
    padding: 0 12%;
    justify-content: space-between;

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

    .main-menu {
        width: 50px;
        cursor: pointer;
    }

    .main-dropbar {
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-size: 17px;
        background: white;
        padding: 20px;
        border-radius: 10px;
        top: 63px;
        right: 144px;
    }
`

export const LogoStyled = styled.div `
    display: flex;
    
    .logo-img {
        width: 70px;
        height: 70px;
    }

    .logo-txt {
        position: relative;
        right: 20px;
        top: 5px;
        font-size: 30px;
        color: white;
    }
`