import './App.css';
import { useState } from 'react';
import Header from './component/header';
import Content from './component/content';
import Modal from './component/modal';
import LoginButton from './component/loginButton';
import LoginModal from './component/loginModal';

interface State {
  answer: string;
  topic: string;
  buttonText: string;
  displayedAnswer: string;
  isTopicGenerated: boolean;
  answerButtonText: string;
  isModalOpen: boolean;
  isGenerateButtonDisabled: boolean;
  isLoginModalOpen: boolean;
}

const App: React.FC = () => {
  const [state, setState] = useState<State>({
    answer: '',
    topic: '',
    buttonText: 'お題を生成',
    displayedAnswer: '',
    isTopicGenerated: false,
    answerButtonText: '回答する',
    isModalOpen: false,
    isGenerateButtonDisabled: false,
    isLoginModalOpen: false,
  });

  const generateTopic = () => {
    const randomNumber = Math.floor(Math.random() * 1000);
    setState(prevState => ({
      ...prevState,
      topic: `面白いお題 #${randomNumber}`,
      buttonText: 'お題を再度生成する',
      isTopicGenerated: true,
      displayedAnswer: '',
      answer: '',
      answerButtonText: '回答する',
      isGenerateButtonDisabled: true,
    }));
    setTimeout(() => {
      setState(prevState => ({ ...prevState, isGenerateButtonDisabled: false }));
    }, 5000);
  };

  const getAnswer = () => {
    if (state.answer.trim() === '') {
      setState(prevState => ({ ...prevState, displayedAnswer: '回答を入力してください' }));
    } else {
      setState(prevState => ({
        ...prevState,
        displayedAnswer: `「${state.answer}」という回答ですね。面白いですね！`,
        answerButtonText: '再度回答する',
      }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(prevState => ({ ...prevState, answer: e.target.value }));
  };

  const toggleModal = () => {
    setState(prevState => ({ ...prevState, isModalOpen: !state.isModalOpen }));
  };

  const toggleLoginModal = () => {
    setState(prevState => ({ ...prevState, isLoginModalOpen: !state.isLoginModalOpen }));
  };

  return (
    <div className="container">
      <Header toggleModal={toggleModal} />
      <LoginButton onClick={toggleLoginModal} />
      <Content
        state={state}
        getAnswer={getAnswer}
        generateTopic={generateTopic}
        handleInputChange={handleInputChange}
      />
      <Modal isModalOpen={state.isModalOpen} toggleModal={toggleModal} />
      <LoginModal isModalOpen={state.isLoginModalOpen} toggleModal={toggleLoginModal} />
    </div>
  );
}

export default App;
