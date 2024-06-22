import React from 'react';

interface ContentProps {
  state: {
    answer: string;
    topic: string;
    buttonText: string;
    displayedAnswer: string;
    isTopicGenerated: boolean;
    answerButtonText: string;
    isGenerateButtonDisabled: boolean;
  };
  getAnswer: () => void;
  generateTopic: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Content: React.FC<ContentProps> = ({
  state,
  getAnswer,
  generateTopic,
  handleInputChange
}) => (
  <div className="content">
    {state.topic && (
      <div className="generated-topic">
        <h2>生成されたお題</h2>
        <p>{state.topic}</p>
      </div>
    )}
    <input
      type="text"
      className="answer-input"
      placeholder="回答を入力"
      value={state.answer}
      onChange={handleInputChange}
      disabled={!state.isTopicGenerated}
    />
    <div className="button-container">
      <button onClick={getAnswer} disabled={!state.isTopicGenerated} className={state.isTopicGenerated ? '' : 'disabled'}>
        {state.answerButtonText}
      </button>
      <button onClick={generateTopic} disabled={state.isGenerateButtonDisabled}>{state.buttonText}</button>
    </div>
    {state.displayedAnswer && (
      <div className="generated-answer">
        <h2>回答</h2>
        <p>{state.displayedAnswer}</p>
      </div>
    )}
  </div>
);

export default Content;
