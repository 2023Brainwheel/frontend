import React, { useEffect } from 'react';
import Counter2 from '../components/Counter2';
import Countdown from '../components/Countdown';
import axios from 'axios';
import { getToken } from '../proto/Token.js';

function LearningPage() {
  useEffect(() => {
    const token = getToken();
    if (token) {
      axios.get(`http://www.codinghhs.tech:5000/api/user/learn`, {
        headers: {
          accept:"application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log('성공',response.data);
        })
        .catch((error) => {
          console.log('통신 에러:', error);
        });
    } else {
      console.log('토큰이 없습니다.');
    }
  }, []);

  return (
    <div>
    <div>
      <Counter2/>
    </div>
    <div className ="LB">
      
    </div>
    </div>
    
  );
}

export default LearningPage;

