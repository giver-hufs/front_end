import { MypageStyled } from "../styles/MypageStyled";

import MypageSidebar from "../components/MypageSidebar";
import { Routes, Route } from "react-router-dom";
import React from "react";

import MyChat from "./Mychat";
import Myscreen from "./Myscreen";
import MyPageHeader from "../components/MypageHeader";
import MyInfo from "./MyInfo";
import BasicHeader from "../components/Logo";

export default function Mypage() {
  return (
    <MypageStyled>
      <BasicHeader />
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
