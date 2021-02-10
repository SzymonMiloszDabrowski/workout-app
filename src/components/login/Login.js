import './login.scss';

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <h2>Logowanie</h2>
        <div className="form">
          <input id="username" type="text" placeholder="Nazwa" />
          <input id="password" type="text" placeholder="Hasło" />
          <p>
            Nie masz jeszcze konta? <a href="/registration">Zarejestruj się!</a>
          </p>
          <button type="submit">Zaloguj</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
