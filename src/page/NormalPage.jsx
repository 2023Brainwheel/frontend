import React from 'react';
import Topbar from '../components/Topbar';
import Error from '../img/error.avif';
import '../css/Using.css'; // PaperPage 컴포넌트의 CSS 파일

function PaperPage() {

  return (
    <div>
      <Topbar text="사용모드" />
      <div className="image-container">
        <img src={Error} alt="Brain" className="BrainImg" />
        <h2 className="BrainText">다시 학습하세요</h2>
      </div>
    </div>
  );
}

export default PaperPage;
