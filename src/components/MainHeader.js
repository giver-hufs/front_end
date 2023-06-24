import { HeaderStyled } from "../styles/ComponentStyled";
import Logo from "../components/Logo";
import React, { useState } from "react";
import { Link } from "react-router-dom/dist";

export default function BasicHeader() {
  const [drop, setDrop] = useState(false);

  return (
    <HeaderStyled>
      <Logo />
      <img
        className="main-menu"
        src="images/menu.png"
        alt="menu"
        onClick={() => setDrop(!drop)}
      />
      {drop && (
        <div className="main-dropbar">
          <Link to="/introduce">사이트 소개</Link>
          <Link to="/main">매칭</Link>
          <Link to="/donation">기부</Link>
          <Link to="/mypage/*">마이페이지</Link>
        </div>
      )}
    </HeaderStyled>
  );
}
