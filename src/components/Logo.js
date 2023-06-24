import { Link } from "react-router-dom/dist";
import { LogoStyled } from "../styles/ComponentStyled";

export default function BasicHeader() {
  return (
    <Link to="/main ">
      <LogoStyled>
        <img className="logo-img" src="images/logo.png" alt="logo" />
        <div className="logo-txt">Giver</div>
      </LogoStyled>
    </Link>
  );
}
