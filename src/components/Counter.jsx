import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Eye from '../img/Eye.png';
import Up from '../img/up.png';
import Bottom from '../img/bottom.png';
import Right from '../img/right.png';
import Left from '../img/left.png';
import Done from '../img/Done.png';
import Dot from '../img/Dot2.png';
import Countdown from '../components/Countdown';
import axios from 'axios';
import '../css/Counter.css';
import { getToken } from '../proto/Token.js';

const Counter = React.memo(({ max, texts, setCurrentText, setRenderButton }) => {
  const [count, setCount] = useState(1);
  const [showX2, setShowX2] = useState(false);
  const [showX3, setShowX3] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount < max ? prevCount + 1 : prevCount));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [max, count]);

  useEffect(() => {
    if (count === 22) {
      setCurrentText('눈을 깜빡여 주세요');
      setShowX3(false);
    } else if (count === 2) {  
      setShowX2(true);
    } else if (count === 3) {
      setShowX2(false); // Reset X2
      setShowX3(true);
    } else if (count === 5) {
      setShowX2(true);
    } else if (count === 6){
      setShowX2(false); // Reset X2
      setShowX3(true);
    } else if (count === 8) {
      setShowX2(true);
    } else if (count === 9) {
      setShowX2(false); // Reset X2
      setShowX3(true);
    } else if (count === 17) {
      setShowX2(true);
    } else if (count === 18){
      setShowX2(false); // Reset X2
      setShowX3(true);
    } else if (count === 20) {
      setShowX2(true);  
    } else if (count === 21) {
      setShowX2(false); // Reset X2
      setShowX3(true);
    } else if (count === 23) {  
      setCurrentText('눈을 깜빡여 주세요');
      setShowX2(true);
      setShowX3(false);
    } else if (count === 24) {
      setCurrentText('눈을 깜빡여 주세요');
      setShowX2(false); // Reset X2
      setShowX3(true);
    } else if (count === 25) {
      setCurrentText('이마를 올려주세요');
      setShowX2(false); // Reset X2
      setShowX3(false);
    } else if (count === 26){
      setCurrentText('이마를 올려주세요');
      setShowX2(true);
    } else if (count === 27) {
      setCurrentText('이마를 올려주세요');
      setShowX2(false); // Reset X2
      setShowX3(true); 
    } else if (count === 28) {  
      setCurrentText('화면을 30초간 바라보신후, 점의 방향대로 바라봐주세요');
      setShowX3(false);
    } else if (count === 29) {
      setCurrentText('화면을 30초간 바라보신후, 점의 방향대로 바라봐주세요');
      
    } else if (count === 30) {
      setCurrentText('화면을 30초간 바라보신후, 점의 방향대로 바라봐주세요');
      
    } else if (count === 31){
      setCurrentText('화면을 30초간 바라보신후, 점의 방향대로 바라봐주세요');
  
    } else if (count === 32) {
      setCurrentText('화면을 30초간 바라보신후, 점의 방향대로 바라봐주세요');
     
    } else if (count === 33) {
      setCurrentText('화면을 30초간 바라보신후, 점의 방향대로 바라봐주세요');
        
    } else if (count === 34) {
      setCurrentText('학습 완료');
         
    
    } else {
      const textIndex = count - 1 > 20 ? (count - 1) % 5 : count - 1;
      setCurrentText(texts[textIndex]);
      setShowX2(false); // Reset X2
      setShowX3(false); // Reset X3
    }
    
    
    //else {
    //   if(count === 10){
    //     axios.get("http://3.233.227.34:5000/api/user/h5?part=LR",{
    //       headers: {
    //         accept:"application/json",
    //         Authorization: `Bearer ${token}`,
    //       },
    //     });
        
    //   }
    //   else if(count === 28){
    //     axios.get("http://3.233.227.34:5000/api/user/h5?part=UDFC",{
    //       headers: {
    //         accept:"application/json",
    //         Authorization: `Bearer ${token}`,
    //       },
    //     });
    //   }
    //   const textIndex = count - 1 > 20 ? (count - 1) % 5 : count - 1;
    //   setCurrentText(texts[textIndex]);
    // }
  }, [count, texts, setCurrentText, setRenderButton]);

  const getImage = (count) => {
    switch (count) {
      case 1:
        return Right;
      case 2:
        return Right;
      case 3:
        return Right;
      case 4:
        return Left;
      case 5:
        return Left;
      case 6:
        return Left;
      case 7:
        return Eye;
      case 8:
        return Eye;
      case 9:
        return Eye;
      case 10:
        return Dot;
      case 11:
        return Dot;
      case 12:
        return Dot;
      case 13:
        return Dot;    
      case 14:
        return Dot;
      case 15:
        return Dot;
      case 16:
        return Up;
      case 17:
        return Up;
      case 18:
        return Up;
      case 19:
        return Bottom;
      case 20:
        return Bottom;
      case 21:
        return Bottom;
      case 22:
        return Eye;
      case 23:
        return Eye;
      case 24:
        return Eye;
      case 25:
        return Eye;
      case 26:
        return Eye;
      case 27:
        return Eye; // 이마
      case 28:
        return Dot;
      case 29:
        return Dot;
      case 30:
        return Dot;
      case 31:
        return Dot;
      case 32:
        return Dot;
      case 33:
        return Dot;    
      case 34:
        return Done;
      default:
        return null;
    }
  };


  useEffect(() => {
    if (count === max) {
      const timeout = setTimeout(() => {
        setRenderButton(true);
      }, /* Specify your timeout duration here */);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [count, max]);

  return (
    <div className="counter">
      <div className="image-container">
        {count >= 1 && count <= max && (
          <div>
            <img className="counter-image" src={getImage(count)} alt="Direction" />
            {showX2 && <div className="x-label">X2</div>}
            {showX3 && <div className="x-label">X3</div>}
          </div>
        )}
      </div>
    </div>
  );
  
});

