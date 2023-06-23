import styled from "styled-components";

export const SignupStyled = styled.div `
.signup-wrapper {
    padding: 30px 26%;    
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;

    img {
        width: 100px;
        height: auto;
    }
}

.signup-items {
    font-size: 14px;
    text-align: left;
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.signup-items select {
    height: 45px;
    border: 1px solid #cbcaca;
    border-radius: 8px;
    width: 120px;
}

.signup-items-university {
    display: flex;
    gap: 20px;

    width: 100px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
}

.signup-items input{
    width: 100%;
    box-sizing: border-box;
    height: 55px;
    padding: 10px;
    background: #e0e0e0;
    border: none;
    border-radius: 8px;
}

.signup-address {
    gap: 10px;
    display: flex;
    align-items: center;
}

.signup-address input {
    width: 55%;
}

.signup-address button {
    border: none;
    padding: 0 20px;
    height: 50px;
    border-radius: 8px;
    cursor: pointer;
}

.signup-email {
    align-items: center;
    display: flex;
    gap: 11px;
    font-size: 18px;
}

.signup-btn {
    height: 56px;
    border: none;
    margin: 35px 0;
    width: 50%;
    border-radius: 8px;
    background: #a0c49d;
    color: white;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
}

.finish-wrapper .login-logo {
    height: 250px;
    margin: 65px auto 35px;
}

.finish-container {
    gap: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.finish-container img {
    height: 200px;
    width: fit-content;
}

.finish-title {
    font-size: 30px;
}

.postmodal{
    background : rgba(0,0,0,0.25);
    position : fixed;
    left:0;
    top:0;
    height:100%;
    width:100%;
}

.signup-wrapper a {
    width: 100%;
}

.login-wrapper {
    padding: 20px 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.login-inputs{
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
}

.login-inputs-items{
    display: flex;
}

.login-inputs-img {
    height: 60px;
    width: 70px;
    padding: 15px;
    background: #e8e8e8;
    box-sizing: border-box;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
    border: 1px solid #d0d0d0;
}

.login-inputs-img img{
    width: 30px;
}

.login-logo {
    height: 80px;
    margin: 30px;
}

.login-inputs .login-inputs-items input{
    width: 340px;
    height: 60px;
    font-size: 17px;
    box-sizing: border-box;
    border: 1px solid #d0d0d0;
    padding: 10px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    outline: none;
}

.login-input-sub {
    display: flex;
    align-content: stretch;
    justify-content: space-between;
    width: 400px;
    font-size: 14px;
}

.login-btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-top: 40px;
}

.login-btns button {
    border: none;
    height: 50px;
    width: 400px;
    font-size: 17px;
    font-weight: bold;
    border-radius: 5px;
    color: white;
    cursor: pointer;
}

.login-btn-signup {
    background-color: #B1B1B1;
}

.login-btn-login {
    background-color: #a0c49d;
}

.login-sns-naver, .login-sns-kakao{
    width: 50px;
    height: 50px;
    background-color: aliceblue;
    border-radius: 50%;
}

.login-sns {
    font-size: 14px;
    margin-top: 15px;
}

.login-sns-btns {
    display: flex;
    justify-content: space-between;
    margin: 15px;
}

.login-sns-naver img {
    width: 25px;
    margin: 12px;
}

.login-sns-kakao img {
    width: 35px;
    margin: 8px;
}

button {
    cursor: pointer;
}

/* TermsOfService */
.tos-wrapper {
    padding: 0px 18%;
}

.tos-step img {
    height: 90px;
}

.tos-container {
    padding-top: 30px;
    width: 75%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.tos-check-all {
    display: flex;
    gap: 5px;
    border-bottom: 2px solid #DFDFDF;
    padding-bottom: 10px;
}

.tos-check-title {
    display: flex;
    gap: 5px;
    color: #6A6A6A;
}

.tos-check-title span{
    color: #D24D4D
}

.tos-check-txt {
    border: 1px solid #8D8D8D;
    text-align: left;
    padding: 5px;
}

.tos-button {
    display: flex;
    place-content: center;
    gap: 30px;
    margin: 40px 0;
}

.tos-button button {
    width: 225px;    
    height: 56px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    color: white;
    font-weight: bold;
}

.tos-button-cancle{
    background: #B1B1B1;
}

.tos-button-ok{
    background: #a0c49d;
}

.tos-total-txt {
    margin-top: 30px;
}
`