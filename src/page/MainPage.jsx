import { Link } from 'react-router-dom';
import Mainpic from '../img/Trash1.png';
import '../css/MainPage.css';
import '../css/Button.css'

function MainPage() {
  return (
    <div className="MainPage">
      <div className="MainPage" style={{ backgroundColor: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px', position: 'relative' }}>
          <Link to='/'>
            <div style={{
              position: 'absolute',
              top: '30%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'black',
              fontSize: '2.5rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
              className="project-animation">Recyclustering</div>
          </Link>
          <img
            src={Mainpic} alt="사진" width="65%" height="280" style={{ marginTop: '300px' }} className="project-animation" />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '120px' }}>
          <Link to='/Login'>
            <button className="button">시작하기</button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default MainPage;
