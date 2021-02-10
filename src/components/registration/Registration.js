import './registration.scss';

const Registration = () => {
  return (
    <div className="registration">
      <div className="card">
        <h2>Rejestracja konta</h2>
        <div className="form">
          <input id="username" type="text" placeholder="Nazwa" />
          <input id="password" type="text" placeholder="Hasło" />
          <input id="passwordRepeat" type="text" placeholder="Powtórz hasło" />
          <button type="submit">Stwórz konto</button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
