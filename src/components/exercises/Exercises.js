import './exercises.scss';
import useFetch from '../../hooks/useFetch';
import Navbar from '../userNavbar/UserNavbar';

const Exercises = () => {
  const URL = process.env.REACT_APP_EXERCISES_URL;
  const { data: exercises, isPending, error } = useFetch(URL);
  let isContent = false;
  return (
    <div className="exercises">
      <Navbar />
      <div className="content">
        <h2 className="pageTitle">Twoje ćwiczenia</h2>
        {error && <h2>Prace na serwerze</h2>}
        {isPending && <div className="loading"></div>}
        {exercises && (
          <div className="content">
            {exercises.map(
              (exercise) =>
                exercise.username === JSON.parse(localStorage.getItem('username')) && (
                  <div className="exerciseCard card" key={exercise.name}>
                    {(isContent = true)}
                    <h3>{exercise.name}</h3>
                    <table>
                      <tbody>
                        <tr>
                          <th>Kategoria:</th>
                          <td>{exercise.category}</td>
                        </tr>
                        <tr>
                          <th>Część ciała:</th>
                          <td>{exercise.bodyPart}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )
            )}
            {!isContent && (
              <div className="exerciseCard">
                <h3>Brak ćwiczeń</h3>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Exercises;
