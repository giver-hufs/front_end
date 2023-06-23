import React, {useState, useEffect} from "react";
import { ChatStyled } from "../styles/RequestStyled";

import socketIOClient from "socket.io-client";
import axios from "axios";

const URL = "https://giver.fly.dev";
const socket = socketIOClient(URL);

export default function ChatComponent() {
    const [chatRooms, setChatRooms] = useState([]);
    const [currentRoom, setCurrentRoom] = useState(null);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");
  
    let sessionStorage = window.sessionStorage;
    const [userId, setUserId] = useState(sessionStorage.id);
    const [modalIsOpen, setModalIsOpen] = useState(false);
  
    //메인 채팅
    const [address, setAddress] = useState("");
    const [locationalCode, setLocationalCode] = useState("");
    const [mainMessage, setMainMessage] = useState([]);
    const [inputMainMessage, setInputMainMessage] = useState("");
    const UserURL = "https://falling-fire-8326.fly.dev/user/" + userId + "/info";
  
    useEffect(() => {
      // 사용자 정보(주소코드, 주소)
      axios
        .get(UserURL)
        .then((res) => {
          setLocationalCode(res.data.locationalCode);
          setAddress(res.data.address);
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
  
      socket.emit("mainchat join room", locationalCode);
      
      socket.on("mainchat joined", async (locationalCode) => {
        let mainMessage;
        await axios
          .get(`${URL}/chat/mainchat/${locationalCode}`)
          .then((res) => (mainMessage = res.data))
          .catch((err) => console.error(err));
        setMainMessage([...mainMessage] || []);
      });
    }, [UserURL, locationalCode]);
  
    const handleEnter  = (e) => {
      if (e.key === 'Enter') {
        handleSendMainMessage()
      }
  };
  
    // main chat
    useEffect(() => {
      socket.on("mainchat joined", async (locationalCode) => {
        let mainMessage;
        await axios
          .get(`${URL}/chat/mainchat/${locationalCode}`)
          .then((res) => (mainMessage = res.data))
          .catch((err) => console.error(err));
        setMainMessage([...mainMessage] || []);
      });
      
      // mainchat New message event
      socket.on("new main message", (mainMessage) => {
        setMainMessage((prevMainMessage) =>
          prevMainMessage ? [...prevMainMessage, mainMessage] : [mainMessage]
        );
      });
  
      // Fetch initial chatroom list
      socket.on("room list updated", (newRoom) => {
        setChatRooms((prevRooms) => [...prevRooms, newRoom]);
      });
  
      // Room created event
      socket.on("new room", (room) => {
        setCurrentRoom(room);
        setMessages(null);
      });
  
      // Room joined event
      socket.on("room joined", async (room) => {
        setCurrentRoom(room);
        let messages;
        await axios
          .get(`${URL}/chat/${room.locationalCode}/${room.roomId}/message`)
          .then((res) => (messages = res.data))
          .catch((err) => console.error(err));
        setMessages([...messages] || []);
      });
  
      // Room left event
      socket.on("room left", () => {
        setCurrentRoom(null);
        setMessages(null);
      });
  
      // New message event
      socket.on("new message", (message) => {
        setMessages((prevMessages) =>
          prevMessages ? [...prevMessages, message] : [message]
        );
      });
  
      return () => {
        // Clean up event listeners
        socket.off("mainchat joined");
        socket.off("new main message");
  
        socket.off("room list updated");
        socket.off("new room");
        socket.off("room joined");
        socket.off("room left");
        socket.off("new message");
      };
    }, []);
  
    const handleSendMainMessage = () => {
      if (inputMainMessage) {
        const mainMessageData = {
          locationalCode: locationalCode,
          senderName: sessionStorage.name,
          senderId: userId,
          message: inputMainMessage,
        };
        socket.emit("mainchat send message", mainMessageData);
        setInputMainMessage("");
      }
    };
    // roomid(locationalcode), userID
    const handleJoinRoom = (room) => {
      socket.emit("join room", room);
    };
  
    const handleLeaveRoom = () => {
      socket.emit("leave room", { roomId: currentRoom.roomId, userId });
    };
  
    const handleSendMessage = () => {
      if (inputMessage) {
        const messageData = {
          roomId: currentRoom.roomId,
          senderName: sessionStorage.name,
          senderId: userId,
          message: inputMessage,
        };
        socket.emit("send message", messageData);
        setInputMessage("");
      }
    };
  
    return (
      <ChatStyled>
        <div className="mainchat-wrapper">
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
        </div>
      </ChatStyled>
    );
  }