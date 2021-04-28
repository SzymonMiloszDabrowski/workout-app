import { Link, useHistory } from 'react-router-dom';
import './login.scss';
import useFetch from '../../hooks/useFetch';
import { useState } from 'react';
import Navbar from '../navbar/Navbar';

const Login = () => {
  const URL = process.env.REACT_APP_USERS_URL;
  const { data: users, isPending, error } = useFetch(URL);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isValidate, setIsValidate] = useState(true);
  const history = useHistory();

  if (localStorage.getItem('auth-token')) history.push('/main');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, password };
    users.forEach((element) => {
      if (element.username === user.username) {
        fetch('http://localhost:3001/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user),
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else throw new Error('Backend error');
          })
          .then((data) => {
            if (data) {
              localStorage.setItem('username', JSON.stringify(data));
              history.push('/main');
            }
          })
          .catch((err) => {
            console.log('ERROR:', err.message);
          });
      }
    });
    setIsValidate(false);
  };
  return (
    <div className="login">
      <Navbar />
      <div className="content">
        {error && <h2>Prace na serwerze</h2>}
        {isPending && <div className="loading"></div>}
        {!error && !isPending && (
          <div className="card">
            <h2>Logowanie</h2>
            <form onSubmit={handleSubmit}>
              {!isValidate && <p className="warrning">Takie konto nie istenieje</p>}
              <input
                value={username}
                required
                type="text"
                placeholder="Nazwa"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                value={password}
                required
                type="password"
                placeholder="Hasło"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p>
                Nie masz jeszcze konta?
                <Link to="/registration">Zarejestruj się!</Link>
              </p>
              <button className="primaryBtn" type="submit">
                Zaloguj
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
