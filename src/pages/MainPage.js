import React, {useState, useEffect} from "react";

import MainHeader from "../components/MainHeader";
import Map from "../components/Map";
import { Link } from "react-router-dom";

import { MainPageStyled } from "../styles/MainStyled";
import { RequestStyled, ChatStyled } from "../styles/RequestStyled";

import { io } from "socket.io-client";
import axios from "axios";

// get . /chat/${university}/getrequests
const socket = io("https://giver.fly.dev");

export default function Mainpage(props) {
  const [universityCode, setUniversityCode] = useState(Number(localStorage.getItem("universityCode")));
  const [contentList, setContentList] = useState([]);
  const [roomId, setRoomId] = useState("");
  const [message, setMessage] = useState("");
  const [chatList, setChatList] = useState([]);
  const [currentRoom, setcurrentRoom] = useState({});
  const [chat, setChat] = useState(false)
  const [list, setList] = useState(true);

  useEffect(() => {
    axios.get(`https://giver.fly.dev/chat/${universityCode}/getrequests`)
      .then((res)=>{
        setContentList(res.data)
      })
      .catch((error) => {
        alert("An error occured", error.message);
      })
  }, [chatList, universityCode])  
  useEffect(() => {

    socket.emit("university join", universityCode);

    socket.on("university joined", (universityCode) => {
      console.log(`Joined university with code: ${universityCode}`);
    });

    socket.on("new request", (newContent) => {
      setContentList((prevContentList) => [...prevContentList, newContent]);
    });

    socket.on("request approved", (data) => {
      setContentList((prevContentList) =>
        prevContentList.filter((content) => content.roomId !== roomId)
      );
    });

    socket.on("sended message", (newChat) => {
      setChatList((prevChatList) =>
        prevChatList ? [...prevChatList, newChat] : [newChat]
      );
    });
  
    return () => {
      socket.off("university joined");
      socket.off("new request");
      socket.off("request approved");
      socket.off("sended message");
    };
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Get the current geolocation coordinates
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const data = {
            roomId: Date.now(),
            universityCode,
            content: e.target.contentTitle.value,
            contentName: e.target.contentName.value,
            hostName: localStorage.getItem("name"),
            phoneNumber: localStorage.getItem("phonenumber"),
            lat: latitude,
            lon: longitude,
          };

          // Emit the "request post" event with the updated data
          socket.emit("request post", data);

          // Reset the form
          e.target.reset();
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const handleRequestApproval = (roomId) => {
    setChat(true);
    socket.emit("request approve", { ...currentRoom, giverName: "giver" });
    setContentList((prevContentList) =>
      prevContentList.filter((content) => content.roomId !== roomId)
    );
  };

  const handleContentClick = (roomId) => {
    socket.emit("join room", { roomId });
    setcurrentRoom(contentList.filter((el) => el.roomId !== roomId));
    setRoomId(roomId);
  };
  const handleSendMessage = (e) => {
    e.preventDefault();

    const data = {
      roomId,
      message,
      senderId: localStorage.getItem("id"), // 실제 사용자 ID로 대체
      senderName: localStorage.getItem("name"), // 실제 사용자 이름으로 대체
      createdTime: new Date().toISOString(),
    };

    socket.emit("send message", data);
    setMessage("");
  };
  
  const handleEnter  = (e) => {
    if (e.key === 'Enter') {
      handleFormSubmit(e);      
    }
  };

  return (
    <MainPageStyled>
      <MainHeader />
      <div className = "map-wrapper" >
        <Map />
      <div>
    
    {!list ?
    <RequestStyled>
      <form onSubmit={handleFormSubmit} className = "request-contents">
        <input
          className = "rc-title"
          type="text"
          name="contentTitle"
          placeholder="제목을 입력하세요"
          required
        />
        <input
          className = "rc-txt"
          type="text"
          name="contentName"
          placeholder="도움 내용을 상세히 입력해주세요"
          required
        />
        <button className = "request-chat-btn" type="submit" onClick = {(e) => handleEnter(e)}>
          Submit
        </button>
      </form>
    </RequestStyled>
    :
    
    <div className = "HelpList">
      {contentList.map((content) => (
        <div className = "help-list-items" key={content.roomId}>
          <div className = "help-list-title">{content.content}</div>
          <div className = "help-list-writer">{content.hostName}</div>
          {(!content.approved && localStorage.getItem("name") === content.hostName) &&
          (
            <button onClick={() => handleRequestApproval(content.roomId)}>
              마감
            </button>
          )}
          <button onClick={() => handleContentClick(content.roomId)}>
            채팅하기
          </button>
        </div>
      ))}
    </div>
    }
      {roomId && (
        <ChatStyled>
          <div className = "chat-list">
            {chatList.map((chat) => (
              <div key={chat.createdTime}>
                 {chat.senderName === localStorage.getItem("name") ? 
                <div className = "mainchat-chat-mymessage">{chat.senderName}: {chat.message}</div>
                :
                <div className = "mainchat-chat-message">{chat.senderName}: {chat.message}</div>
                }
              </div>
            ))}
          </div>
          <form className="mainchat-input" onSubmit={handleSendMessage}>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message"
              required
            />
            <button className = "mainchat-sendbtn" type="submit">Send</button>
          </form>
        </ChatStyled>

      )}
        </div>
      </div>
    </MainPageStyled>
  );
}