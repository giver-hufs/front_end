import { HeaderStyled } from "../styles/ComponentStyled";
import Logo from "../components/Logo";
import React, { useState } from "react";
import { Link } from "react-router-dom";

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
          <div>사이트 소개</div>
          <Link to = "/login"><div>매칭</div></Link>
          <Link to = "/donation"><div>기부</div></Link>
          <Link to = "/mypage"><div>마이페이지</div></Link>
        </div>
      )}
    </HeaderStyled>
  );
}
