import './hero.scss';

const Hero = () => {
  return (
    <div className="hero">
      <div className="textBox">
        <h2>Sukces</h2>
        <h3>jest jak drabina</h3>
        <h4>nie wejdziesz na nią trzymając ręce w kieszeni</h4>
        <a href="/login">
          <img src="images/arrowButton.svg" alt="Sign up button" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
