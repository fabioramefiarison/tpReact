import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';

const Chatbot = () => {
  const [conversations, setConversations] = useState([]);
  const [currentConversation, setCurrentConversation] = useState(null);

  const addConversation = (conversation) => {
    setConversations([conversation, ...conversations]);
  };

  const selectConversation = (conversation) => {
    setCurrentConversation(conversation);
  };

  return (
    <div className="chatbot">
      <Sidebar conversations={conversations} onSelectConversation={selectConversation} />
      <ChatWindow conversation={currentConversation} onAddConversation={addConversation} />
    </div>
  );
};

export default Chatbot;
