import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store/configureStore';
import { ChatHistory, ChatInterface, Message } from '../components/Chat';
import { sendMessage, clearMessage} from '../store/chat/action';

interface StateToProps {
  userName: string;
  messages: Message[];
}

interface DispatchToProps {
    sendMessage: (message: Message) => void,
    clearMessage: () => void
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

  const handleClearMessage = () => {
    props.clearMessage()
  }

  return (
    <div>
      <ChatHistory messages={props.messages} />
      <ChatInterface
        userName={props.userName}
        message={currentMessage}
        onMessageChange={handleMessageChange}
        onSendMessage={handleSendMessage}
        onClearMessage={handleClearMessage}
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

const mapDispatchToProps = (dispatch: Function): DispatchToProps => {
  return {
    sendMessage: (message: Message) => dispatch(sendMessage(message)),
    clearMessage: () => dispatch(clearMessage()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
