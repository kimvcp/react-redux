import React from 'react';
import LoginPanel from '../components/LoginPanel';
import { connect } from 'react-redux';
import { AppState } from '../store/configureStore';
import { loggedIn } from '../store/system/actions';
import { withRouter, RouteComponentProps } from 'react-router';

interface DispatchToProps {
  loggedIn: (userName: string) => void;
}

type LoginPageProps = DispatchToProps & RouteComponentProps;

const LoginPage: React.FC<LoginPageProps> = props => {
  const [userName, setUserName] = React.useState('');

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleLogin = (username: string) => {
    //call login api
    props.loggedIn(userName);
    props.history.push('/chat');
  };

  return (
    <div>
      <LoginPanel
        userName={userName}
        onUserNameChange={handleUserNameChange}
        onLogin={handleLogin}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch: Function): DispatchToProps => {
  return {
    loggedIn: (userName: string) => dispatch(loggedIn(userName))
  };
};

// high order component
export default connect(
  undefined,
  mapDispatchToProps
)(withRouter(LoginPage));
