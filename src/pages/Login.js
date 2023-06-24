import React, { useState, useEffect } from "react";
import { SignupStyled } from "../styles/SignupStyled";
import BasicHeader from "../components/BasicHeader";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 페이지 로드 시 세션 확인
    const storedId = sessionStorage.getItem("id");
    if (storedId) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  const handleLogin = () => {
    axios
      .post("https://giver.fly.dev/user/login", {
        id: id,
        password: password,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);

        localStorage.setItem("id", id);
        localStorage.setItem("name", res.data.nickname);
        localStorage.setItem("major", res.data.major);
        localStorage.setItem("password", res.data.password);
        localStorage.setItem("universityCode", res.data.universityCode);
        localStorage.setItem("phonenumber", res.data.phonenumber);

        alert(res.data.name + "님 반갑습니다.");
        navigate("/main", { replace: true });
      })
      .catch((error) => {
        console.error(error);
        alert(error.response.data.message);
      });
  };

  const handleLogout = () => {
    // 로그아웃 처리
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("name");
    setIsLoggedIn(false);
  };

  return (
    <SignupStyled>
      <BasicHeader />
      <div className="login-wrapper">
        <img className="login-logo" src="images/logo.png" alt="logo" />

        {isLoggedIn ? (
          <div>
            <h3>로그인 상태입니다.</h3>
            <button onClick={handleLogout}>로그아웃</button>
          </div>
        ) : (
          <div className="login-inputs">
            <div className="login-inputs-items">
              <div className="login-inputs-img">
                <img src="images/user.png" alt="id" />
              </div>
              <input
                type="text"
                placeholder="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
                onKeyDown={handleEnter}
              />
            </div>
            <div className="login-inputs-items">
              <div className="login-inputs-img">
                <img src="images/key.png" alt="pw" />
              </div>
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleEnter}
              />
            </div>

            <div className="login-input-sub">
              <div>
                <input type="checkbox" value="save" />
                <span>아이디 저장</span>
              </div>
              <div>비밀번호 찾기</div>
            </div>
          </div>
        )}

        <div className="login-btns">
          <Link to="/signup">
            <button className="login-btn-signup">회원가입</button>
          </Link>
          <button className="login-btn-login" onClick={handleLogin}>
            로그인
          </button>
        </div>
      </div>
    </SignupStyled>
  );
}
