import { MainStyled } from "../styles/MainStyled";
import MainHeader from "../components/MainHeader";
import { Link } from "react-router-dom";

export default function StartPage() {
    return(
        <MainStyled>
            <MainHeader />
            <div className = "main-wrapper">
                <div>
                    <img className = "main-logo" src = "images/main.png" alt = "logo" />
                </div>
                <Link to = "/login">
                    <button>Login</button>
                </Link>
            </div>
        </MainStyled>
    )
}