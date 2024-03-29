import { Routes, Route } from 'react-router-dom';
import MainPage from './page/MainPage';
import MyPage from './page/MyPage';
import VerPage from './page/VerPage';
import LearningPage from './page/LearningPage';
import UsingPage from './page/UsingPage';
import NormalPage from './page/NormalPage';
import LoginPage from './page/LoginPage';
import SignupPage from './page/SignupPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/Learning" element={<LearningPage/>}/>
        <Route path="/Using" element={<UsingPage/>}/>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/Signup" element={<SignupPage/>}/>
        <Route path="/Ver" element={<VerPage/>}/>
        <Route path="/Normal" element={<NormalPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
