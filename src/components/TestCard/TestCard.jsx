import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import './TestCard.scss';

const TestCard = ({
  questions,
  question,
  onClickOption,
  step
}) => {
  return (
    <div className='test-card'>
      <h1>{question.title}</h1>
      <ul>
        {
          question.options.map((option, index) => (
            <li
              key={option}
              onClick={() => onClickOption(index)}
            >
              {option}
            </li>
          ))
        }
      </ul>
    <ProgressBar questions={questions} step={step}/>
    </div>
  );
};

export default TestCard;