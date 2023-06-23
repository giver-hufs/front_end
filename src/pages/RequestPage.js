import React, {useState} from "react";
import MainHeader from "../components/MainHeader";
import ChatComponent from "../components/ChatComponent";
import { RequestStyled } from "../styles/RequestStyled";

export default function RequestPage() {
    const [approve, setApprove] = useState(false);

    return (
        <RequestStyled>
            <MainHeader />
            { approve ?
            <div className = "request-wrapper">
                <div className = "request-contents">
                    <input 
                        className = "rc-title"
                        placeholder = "제목을 입력하세요"
                    />
                    <input 
                        className = "rc-txt" 
                        placeholder = "도움 내용을 상세히 입력해주세요"
                    />
                </div>
                <div clasName = "request-chat">
                    <button className = "request-chat-btn">요청 올리기</button>
                </div> 
            </div>
            :
            <ChatComponent />
            }
        </RequestStyled>
    );
}