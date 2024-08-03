import React from 'react';

const Sidebar = ({ conversations, onSelectConversation }) => {
  return (
    <div className="sidebar">
      <h2>Conversations récentes</h2>
      <ul>
        {conversations.map((conversation, index) => (
          <li key={index} onClick={() => onSelectConversation(conversation)}>
            {conversation.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
