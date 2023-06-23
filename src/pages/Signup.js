import React, { useState } from 'react';

import BasicHeader from "../components/BasicHeader";

import { SignupStyled } from "../styles/SignupStyled";

import { useNavigate } from "react-router-dom";

import axios from 'axios';

export default function Signup() {
    const navigate = useNavigate();

    // 회원가입
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phonenumber, setPhone] = useState("");
    const [nickname, setNickName] = useState('');
    const [year, setYear] = useState('');
    const [major, setMajor] = useState('');

    // 대학교
    const [university, setUniversity] = useState("");
    const [universityCode, setUniversityCode] = useState("");

    // const ClickSchool = () => {
    //     axios.get(`https://giver.fly.dev/universityCode/${university}`)
    //     .then((res)=>{
    //         setUniversityCode(res.data.university)
    //     })
    //     .catch((error) => {
    //         debugger
    //         alert(error.response.data.message)
    //     })
    // }

    const ClickSingup = () => {
        axios.get(`https://giver.fly.dev/universityCode/${university}`)
            .then((res)=>{
                setUniversityCode(res.data);
                axios.post("https://giver.fly.dev/user/signup", {
                id: id,
                name: name,
                year: year,
                nickname: nickname,
                password: password,
                phonenumber : phonenumber,
                universityCode: Number(universityCode),
                major : major,
            })
            .then((response) => {
            alert('회원가입 성공!');
            console.log("User token", response.config.data);          ;
            navigate("/complete", {replace:true});
            })
            .catch((error) => {
                
                alert("An error occured", error.message);
            })
        })
        .catch((error) => {
            debugger
            alert(error.response.data.message)
        })

        
      }
    

    return(
        <SignupStyled>
            <BasicHeader />
            <div className = "signup-wrapper">
                <img className = "login-logo" src = "images/logo.png" alt = "logo" />

                <div className = "signup-items">
                    <div className = "signup-items-txt">사용자 아이디를 입력해주세요.</div>
                    <input 
                        type="text"
                        value = {id}
                        onChange = {(e) => {setId(e.target.value)}}
                        placeholder="6-13자의 영문 소문자와 숫자만 사용이 가능합니다."
                    />
                </div>

                <div className = "signup-items">
                    <div className = "signup-items-txt">사용자 비밀번호를 입력해주세요.</div>
                    <input 
                        type="password"
                        value = {password}
                        onChange = {(e) => {setPassword(e.target.value)}}
                        placeholder="영문, 숫자, 특수문자를 조합하여 6-13자로 작성해주세요."
                    />
                </div>

                <div className = "signup-items">
                    <div className = "signup-items-txt">비밀번호 확인</div>
                    <input 
                        type="password"
                    />
                </div>

                <div className = "signup-items">
                    <div className = "signup-items-txt">사용자 이름을 입력해주세요.</div>
                    <input 
                        value = {name}
                        onChange = {(e) => {setName(e.target.value)}}
                        type="text"
                        placeholder="사용자 이름"
                    />
                </div>

                <div className = "signup-items">
                    <div className = "signup-items-txt">생년월일을 입력해주세요.</div>
                    <input 
                        value = {year}
                        onChange = {(e) => {setYear(e.target.value)}}
                        type="text"
                        placeholder="생년월일"
                    />
                </div>

                <div className = "signup-items">
                    <div className = "signup-items-txt">사용자 별명을 입력해주세요.</div>
                    <input 
                        value = {nickname}
                        onChange = {(e) => {setNickName(e.target.value)}}
                        type="text"
                        placeholder="사용자 별명"
                    />
                </div>

                <div className = "signup-items">
                    <div className = "signup-items-txt">휴대폰 번호를 입력해주세요.</div>
                    <input 
                        value = {phonenumber}
                        onChange = {(e) => {setPhone(e.target.value)}}
                        type="text"
                    />
                </div>

                <div className = "signup-items">
                    <div className = "signup-items-txt">대학교를 입력해주세요.</div>
                    {/* <div className = "signup-items-university"> */}
                        <input 
                            value = {university}
                            onChange = {(e) => {setUniversity(e.target.value)}}
                            type="text"
                        />
                        {/* <button onClick={ClickSchool}>확인</button> */}
                    {/* </div> */}
                </div>

                <div className = "signup-items">
                    <div className = "signup-items-txt">전공을 입력해주세요.</div>
                    <input 
                        value = {major}
                        onChange = {(e) => {setMajor(e.target.value)}}
                        type="text"
                    />
                </div>

                {/* <Link to = "/success"> */}
                    <button className = "signup-btn" onClick={()=>{ClickSingup()}}>
                        가입하기
                    </button>
                {/* </Link> */}
            </div>
        </SignupStyled>
    )
}