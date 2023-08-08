import React from 'react';
import Topbar from '../components/Topbar';
import Brain from '../img/Brain4.png';
import '../css/Using.css'; // PaperPage 컴포넌트의 CSS 파일

function UsingPage() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div>
      <Topbar handleRefresh={handleRefresh} text="사용모드" />
      <div className="image-container">
        <img src={Brain} alt="Brain" className="BrainImg" />
        <h2 className="BrainText">사용중 입니다</h2>
      </div>
      
    </div>
    
  );
}

export default UsingPage;
