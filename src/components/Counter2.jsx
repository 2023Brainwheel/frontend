import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Eye from '../img/Eye.png';
import Up from '../img/up.png';
import Bottom from '../img/bottom.png';
import Right from '../img/right.png';
import Left from '../img/left.png';
import Done from '../img/Done.png';
import Dot from '../img/Dot2.png';
import Loading from '../components/Loading';
import Countdown from '../components/Countdown';
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
    if (count === 10) {
      setCurrentText('아래를 봐주세요');
  } else if (count === 11) {
      setCurrentText('얼굴 찡그리기');
  } else if (count === 12) {
      setCurrentText('얼굴 찡그리기x2');
  } else if (count === 13) {  
    setCurrentText('이마 올리기');
  } else if (count === 14) {
    setCurrentText('이마 올리기x2');
  } else if (count === 15) {
    setCurrentText('검증끝');
  } else {
      const textIndex = count - 1 > 11 ? (count - 1) % 5 : count - 1;
      setCurrentText(texts[textIndex]);
    }
  }, [count, texts, setCurrentText, setRenderButton]);

  const getImage = (count) => {
    switch (count) {
      case 1:
      case 2:
        return Right;
      case 3:
      case 4:
        return Left;
      case 5:
      case 6:
        return Dot;
      case 7:
      case 8:
        return Up;
      case 9:
      case 10:
        return Bottom;
      case 11:
      case 12:
        return Eye;
      case 13:
        case 14: 
        return Dot;
        case 15:
          case 16: 
          return Done; 
      default:
        return null;
    }
  };

  useEffect(() => {
    if (count === max) {
      const timeout = setTimeout(() => {
        setRenderButton(true);
      }, 2000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [count, max]);

  return (
    <div className="counter">
      <div className="image-container">
        {count >= 1 && count <= max && <img className="counter-image" src={getImage(count)} alt="Direction" />}
      </div>
    </div>
  );
});

const App = () => {
  
  const texts = [
    '왼쪽을 봐주세요',
    '왼쪽을 봐주세요X2',
    '오른쪽을 봐주세요',
    '오른쪽을 봐주세요X2',
    '크게 깜빡여 주세요',
    '크게 깜빡여 주세요',
    '위를 봐주세요',
    '위를 봐주세요X2',
    '아래를 봐주세요',
    '아래를 봐주세요X2',
    '이마를 올려주세요',
    '이마를 올려주세요X2',
    '깜빡',
    '깜빡',
    '검증끝',
  ];

  const [renderCounter, setRenderCounter] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [renderButton, setRenderButton] = useState(false); // Show verification mode button

  useEffect(() => {
    setTimeout(() => {
      setRenderCounter(true);
      setIsLoading(false);
    }, 100);
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
            <Counter max={15} texts={texts} setCurrentText={setCurrentText} setRenderButton={setRenderButton} />
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
        <Countdown />
        {!isLoading && renderButton && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '150px' }}>
            <Link to="/Using">
              <button type="submit" className="button">
                사용모드
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
