import React, { useState, useEffect } from 'react';

const CanPage = () => {
  const [dashboardHTML, setDashboardHTML] = useState('');

  useEffect(() => {
    // Node-RED 대시보드 데이터를 가져오는 비동기 함수
    const fetchDashboardHTML = async () => {
      try {
        const response = await fetch('http://3.82.0.146:1880/ui');
        const html = await response.text();
        setDashboardHTML(html);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardHTML();
  }, []);

  return (
    <div>
      {/* CanPage의 내용 */}
      {/* ... */}

      {dashboardHTML ? (
        <div dangerouslySetInnerHTML={{ __html: dashboardHTML }} />
      ) : (
        <p>Loading dashboard...</p>
      )}
    </div>
  );
};

export default CanPage;
