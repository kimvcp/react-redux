import React from 'react';
import LoginPage from './routes/LoginPage';
import { BrowserRouter, Route } from 'react-router-dom';
import ChatPage from './routes/ChatPage';
import './App.css';

const ReduxApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact={true} component={LoginPage} />
      <Route path='/chat/' component={ChatPage} />
    </BrowserRouter>
  );
};

export default ReduxApp;
