import React, { useEffect } from 'react';
import Counter from '../components/Counter';
import Countdown from '../components/Countdown';
import axios from 'axios';
import { getToken } from '../proto/Token.js';

function LearningPage() {
  useEffect(() => {
    const token = getToken();
    if (token) {
      axios.get(`http://www.3.233.227.34:5000/api/user/learn`, {
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
      <Counter/>
    <div>
      
    </div>
    <div className ="LB">
      
    </div>
    </div>
    
  );
}

export default LearningPage;
