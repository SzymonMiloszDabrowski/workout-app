import './menu.scss';
import { Link } from 'react-router-dom';

const Menu = (props) => {
  let visibility = 'hide';

  if (props.visible) {
    visibility = 'show';
  }

  return (
    <div id="flyoutMenu" className={visibility}>
      <button className="closeButton" onClick={props.toggle}>
        &times;
      </button>
      <div className="navi">
        <h2>Dodaj</h2>
        <h3>
          <Link to="/trening">Trening</Link>
        </h3>
        <h3>
          <Link to="/exercise">Ćwiczenie</Link>
        </h3>
        <h2>Zobacz</h2>
        <h3>
          <Link to="/progress">Progres</Link>
        </h3>
        <h3>
          <Link to="/main">Treningi</Link>
        </h3>
        <h3>
          <Link to="/exercises">Ćwiczenia</Link>
        </h3>
      </div>
    </div>
  );
};

export default Menu;
