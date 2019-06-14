import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;
// import React from 'react';
// import './App.css';
// import LoginPanel from './components/LoginPanel';
// import { Message, ChatHistory, ChatInterface } from './components/Chat';

// interface AppState {
//   userName: string;
//   loggedIn: boolean;
//   messages: Message[];
//   currentMessage: string;
// }

// class App extends React.Component<{}, AppState> {
//   /**
//    *
//    */
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       userName: '',
//       loggedIn: false,
//       messages: [],
//       currentMessage: '',
//     };
//   }

//   render() {
//     const loginPanelElement = <LoginPanel userName={this.state.userName} onLogin={this.handleLogin} onUserNameChange={this.handleUserNameChange} />;
//     const chatElement = (
//       <div>
//         <ChatHistory messages={this.state.messages} />
//         <ChatInterface
//           userName={this.state.userName}
//           message={this.state.currentMessage}
//           onMessageChange={this.handleMessageChange}
//           onSendMessage={this.handleSendMessage}
//         />
//       </div>
//     );
//     return (
//       <div className="parent">
//         {!this.state.loggedIn && loginPanelElement}
//         {this.state.loggedIn && chatElement}
//       </div>
//     );
//   }

//   private handleLogin = (userName: string) => {
//     // call login API with userName & password, check for result
//     console.log('login with ' + userName);
//     this.setState({ loggedIn: true });
//   }

//   private handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     this.setState({ userName: event.target.value });
//   }

//   private handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     this.setState({ currentMessage: event.target.value });
//   }

//   private handleSendMessage = (message: string) => {
//     this.setState((prevState)=>{
//       const newMessage: Message = {
//         message,
//         timestamp: new Date().getTime(),
//         user: prevState.userName,
//       };
//       return {
//         ...prevState,
//         messages: [...prevState.messages, newMessage]
//       };
//     });
//   }
// }

// export default App;
