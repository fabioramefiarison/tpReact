import React, { useContext, useState, useEffect } from 'react';
import Message from './Message';
import './chat.css';
import { Context } from '../../API/ContextProvider';

const ChatWindow = ({ conversation, onAddConversation }) => {
  const { onSent, input, setInput, recentPrompt, showResult, loading, resultData } = useContext(Context);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (showResult) {
      const aiMessage = { sender: 'ai', text: `IA: ${resultData}` };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    }
  }, [showResult, resultData]);

  const handleSend = async () => {
    if (input.trim()) {
      const newMessage = { sender: 'user', text: `Vous: ${input}` };
      setMessages([...messages, newMessage]);

      await onSent();

      onAddConversation({ title: input, messages: [...messages, newMessage] });
    }
  };

  return (
    <div className="chat-window">
      <div className="messages">
        {conversation ? conversation.messages.map((msg, index) => (
          <Message key={index} message={msg} />
        )) : messages.map((msg, index) => (
          <Message key={index} message={msg} />
        ))}
      </div>
      <div className="input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="écrire un message..."
        />
        <button onClick={handleSend} disabled={loading}>Enoyer</button>
      </div>
    </div>
  );
};

export default ChatWindow;
