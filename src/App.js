import { Routes, Route } from 'react-router-dom';
import MainPage from './page/MainPage';
import MyPage from './page/MyPage';
import PlasticPage from './page/PlasticPage';
import CanPage from './page/CanPage';
import PaperPage from './page/PaperPage';
import NormalPage from './page/NormalPage';
import LoginPage from './page/LoginPage';
import SignupPage from './page/SignupPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/Plastic" element={<PlasticPage/>}/>
        <Route path="/Can" element={<CanPage/>}/>
        <Route path="/Paper" element={<PaperPage/>}/>
        <Route path="/Normal" element={<NormalPage/>}/>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/Signup" element={<SignupPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
