import './treningExercise.scss';
import useFetch from '../../hooks/useFetch';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const TreningExercsie = ({ name }) => {
  const URL = process.env.REACT_APP_EXERCISES_URL;
  const { data: exercises, isPending, error } = useFetch(URL);
  const [exercise, setExercise] = useState('');
  const [series, setSeries] = useState([{ weight: '', repeats: '' }]);
  const history = useHistory();

  const handleOnChange = (index, e) => {
    e.preventDefault();
    if (e.target.value < 0 || e.target.value > 1000) e.target.value = '';
    const temp = [...series];
    temp[index][e.target.name] = e.target.value;
    setSeries(temp);
  };

  const handleAddSeries = (e) => {
    e.preventDefault();
    setSeries([...series, { weight: '', repeats: '' }]);
  };

  const handleRemoveSeries = (e, index) => {
    e.preventDefault();
    const temp = [...series];
    temp.splice(index, 1);
    setSeries(temp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const temp = JSON.parse(localStorage.getItem('trening'));
    const username = JSON.parse(localStorage.getItem('username'));
    const date = new Date();
    const month = date.getMonth() + 1;
    const dateParse = date.getDate() + '.' + month + '.' + date.getFullYear();
    if (temp)
      localStorage.setItem(
        'trening',
        JSON.stringify({
          name: name,
          exercises: [...temp.exercises, { name: exercise, series: series }],
          username: username,
          date: dateParse,
        })
      );
    else
      localStorage.setItem(
        'trening',
        JSON.stringify({
          name: name,
          exercises: [{ name: exercise, series: series }],
          username: username,
          date: dateParse,
        })
      );
    document.getElementById('addTreningForm').reset();
    setSeries([{ weight: '', repeats: '' }]);
  };

  const handleEndOfTraining = async (e) => {
    await handleSubmit(e);
    const URL = process.env.REACT_APP_TRENINGS_URL;
    await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: localStorage.getItem('trening'),
    });
    await localStorage.removeItem('trening');
    await history.push('/');
  };

  return (
    <div className="TreningExercise">
      <div className="content">
        {error && <h2>Prace na serwerze</h2>}
        {isPending && <div className="loading"></div>}
        {exercises && (
          <div className="card">
            <h2>{name}</h2>

            <form id="addTreningForm" onSubmit={handleSubmit}>
              <select name="exercise" onChange={(e) => setExercise(e.target.value)} required>
                <option value="" defaultValue>
                  Wybierz ćwiczenie...
                </option>
                {exercises.map(
                  (exercise) =>
                    exercise.username === JSON.parse(localStorage.getItem('username')) && (
                      <option value={exercise.name} key={exercise.name}>
                        {exercise.name}
                      </option>
                    )
                )}
              </select>

              {series.map((item, index) => (
                <div className="series" key={index}>
                  <p>{index + 1}. Waga</p>
                  <input
                    required
                    name="weight"
                    value={item.weight}
                    onChange={(e) => handleOnChange(index, e)}
                    type="number"
                    placeholder="0 kg"
                  />
                  <p>Powt.</p>
                  <input
                    required
                    name="repeats"
                    value={item.repeats}
                    onChange={(e) => handleOnChange(index, e)}
                    type="number"
                    placeholder="0"
                  />
                </div>
              ))}

              <div>
                <button className="primaryBtn addSerie" onClick={handleAddSeries}>
                  +
                </button>
                <button className="primaryBtn addSerie" onClick={handleRemoveSeries}>
                  -
                </button>
              </div>

              <button className="primaryBtn navi" type="submit">
                Następne ćwiczenie
              </button>
              <button className="primaryBtn navi" onClick={handleEndOfTraining}>
                Zakończ trening
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default TreningExercsie;
