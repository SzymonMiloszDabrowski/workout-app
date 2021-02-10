import './hero.scss';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero">
      <div className="textBox">
        <h2>Sukces</h2>
        <h3>jest jak drabina</h3>
        <h4>nie wejdziesz na nią trzymając ręce w kieszeni</h4>
        <Link to={'/login'}>
          <img src="images/arrowButton.svg" alt="Sign up button" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
