import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ButtonContainer.css';
import '../css/Button.css';

function ButtonContainer({ text,text2 }) {
  return (
    <div
      className="buttonContainer"
    >
      <Link to="/Learning">
        <button
          className="button"
        
        >
          {text}
        </button>
      </Link>
      <Link to="/Using">
        <button
          className="button"
          
        >
          {text2}
        </button>
      </Link>
      
      
      
    
    </div>

    

  );
}

export default ButtonContainer;
