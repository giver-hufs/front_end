import { MypageStyled } from "../styles/MypageStyled";

import MypageSidebar from "../components/MypageSidebar";
import { Routes, Route } from "react-router-dom";
import React from "react";

import MyChat from "./Mychat";
import Myscreen from "./Myscreen";
import MyPageHeader from "../components/MypageHeader";
import MyInfo from "./MyInfo";
import MainHeader from "../components/MainHeader";

export default function Mypage() {
  return (
    <MypageStyled>
      <MainHeader />
      <div className="mypage-wrapper">
        <MypageSidebar />
        <Routes>
          <Route path="/" element={<MyInfo />} />
          <Route path="/chat" element={<MyChat />} />
          <Route path="/screen" element={<Myscreen />} />
        </Routes>
      </div>
    </MypageStyled>
  );
}
