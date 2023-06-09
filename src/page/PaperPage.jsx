import React from 'react';
import Topbar from '../components/Topbar';

function PaperPage() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div>
      <Topbar handleRefresh={handleRefresh} text="종이" />
      </div>
  );
}
 
export default PaperPage;
