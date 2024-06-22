import React from 'react';

interface ModalProps {
  isModalOpen: boolean;
  toggleModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ isModalOpen, toggleModal }) => (
  isModalOpen ? (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={toggleModal}>&times;</span>
        <h2>使い方</h2>
        <p>このアプリケーションは、大喜利のお題を生成するためのものです。まず、「お題を生成」ボタンを押して、お題を生成してください。その後、生成されたお題に対して回答を入力し、「回答する」ボタンを押して回答を表示します。なお、一度お題を生成したら、5秒間は再度生成することができません。</p>
        <h2>Developer</h2>
        <p>Yoshiaki Sata</p>
        <p>Junsei Tanaka</p>
        <h2>Github</h2>
        <a href="https://github.com/OgiriGenerator">Link</a>
      </div>
    </div>
  ) : null
);

export default Modal;
