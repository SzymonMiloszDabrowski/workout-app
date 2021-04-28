import './progress.scss';
import useFetch from '../../hooks/useFetch';
import { useState } from 'react';
import Navbar from '../userNavbar/UserNavbar';

const Progress = () => {
  const exercisesURL = process.env.REACT_APP_EXERCISES_URL;
  const treningsURL = process.env.REACT_APP_TRENINGS_URL;
  const { data: trenings, isPending, error } = useFetch(treningsURL);
  const { data: exercises, isPending: exercisesIsPending, exercisesError } = useFetch(exercisesURL);
  const [exercise, setExercise] = useState('');
  let temp = 0;
  return (
    <div className="progress">
      <Navbar />
      <div className="content">
        <h2 className="pageTitle">Sprawdź swój progres</h2>
        {error && exercisesError && <h2>Prace na serwerze</h2>}
        {isPending && exercisesIsPending && <div className="loading"></div>}
        {trenings && exercises && (
          <div className="card">
            <div className="cardHeader">
              <h2>Wybierz ćwiczenie</h2>
              <select name="exercise" onChange={(e) => setExercise(e.target.value)}>
                <option value="" defaultValue>
                  Wybierz ćwiczenie...
                </option>
                {exercises.map(
                  (item) =>
                    item.username === JSON.parse(localStorage.getItem('username')) && (
                      <option value={item.name} key={item.name}>
                        {item.name}
                      </option>
                    )
                )}
              </select>
            </div>
            <div className="cardBody">
              <table>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Suma ciężaru</th>
                    <th>Suma powtórzeń</th>
                  </tr>
                </thead>
                <tbody>
                  {trenings
                    .slice(0)
                    .reverse()
                    .map((trening) =>
                      trening.exercises.map(
                        (element) =>
                          trening.username === JSON.parse(localStorage.getItem('username')) &&
                          element.name === exercise && (
                            <tr key={element.name}>
                              <td>{trening.date}</td>
                              <td>
                                {element.series.forEach((e, index) => {
                                  if (index === 0) temp = 0;
                                  temp += parseInt(e.weight);
                                })}
                                {temp}
                              </td>
                              <td>
                                {element.series.forEach((e, index) => {
                                  if (index === 0) temp = 0;
                                  temp += parseInt(e.repeats);
                                })}
                                {temp}
                              </td>
                            </tr>
                          )
                      )
                    )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Progress;
