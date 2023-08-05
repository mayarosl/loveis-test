import './ProgressBar.scss';

const ProgressBar = ({questions, step}) => {
  const percentage = Math.round( step / questions.length * 100)

  return (
    <div className="progress">
    <div style={{ width: `${percentage}%` }} className="progress-inner"></div>
  </div>
  );
};

export default ProgressBar;