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
    if (count === 15) {
      setCurrentText('완료');
      setShowX2(false);
    } else if (count === 2) {  
      setShowX2(true);
    } else if (count === 4) {
      setShowX2(true);
    } else if (count === 6){
      setShowX2(true); // Reset X2
    } else if (count === 8) {
      setShowX2(true);
    } else if (count === 10) {
      setShowX2(true); // Reset X2
    } else if (count === 12) {
      setShowX2(true);
    } else if (count === 14){
      setShowX2(true); // Reset X2
      
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
        return Left;
      case 4:
        return Left;
      case 5:
        return Eye;
      case 6:
        return Eye;
      case 7:
        return Up;
      case 8:
        return Up;
      case 9:
        return Bottom;
      case 10:
        return Bottom;
      case 11:
        return Eye;
      case 12:
        return Eye;
      case 13:
        return Eye;    
      case 14:
        return Eye;
      case 15:
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
  let active_flag = -1;
  axios.get(`http://3.233.227.34:5000/api/user/active`,{
    headers: {
      accept:"application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((response)=>{
    console.log(response.data);
    active_flag = response.data;
  } )
    

  const texts = [
    '왼쪽을 봐주세요',
    '왼쪽을 봐주세요',
    '오른쪽을 봐주세요',
    '오른쪽을 봐주세요',
    '눈을 찡그려 주세요',
    '눈을 찡그려 주세요',
    '위를 봐주세요',
    '위를 봐주세요',
    '아래를 봐주세요',
    '아래를 봐주세요',
    '눈을 깜빡여 주세요',
    '눈을 깜빡여 주세요',
    '이마를 올려주세요',
    '이마를 올려주세요',
    '검증 완료',
  ];

  const [renderCounter, setRenderCounter] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [renderButton, setRenderButton] = useState(false); // Show verification mode button

  useEffect(() => {

    const token = getToken();
    let active_flag = 0;
    axios.get(`http://3.233.227.34:5000/api/user/active`,{
      headers: {
        accept:"application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response)=>{
      active_flag = response.data;
    } )

    setTimeout(() => {
      setRenderCounter(true);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="app">
      {renderCounter && (
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
      )}
      <div>
        <Countdown />
        {(!isLoading && renderButton && active_flag) ?
          (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '150px' }}>
            <Link to="/Using">
            <button type="submit" className="button" 
              
              >
                검증성공
              </button>
            </Link>
          </div> 
          ) : (active_flag === 0) ?
          (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '150px' }}>
            <Link to="/Mypage">
            <button type="submit" className="button" 
              
              >
                검증실패
              </button>
            </Link>
          </div> 
          )
          : (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '150px' }}>
          </div> 
          )
        }
      </div>
    </div>
  );
};

export default App;
