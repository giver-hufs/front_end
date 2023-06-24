import React, {useState, useEffect} from "react";
import { ChatStyled } from "../styles/RequestStyled";

import { io } from "socket.io-client";
import axios from "axios";

const socket = io("https://giver.fly.dev");

export default function ChatComponent() {
  const [universityCode, setUniversityCode] = useState(129);
  const [contentList, setContentList] = useState([]);
  const [roomId, setRoomId] = useState("");
  const [message, setMessage] = useState("");
  const [chatList, setChatList] = useState([]);
  const [currentRoom, setcurrentRoom] = useState({});
  
  let sessionStorage = window.sessionStorage;

  useEffect(() => {
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

    const handleEnter  = (e) => {
      if (e.key === 'Enter') {
        // handleSendMainMessage()
      }
    };
  
    return () => {
      socket.off("university joined");
      socket.off("new request");
      socket.off("request approved");
      socket.off("sended message");
    };
  }, []);

  const handleUniversityJoin = () => {
    socket.emit("university join", universityCode);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      roomId: Date.now(),
      universityCode,
      content: "hello",
      contentName: e.target.contentName.value,
      hostName: e.target.hostName.value,
      phoneNumber: e.target.phoneNumber.value,
    };
    socket.emit("request post", data);
    e.target.reset();
  };

  const handleRequestApproval = (roomId) => {
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

    if (!roomId) {
      return; // roomId 값이 없으면 함수 종료
    }

    const data = {
      roomId,
      message,
      senderId: "user123", // 실제 사용자 ID로 대체
      senderName: "John Doe", // 실제 사용자 이름으로 대체
      createdTime: new Date().toISOString(),
    };

    socket.emit("send message", data);
    setMessage("");
  };
  
    return (
      <ChatStyled>
      <div>
      <h1>University Code: {universityCode}</h1>
      <button onClick={handleUniversityJoin}>Join University</button>

      <h2>Request Form</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="contentName"
          placeholder="Content Name"
          required
        />
        <input type="text" name="hostName" placeholder="Host Name" required />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          required
        />
        <button type="submit">Submit</button>
      </form>

      <h2>Content List</h2>
      <ul>
        {contentList.map((content) => (
          <li key={content.roomId}>
            <p>Content Name: {content.contentName}</p>
            <p>Host Name: {content.hostName}</p>
            <p>Phone Number: {content.phoneNumber}</p>
            {!content.approved && (
              <button onClick={() => handleRequestApproval(content.roomId)}>
                Approve Request
              </button>
            )}
            <button onClick={() => handleContentClick(content.roomId)}>
              Chat
            </button>
          </li>
        ))}
      </ul>

      {roomId && (
        <div>
          <h2>Chat Room: {roomId}</h2>
          <form onSubmit={handleSendMessage}>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message"
              required
            />
            <button type="submit">Send</button>
          </form>

          <ul>
            {chatList.map((chat) => (
              <li key={chat.createdTime}>
                <p>Sender: {chat.senderName}</p>
                <p>Message: {chat.message}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

        {/* <div className="mainchat-wrapper">
          {mainMessage !== null && (
            <div className="mainchat-chat-contents">
              {mainMessage.map((mainMessage, index) => (
                <>
                  {mainMessage.senderId === sessionStorage.id ? (
                    <div className="mainchat-chat-mymessage" key={index}>
                      {mainMessage.message}
                    </div>
                  ) : (
                    <div className="mainchat-chat" key={index}>
                      <div className="pc-chat-sender">
                        {mainMessage.senderName}
                      </div>
                      <div className="main-chat-message">
                        {mainMessage.message}
                      </div>
                    </div>
                  )}
                </>
              ))}
            </div>
          )}
          <div className="mainchat-input">
            <input
              type="text"
              value={inputMainMessage}
              onChange={(e) => setInputMainMessage(e.target.value)}
              onKeyDown={handleEnter}
            />
            <button className="mainchat-sendbtn" onClick={handleSendMainMessage}>
              <img src="images/sendIcon.png" alt="user" />
            </button>
          </div>
        </div> */}
      </ChatStyled>
    );
  }