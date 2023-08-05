import Heart from '../../assets/Heart';
import './Result.scss';

const Result = ({ questions, correctCount }) => {

  return (
    <div className="result">
      <Heart />
      <h2>Правильных ответов: {correctCount} из {questions.length}</h2>
      <a href='/'>
        <button>Попробовать снова</button>
      </a>
    </div>
  );
};

export default Result;