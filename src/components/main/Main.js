import './main.scss';
import Navbar from '../userNavbar/UserNavbar';
import useFetch from '../../hooks/useFetch';
import TreningsGallery from '../treningsGallery/TreningsGallery';
import { useHistory } from 'react-router-dom';

const Main = () => {
  const URL = process.env.REACT_APP_TRENINGS_URL;
  const { data: trenings, isPending, error } = useFetch(URL);
  const history = useHistory();

  if (!localStorage.getItem('username')) history.push('/');

  return (
    <div className="main">
      <Navbar />
      <div className="mainContent">
        <h2 className="pageTitle">Twoje treningi</h2>
        {error && <h2>Prace na serwerze</h2>}
        {isPending && <div className="loading"></div>}
        {trenings && (
          <div className="mainContent">
            <TreningsGallery trenings={trenings} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
