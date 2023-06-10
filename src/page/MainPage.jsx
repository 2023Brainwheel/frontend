import { Link } from 'react-router-dom';
import Mainpic from '../img/wheel.png';
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
              top: '40%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'black',
              fontSize: '2.1rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
              className="project-animation">Brain Wheel</div>
          </Link>
          <img
            src={Mainpic} width="45%" height="180" style={{ marginTop: '230px' }} className="project-animation" />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '120px' }}>
          <Link to='/Login'>
            <button type="submit" className="button">시작하기</button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default MainPage;
