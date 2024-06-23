import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

// 環境変数の確認
console.log('VITE_FIREBASE_API_KEY_login:', import.meta.env.VITE_FIREBASE_API_KEY);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

console.log('Firebase Config:', firebaseConfig); // ここで環境変数を確認

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

interface LoginModalProps {
  isModalOpen: boolean;
  toggleModal: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isModalOpen, toggleModal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // ログイン成功
        console.log('ログイン成功:', userCredential.user);
        toggleModal();
      })
      .catch((error) => {
        // ログイン失敗
        console.error('ログイン失敗:', error);
        setError('ログインに失敗しました。もう一度お試しください。');
      });
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // サインイン成功
        console.log('サインイン成功:', userCredential.user);
        toggleModal();
      })
      .catch((error) => {
        // サインイン失敗
        console.error('サインイン失敗:', error);
        setError('サインインに失敗しました。もう一度お試しください。');
      });
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="modal modal-login">
      <div className="modal-login-content">
        <h2>ログイン</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="email"
          placeholder="メールアドレス"
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
          <button onClick={handleSignUp}>新規登録</button>
          <button onClick={toggleModal}>キャンセル</button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
