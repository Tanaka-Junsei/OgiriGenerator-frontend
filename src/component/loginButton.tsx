// src/component/LoginButton.tsx
import React from 'react';

interface LoginButtonProps {
  onClick: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="login-button">
      ログイン
    </button>
  );
};

export default LoginButton;
