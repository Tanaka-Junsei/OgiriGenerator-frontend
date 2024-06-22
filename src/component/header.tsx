import React from 'react';

interface HeaderProps {
  toggleModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleModal }) => (
  <div className="header">
    <h1>大喜利お題ジェネレーター</h1>
    <button className="help-button" onClick={toggleModal}>?</button>
    <p className="description">
      「お題を生成」ボタンを押してください。<br />
      お題が生成されます。<br />
      生成されたお題を使って、大喜利をしてみましょう！
    </p>
  </div>
);

export default Header;
