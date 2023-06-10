import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Eye from '../img/Eye.png';
import Up from '../img/up.png';
import Bottom from '../img/bottom.png';
import Right from '../img/right.png';
import Left from '../img/left.png';
import Dot from '../img/Dot2.png';
import '../css/Counter.css';

const Counter = React.memo(({ max, texts, setCurrentText }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount < max ? prevCount + 1 : 1));
    }, count === 1 ? 10000 : 5000);

    return () => {
      clearInterval(interval);
    };
  }, [max, count]);

  useEffect(() => {
    if (count >= 2 && count <= 5) {
      setCurrentText('');
    } else if (count === 6) {
      setCurrentText('눈을 세번 감았다 떴다 해주세요');
    } else if (count === 7) {
      setCurrentText('눈을 크게 떠 이마를 찡그려주세요');
    } else {
      const textIndex = count - 1 > 5 ? (count - 1) % 5 : count - 1;
      setCurrentText(texts[textIndex]);
    }
  }, [count, texts, setCurrentText]);

  const getImage = (count) => {
    switch (count) {
      case 1:
        return Dot;
      case 2:
        return Up;
      case 3:
        return Bottom;
      case 4:
        return Left;
      case 5:
        return Right;
      case 6:
        return Eye;
      default:
        return null;
    }
  };

  return (
    <div className="counter">
      <div className="image-container">
        {count >= 1 && count <= 5 && <img className="counter-image" src={getImage(count)} alt="Direction" />}
        {count === 6 ? <span className="counter-text">step2</span> : count === 7 ? <span className="counter-text">step3</span> : count < 1 || count > 5 ? <span className="counter-text">step{count}</span> : null}
      </div>
    </div>
  );
});

const App = () => {
  const texts = [
    '화면을 10초간 바라보신후, 점의 방향대로 바라봐주세요',
    '위를 봐주세요.',
    '아래를 봐주세요.',
    '왼쪽을 봐주세요',
    '오른쪽을 봐주세요',
    '눈을 세번 깜빡여주세요',
  ];

  const [renderCounter, setRenderCounter] = useState(false);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setRenderCounter(true);
    }, 500);
  }, []);

  return (
    <div className="app">
      {/* <Topbar text="학습모드" /> */}
      {renderCounter && (
        <div className="counter-container">
          <Counter max={7} texts={texts} setCurrentText={setCurrentText} />
          <div className="text-container">
            <div className="center-text">
              {currentText !== 'Step2' && currentText !== 'Step3' && (
                <span className="counter-text-large">{currentText}</span>
              )}
            </div>
          </div>
        </div>
      )}
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '180px' }}>
          <Link to="/Mypage">
            <button type="submit" className="button">
              검증모드
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;
