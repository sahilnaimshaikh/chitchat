import React, { createContext, useContext, useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
import { useHistory, withRouter } from "react-router-dom";

// import { useNavigate } from "react-router-dom";

 
const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState([]);

  const history = useHistory();
  // const navigate = useNavigate()
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
    console.log(user)

    // if (!userInfo) 
    // {
    //   var add = '/'
    //   history.push(add);
    //   // // navigate("/chats");
    //   // window.location.replace("/");
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;