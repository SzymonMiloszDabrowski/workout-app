import './addTrening.scss';
import { useState } from 'react';
import Navbar from '../userNavbar/UserNavbar';
import TreningExercise from '../treningExercise/TreningExercise';

const AddTrening = () => {
  const [name, setName] = useState('');
  const [isName, setIsName] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.match(/^[a-zA-Z0-9]/gm)) setIsValid((prev) => !prev);
    else setIsName(true);
  };

  return (
    <div className="addTrening">
      <Navbar />
      <div className="content">
        {!isName && (
          <div className="card">
            <h2>Nowy trening</h2>
            <form onSubmit={handleSubmit}>
              {!isValid && <p>Nazwa powinna się składać tylko z liter i cyfr.</p>}
              <input
                required
                type="text"
                placeholder="Nazwa"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button className="primaryBtn" type="submit">
                Utwórz
              </button>
            </form>
          </div>
        )}
        {isName && <TreningExercise name={name} />}
      </div>
    </div>
  );
};

export default AddTrening;
