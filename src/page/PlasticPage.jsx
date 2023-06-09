import React from 'react';
import Topbar from '../components/Topbar';


function PlasticPage() {

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div>
      <Topbar handleRefresh={handleRefresh} text="플라스틱" />
    </div>
  );
}

export default PlasticPage;
