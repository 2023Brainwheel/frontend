import React, { useEffect, useState } from 'react';
import Topbar from '../components/Topbar';
import ButtonContainer from '../components/ButtonContainer';
import DeviceContainer from '../components/DeviceContainer';
import '../css/DeviceContainer.css';
import '../css/MyPage.css';
import Mainpic from '../img/Trash1.png';
import Api from '../proto/Api';

function Vf() {
  const [data, setData] = useState(null); // 데이터 상태 설정

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Api.get("/api/users"); // 백엔드 API URL
        setData(response.data.user_list); // user_list 배열을 데이터 상태로 설정
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
}

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
      </div>
      <ButtonContainer handleRefresh={handleRefresh} text="학습모드" text2="사용모드" imageSrc={Mainpic} imageSrc2={Mainpic} imageSrc3={Mainpic} />
      <DeviceContainer/>
      </div>
  );
}

export default MyPage;
