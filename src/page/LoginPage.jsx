import React, { useState } from 'react';
import LoginButton from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate} from 'react-router-dom';
import '../css/Login.css';
import axios from 'axios';
import {setToken,getToken} from '../proto/Token.js';


const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate('/Signup');
  };

  const checkUser = () => {
    axios
      .post('http://www.codinghhs.tech:5000/api/user/login', {
        username: id,
        password: password,
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
      })
      .then((response) => {
        console.log('로그인 성공!');
        alert('로그인을 환영합니다!');
        console.log(response.data["access_token"]);
        const newToken = response.data["access_token"];
        setToken(newToken);
        console.log('newToken:',newToken); // 업데이트된 토큰 값 출력
        localStorage.clear();
        localStorage.setItem('user_id', response.data.user_id);
        localStorage.setItem('id', response.data.id);
        setTimeout(() => {
          navigate('/MyPage'); // Navigate to Mypage component
        }, 1000);
      })
      .catch(function (error) {
        alert('아이디와 비밀번호를 다시 확인해주세요!');
        console.log('로그인 실패!');
        console.log(error);
      });
  };

  return (
    <div className="ml">
      <Form>
        <h1>LOGIN</h1>
        <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>ID</Form.Label>
          <Form.Control type="id" placeholder="ID" onChange={(e) => setId(e.target.value)} />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>

        <LoginButton variant="primary one" onClick={checkUser}>
          로그인
        </LoginButton>{' '}
        <LoginButton variant="primary two" onClick={navigateToSignup}>
          회원가입
        </LoginButton>{' '}
      </Form>
    </div>
  );
};

export default Login;
