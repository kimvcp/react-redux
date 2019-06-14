import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store/configureStore';
import { ChatHistory, ChatInterface, Message } from '../components/Chat';
import { sendMessage, clearMessages } from '../store/chat/action';

interface StateToProps {
  userName: string;
  messages: Message[];
}

interface DispatchToProps {
    sendMessage: (message: Message) => void
    clearMessages: () => void
}

type ChatPageProps = StateToProps & DispatchToProps;

const ChatPage: React.FC<ChatPageProps> = props => {
  const [currentMessage, setCurrentMessage] = React.useState('');

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMessage(event.target.value);
  };

  const handleSendMessage = (message: string) => {
      props.sendMessage({
          message,
          timestamp: new Date().getTime(),
          user: props.userName,
      })
  }

  return (
    <div>
      <ChatHistory messages={props.messages} />
      <ChatInterface
        userName={props.userName}
        message={currentMessage}
        onMessageChange={handleMessageChange}
        onSendMessage={handleSendMessage}
        onClearMessage={props.clearMessages}
      />
    </div>
  );
};

const mapStateToProps = (state: AppState): StateToProps => {
  return {
    userName: state.system.userName,
    messages: state.chat.message,
  };
};

const mapDispatchToProps = (dispatch: Function): DispatchToProps =>{
    return {
        sendMessage: (message: Message) => dispatch(sendMessage(message)),
        clearMessages: () => dispatch(clearMessages())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
