import React, { useState } from 'react';

interface LoginModalProps {
  isModalOpen: boolean;
  toggleModal: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isModalOpen, toggleModal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // ログイン処理をここに追加
    console.log(`Username: ${username}, Password: ${password}`);
    toggleModal();
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="modal modal-login">
      <div className="modal-login-content">
        <h2>ログイン</h2>
        <input
          type="text"
          placeholder="ユーザー名"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="button-container">
          <button onClick={handleLogin}>ログイン</button>
          <button onClick={toggleModal}>キャンセル</button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
