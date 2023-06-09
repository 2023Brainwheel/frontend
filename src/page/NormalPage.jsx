import React from 'react';
import Topbar from '../components/Topbar';
import Loading from '../components/Loading';

function NormalPage() {

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div>
      <Topbar handleRefresh={handleRefresh} text="일반쓰레기" />
    </div>
  );
}

export default NormalPage;
