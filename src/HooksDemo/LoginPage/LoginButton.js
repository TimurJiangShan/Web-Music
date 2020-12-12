import React from 'react';
import { LoginContext } from './index';

const LoginButton = () => {
    const dispatch = React.useContext(LoginContext);
    return (
        <div>
            <button onClick={() => {
                dispatch({ type: "success"  })
            }}>
                Click
            </button>
        </div>
    )
};

export default LoginButton;