import React from 'react';

interface LoginPanelProps {
    userName: string;
    onLogin: (userName: string) => void;
    onUserNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginPanel: React.FC<LoginPanelProps> = (props) => {
    const onLogin = () => {
        props.onLogin(props.userName);
    };
    return (
        <div>
            <input type="text" value={props.userName} onChange={props.onUserNameChange} />
            <button onClick={onLogin}>Login</button>
        </div>
    );
};

LoginPanel.displayName = 'LoginPanel';

export default LoginPanel;