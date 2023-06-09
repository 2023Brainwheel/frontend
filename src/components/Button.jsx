import React from 'react';
import '../css/Button.css';

const Button = ({ onClick, children }) => {
  const handleClick = () => {
    console.log('버튼이 클릭되었습니다!');
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className="Button" onClick={handleClick}>
      {'Add'}
    </button>
  );
};

export default Button;
