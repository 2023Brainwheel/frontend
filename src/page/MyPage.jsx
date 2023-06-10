import React from 'react';
import Topbar from '../components/Topbar';
import ButtonContainer from '../components/ButtonContainer';
import DeviceContainer from '../components/DeviceContainer';
import '../css/DeviceContainer.css';
import Mainpic from '../img/Trash1.png';
import Brain from '../img/brain.png';
import Eye from '../img/Eye.png';


function MyPage() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div>
      <div>
        <Topbar handleRefresh={handleRefresh} text="마이페이지" />
      </div>
      <div className="profile">
        {/* <h2>프로필</h2> */}
        {/* 프로필 내용을 추가하세요 */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <img src={Brain} alt="사진" width="35%" height="130" style={{ marginTop: '10px',marginLeft:'35px'  }} />
          <img src={Eye} alt="사진" width="35%" height="120" style={{ marginTop: '10px',marginRight:'36px'  }} />
        </div>
      </div>
      <ButtonContainer handleRefresh={handleRefresh} text="학습모드" text2="사용모드" imageSrc={Mainpic} imageSrc2={Mainpic} imageSrc3={Mainpic} />
      <DeviceContainer/>
      </div>
  );
}

export default MyPage;
