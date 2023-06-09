import React from 'react';
import Topbar from '../components/Topbar';
import ButtonContainer from '../components/ButtonContainer';
import ButtonContainer2 from '../components/ButtonContainer2';
import '../css/DeviceContainer.css';
import Mainpic from '../img/Trash1.png';
import Can from '../img/Coke.png';
import Paper from '../img/Paper.png';
import Plastic from '../img/Plastic.png';

function MyPage() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div>
      <div>
        <Topbar handleRefresh={handleRefresh} text="My page" />
      </div>
      <div className="profile">
        {/* <h2>프로필</h2> */}
        {/* 프로필 내용을 추가하세요 */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <img src={Can} alt="사진" width="42%" height="150" style={{ marginTop: '10px',marginLeft:'25px'  }} />
          <img src={Paper} alt="사진" width="38%" height="130" style={{ marginTop: '10px',marginRight:'30px'  }} />
        </div>
      </div>
      <ButtonContainer handleRefresh={handleRefresh} text="캔" text2="종이" imageSrc={Mainpic} imageSrc2={Mainpic} imageSrc3={Mainpic} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <img src={Plastic} alt="사진" width="40%" height="130" style={{ marginTop: '100px' ,marginLeft:'25px'  }} />
          <img src={Mainpic} alt="사진" width="40%" height="130" style={{ marginTop: '100px',marginRight:'25px'  }} />
        </div>
      
      <ButtonContainer2 handleRefresh={handleRefresh} text="플라스틱" text2="일반쓰레기" imageSrc={Mainpic} imageSrc2={Mainpic} imageSrc3={Mainpic} />
    </div>
  );
}

export default MyPage;
