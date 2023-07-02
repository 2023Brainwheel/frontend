import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Eye from '../img/Eye.png';
import Up from '../img/up.png';
import Bottom from '../img/bottom.png';
import Right from '../img/right.png';
import Left from '../img/left.png';
import Dot from '../img/Dot2.png';
import Loading from '../components/Loading';
import Countdown from '../components/Countdown'
import '../css/Counter.css';

const Counter = React.memo(({ max, texts, setCurrentText, setRenderButton }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount < max ? prevCount + 1 : prevCount));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [max, count]);

  useEffect(() => {
    if (count === 2) {
      setCurrentText('위를 봐주세요');
    } else if (count === 6) {
      setCurrentText('이마를 올려주세요');
    } else if (count === 7) {
      setCurrentText('눈을 깜빡여주세요');
    } else if (count === 8) {
      setCurrentText('눈을 크게 떠 \n이마를 찡그려주세요');
      setRenderButton(true); // Show verification mode button
    } else {
      const textIndex = count - 1 > 5 ? (count - 1) % 5 : count - 1;
      setCurrentText(texts[textIndex]);
    }
  }, [count, texts, setCurrentText, setRenderButton]);

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
        {count === 6 ? <span className="counter-text">step{count - 4}</span> : count === 7 ? (
          <span className="counter-text step3-text">step{count - 4}</span>
        ) : count === 8 ? (
          <span className="counter-text step4-text">step{count - 4}</span>
        ) : null}
      </div>
    </div>
  );
});

const App = () => {
  const texts = [
    '화면을 5초간 바라보신후, 점의 방향대로 바라봐주세요',
    '위를 봐주세요',
    '아래를 봐주세요',
    '오른쪽을 봐주세요',
    '왼쪽을 봐주세요',
    '눈을 세번 깜빡여주세요',
  ];

  const [renderCounter, setRenderCounter] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [renderButton, setRenderButton] = useState(false); // Show verification mode button

  useEffect(() => {
    setTimeout(() => {
      setRenderCounter(true);
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <div className="loading-container">
          <div className="loading-text">
            <Loading />검증준비중....
          </div>
          <div className="loading-dot" />
        </div>
      ) : (
        renderCounter && (
          
          <div className="counter-container">
            <Counter max={8} texts={texts} setCurrentText={setCurrentText} setRenderButton={setRenderButton} />
            <div className="text-container">
              <div className="center-text">
                {currentText !== 'step2' && currentText !== 'step3' && (
                  <span className="counter-text-large">{currentText}</span>
                )}
              </div>
            </div>
            
          </div>
        )
      )}
      <div>
      <Countdown/>
        {!isLoading && renderButton && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '150px' }}>
            <Link to="/Mypage">
              <button type="submit" className="button">
                완료
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
