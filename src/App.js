import React, { useState } from 'react';
import Result from './components/Result/Result';
import DATA from './DATA';
import './index.scss';
import TestCard from './components/TestCard/TestCard';

const App = () => {
  const questions = DATA
  const [step, setStep] = useState(0)
const [correctCount, setCorrectCount] = useState(0)
const currentQuestion = questions[step]

const onClickOption = (i) => {
  setStep(step + 1);
  if (i === currentQuestion.correct) {
    setCorrectCount(correctCount + 1)
  }
}
  return (
    <div className="App">
      {
        step !== questions.length
          ?
          <TestCard
            questions={questions}
            question={currentQuestion}
            onClickOption={onClickOption}
            step={step}
          />
          :
          <Result
            questions={questions}
            correctCount={correctCount}
            />
      }
    </div>
  );
};

export default App;