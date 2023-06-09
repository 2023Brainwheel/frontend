import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/ButtonContainer.css';
import '../css/Button.css';

function ButtonContainer({ text,text2,text3,text4 }) {
  return (
    <div
      className="buttonContainer"
    >
      <Link to="/Plastic">
        <button
          className="button"
        
        >
          {text}
        </button>
      </Link>
      <Link to="/Normal">
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
