import './registration.scss';
import Navbar from '../navbar/Navbar';
import useRegister from '../../hooks/useRegister';
import validate from './validateInfo';

const Registration = () => {
  const URL = process.env.REACT_APP_USERS_URL;
  const { handleChange, values, handleSubmit, errors } = useRegister(URL, validate);

  return (
    <div className="registration">
      <Navbar />
      <div className="content">
        <div className="card">
          <h2>Rejestracja</h2>
          <form id="registrationForm" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nazwa"
              name="username"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p className="warning">{errors.username}</p>}
            <input
              name="password"
              type="password"
              placeholder="Hasło"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="warning">{errors.password}</p>}
            <input
              name="password2"
              type="password"
              placeholder="Powtórz hasło"
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p className="warning">{errors.password2}</p>}
            <button type="submit" className="primaryBtn">
              Stwórz konto
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
