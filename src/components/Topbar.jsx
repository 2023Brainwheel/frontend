import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Topbar.css';

function Topbar({ handleRefresh, text }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="topbar">
      <button className="menu-button" onClick={handleMenuToggle}>
        ≡
      </button>
      {isMenuOpen && (
        <div className="menu-modal">
          <div className="menu-content">
            <Link to="/" className="menu-link" onClick={handleMenuClick}>
              HOME
            </Link>
            <Link to="/Mypage" className="menu-link" onClick={handleMenuClick}>
              Mypage
            </Link>
          </div>
        </div>
      )}
      <div className =" link" onClick={handleRefresh}>
        {text}
      </div>
      <Link to="/Mypage" className="link">
        MY
      </Link>
    </div>
  );
}

export default Topbar;
