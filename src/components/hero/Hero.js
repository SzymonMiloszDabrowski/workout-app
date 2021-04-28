import './hero.scss';
import Navbar from '../navbar/Navbar';
import { Link, useHistory } from 'react-router-dom';

const Hero = () => {
  const history = useHistory();
  if (localStorage.getItem('username')) history.push('/main');
  return (
    <div className="hero">
      <Navbar />
      <div className="heroContent">
        <div className="textBox">
          <h2>Sukces</h2>
          <h3>jest jak drabina</h3>
          <p>nie wejdziesz na nią trzymając ręce w kieszeni</p>
          <Link to="/login">
            <img src="images/arrowButton.svg" alt="Sign up button" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
