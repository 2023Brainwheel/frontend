import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/ButtonContainer.css';
import '../css/Button.css';

function ButtonContainer({ text,text2 }) {
  return (
    <div
      className="buttonContainer"
    >
      <Link to="/can">
        <button
          className="button"
        
        >
          {text}
        </button>
      </Link>
      <Link to="/Paper">
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
