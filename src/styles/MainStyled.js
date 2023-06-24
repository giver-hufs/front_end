import styled from "styled-components";

export const MapStyled = styled.div `
    width: 500px;
    height: 490px;
`

export const MainPageStyled = styled.div `
    background-color: #f1f1f1;
    height: 100vh;

    // button {
    //     border: none;
    //     font-family: 'Pretendard-Thin';
    //     cursor: pointer;
    //     font-size: 18px;
    //     background: #a0c49d;
    //     padding: 13px 45px;
    //     border-radius: 15px;
    //     color: white;
    //     position: absolute;
    //     bottom: 5%;
    //     right: 5%;
    // }

    .map-wrapper {
        justify-content: center;
        display: flex;
        flex-direction: row;
        gap: 50px;
        padding: 30px;
        background: #e9e7e7;

        @media (max-width: 768px) {
          flex-direction: column;
        }
    }

    .help-list-title {
        width: 350px;
        background: white;
        padding: 10px;
    }

    .help-list-writer {
        width: 150px;
        background: white;
        padding: 10px;
    }

    th {
        padding: 10px;
        background: white;
    }

    .help-list-items {
        display: flex;
        gap: 10px;
        padding: 10px;
        place-content: center;
        font-size: 17px;
        
    }

    .help-list {
        padding-top: 50px;
        height: 500px;
    }

    .HelpList {
        height: 590px;
        overflow: scroll;
        box-sizing: border-box;
    }

`

export const MainStyled = styled.div `
    height: 100vh;
    background: url(/images/background.jpg) no-repeat center;
    background-size: cover;
    
    .main-logo {
        padding-top: 90px;
        width: 700px;
    }

    button {
        padding: 13px 100px;
        font-size: 20px;
        border-radius: 16px;
        border: none;
        color: white;
        background: #a0c49d;
        font-weight: bold;
        box-shadow: 5px 6px 5px #00000057;
        cursor: pointer;
    }

`