const App = () => {
  const token = getToken();
  const texts = [
    '왼쪽을 봐주세요',
    '왼쪽을 봐주세요',
    '왼쪽을 봐주세요',
    '오른쪽을 봐주세요',
    '오른쪽을 봐주세요',
    '오른쪽을 봐주세요',
    '눈을 찡그려 주세요',
    '눈을 찡그려 주세요',
    '눈을 찡그려 주세요',
    '화면을 30초간 바라보신후, 점의 방향대로 바라봐주세요',
    '화면을 30초간 바라보신후, 점의 방향대로 바라봐주세요',
    '화면을 30초간 바라보신후, 점의 방향대로 바라봐주세요',
    '화면을 30초간 바라보신후, 점의 방향대로 바라봐주세요',
    '화면을 30초간 바라보신후, 점의 방향대로 바라봐주세요',
    '화면을 30초간 바라보신후, 점의 방향대로 바라봐주세요',
    '위를 봐주세요',
    '위를 봐주세요',
    '위를 봐주세요',
    '아래를 봐주세요',
    '아래를 봐주세요',
    '아래를 봐주세요',
    '눈을 깜빡여 주세요',
    '눈을 깜빡여 주세요',
    '눈을 깜빡여 주세요',
    '이마를 올려주세요',
    '이마를 올려주세요',
    '이마를 올려주세요',
    '화면을 30초간 바라보신후, 점의 방향대로 바라봐주세요',
    '화면을 30초간 바라보신후, 점의 방향대로 바라봐주세요',
    '화면을 30초간 바라보신후, 점의 방향대로 바라봐주세요',
    '화면을 30초간 바라보신후, 점의 방향대로 바라봐주세요',
    '화면을 30초간 바라보신후, 점의 방향대로 바라봐주세요',
    '화면을 30초간 바라보신후, 점의 방향대로 바라봐주세요',
    '훈련끝',
  ];

  const [renderCounter, setRenderCounter] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [renderButton, setRenderButton] = useState(false); // Show verification mode button

  useEffect(() => {
    setTimeout(() => {
      setRenderCounter(true);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="app">
      {renderCounter && (
        <div className="counter-container">
          <Counter max={texts.length} texts={texts} setCurrentText={setCurrentText} setRenderButton={setRenderButton} />
          <div className="text-container">
            <div className="center-text">
              {currentText !== 'step2' && currentText !== 'step3' && (
                <span className="counter-text-large">{currentText}</span>
              )}
            </div>
          </div>
        </div>
      )}
      <div>
        <Countdown />
        {!isLoading && renderButton && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '150px' }}>

            <Link to="/Ver">
            <button type="submit" className="button" onClick={()=>{
                axios.get(`http://3.233.227.34:5000/api/user/training`,{
                  headers: {
                    accept:"application/json",
                    Authorization: `Bearer ${token}`,
                  },
                })
              }}>
                검증모드
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
