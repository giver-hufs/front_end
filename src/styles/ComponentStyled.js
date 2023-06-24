import styled from "styled-components";

export const HeaderStyled = styled.div`
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
        z-index: 1;
    }
`

export const LogoStyled = styled.div `
  .header-left {
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
`;


export const CreateChatStyled = styled.div`
  font-family: "Noto Sans KR";

  .cc-header {
    background: #d3d3d3;
    height: 50px;
    display: flex;

    button {
      margin-left: auto;
      font-size: 21px;
      margin-right: 20px;
      border: none;
      background: none;
    }
  }

  .cc-inputwrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 30px 40px;

    .cc-input-roomname {
      border: none;
      border-bottom: 2px solid #d02d2d;
      font-size: 18px;
    }

    .cc-input {
      display: flex;
      gap: 10px;
      align-items: center;

      img {
        width: 25px;
      }
    }

    input {
      border: none;
      font-size: 16px;
      padding: 5px;
      width: 100%;
    }

    .cc-savebtn {
      height: 50px;
      border: none;
      background: #d24d4d;
      color: white;
      font-family: "Noto Sans KR";
      font-size: 16px;
      border-radius: 7px;
      margin-top: 14%;
    }
  }
`;

export const PopupChatStyled = styled.div`
  .pc-roomname {
    margin: auto;
    background: #ffdcdc;
    height: 50px;
    border-radius: 15px;
    box-shadow: 2px 4px 10px #0000007d;
    width: 80%;
    padding: 13px;
    box-sizing: border-box;
    font-family: "Noto Sans KR";
  }

  .pc-wrapper {
    background: radial-gradient(#d24d4d, transparent);
    height: 100vh;
    margin: 30px 5%;
    border-radius: 26px;
    padding: 20px 40px;
    box-sizing: border-box;
    font-family: "Noto Sans KR";
  }

  .pc-chat-contents {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .pc-mychat {
    width: fit-content;
    background: white;
    border: 1px solid #d02d2d;
    border-radius: 21px 35px 0px 15px;
    padding: 6px 20px;
    margin-left: auto;
  }

  .pc-chat-message {
    width: fit-content;
    background: white;
    border: 1px solid #00000087;
    border-radius: 0px 21px 15px 35px;
    padding: 6px 20px;
  }

  .pc-chat-sender {
    font-size: 13px;
  }
`;

export const MyPageHeaderStyled = styled.div`
  height: 70px;
  background-color: #d18a8a;
  display: flex;
  align-items: end;
  justify-content: center;

  img {
    height: 55px;
  }
`;

export const MyPageSidebarStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .mypage-user-img {
    width: 230px;
    height: 230px;
    border-radius: 50%;
    background: rgb(249, 243, 243);
  }

  .mypage-user-name {
    font-size: 25px;
    font-weight: bold;
  }

  .mypage-list {
    background: #f9f3f3;
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: 18px;
    width: 280px;
    padding: 25px;
    text-align: left;
    box-sizing: border-box;
    border-radius: 25px;

    .mypage-list-items {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      gap: 7px;
      border-bottom: 1px solid #d8adad;
      padding-bottom: 6px;
      color: #ab7a7a;
      font-weight: bold;
      font-size: 17px;
    }

    .focus {
      color: #723131;
    }
  }

  .mypage-list-title {
    color: #c05454;
    font-weight: bold;
  }
`;
