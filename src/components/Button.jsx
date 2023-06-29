import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Button.css';

const Button = ({ onClick, children }) => {
  const handleClick = () => {
    console.log('버튼이 클릭되었습니다!');
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className="button" onClick={handleClick}>
      <Link to="/Mypage">
      {'뒤로가기'}
      </Link>
    </button>
  );
};

export default Button;
