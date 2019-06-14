import * as React from 'react';

interface ChatInterfaceProps {
  message: string;
  userName: string;
  onSendMessage: (message: string) => void;
  onMessageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClearMessage: () => void;
}

const ChatInterface: React.SFC<ChatInterfaceProps> = ({
  userName,
  message,
  onMessageChange,
  onSendMessage,
  onClearMessage
}) => {
  function keyPress(e: React.KeyboardEvent<any>) {
    if (e.key === 'Enter') {
      send();
    }
  }

  function send() {
    onSendMessage(message);
  }

  return (
    <div className='chat-interface'>
      <h3>User: {userName} </h3>
      <input
        value={message}
        onChange={onMessageChange}
        onKeyPress={keyPress}
        className='chat-input'
        placeholder='Type a message...'
      />
      <button onClick={send}>Send</button>
      <button onClick={onClearMessage}>Clear all Message</button>
    </div>
  );
};

export default ChatInterface;
