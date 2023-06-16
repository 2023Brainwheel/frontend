import React, { useEffect, useState } from 'react';
import Topbar from '../components/Topbar';
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

  return (
    <div>
      <Topbar text="검증모드" />
      {data && (
        <div>
          <h2>User List</h2>
          {data.map((user, index) => (
            <div key={index}>
              <h3>{user.name}</h3>
              <p>Face: {user.face}</p>
              <p>Inf Success: {user.inf_success}</p>
              <p>H5 Success: {user.h5_success}</p>
              <p>Active: {user.active}</p>
              <p>Accurate: {user.accurate}</p>
              <p>Create At: {user.create_at}</p>
              <p>ID: {user.id}</p>
              <p>CSV Success: {user.csv_success}</p>
              <p>Download Success: {user.download_success}</p>
              <p>Target Accurate: {user.target_accurate}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Vf;
