import React from 'react'
import '../css/DeviceContainer.css';

function DeviceContainer(){
    return (
      <div className="deviceContainer" > 
      <p style={{ textAlign: 'center', marginTop:'10%' }}>등록된 기기</p>
        <div className="box">
        <img className='MypagePic' src = 'https://cdn-icons-png.flaticon.com/512/3443/3443647.png'></img>
        </div>
      </div>
    );
  }

  export default DeviceContainer;

