import BasicHeader from "../components/BasicHeader";
import { Link } from "react-router-dom";
import { SignupStyled } from "../styles/SignupStyled";

export default function FinishSignup() {
    return(
        <SignupStyled>
            <BasicHeader />
            <div className = "finish-wrapper">
                <img className = "login-logo" src = "images/logo.png" alt = "logo" />

                <div className = "finish-container">
                    <div className = "finish-title">Giver 가입을 환영합니다!</div>
                    <div className = "finish-txt">
                        로그인한 후 서비스를 이용하실 수 있습니다
                    </div>
                </div>

                <div className = "tos-button">
                    <Link to = "/">
                        <button className = "tos-button-cancle">홈으로</button>
                    </Link>
                    <Link to = "/login">
                        <button className = "tos-button-ok">로그인</button>
                    </Link>
                </div>
            </div>
        </SignupStyled>
    )
}