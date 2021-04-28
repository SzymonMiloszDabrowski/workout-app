import './treningsGallery.scss';

const TreningsGallery = ({ trenings }) => {
  let isContent = false;
  return (
    <div className="treningsGallery">
      <div className="content">
        {trenings
          .slice(0)
          .reverse()
          .map(
            (trening) =>
              trening.username === JSON.parse(localStorage.getItem('username')) && (
                <div className="treningCard card" key={trening._id}>
                  {(isContent = true)}
                  <div className="cardHeader">
                    <h3>{trening.name}</h3>
                    <h4>{trening.date}</h4>
                  </div>
                  <table className="exerciseContent">
                    <tbody>
                      {trening.exercises.map((exercise) => (
                        <tr key={exercise.name}>
                          <th>{exercise.name}</th>
                          <th>
                            <table>
                              <tbody>
                                {exercise.series.map((serie, index) => (
                                  <tr key={index}>
                                    <td>{index + 1}.</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </th>
                          <th>
                            <table>
                              <tbody>
                                {exercise.series.map((serie, index) => (
                                  <tr key={index}>
                                    <td>{serie.weight} KG</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </th>
                          <th>
                            <table>
                              <tbody>
                                {exercise.series.map((serie, index) => (
                                  <tr key={index}>
                                    <td>{serie.repeats}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </th>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )
          )}
        {!isContent && (
          <div className="treningCard">
            <h3>Brak treningow</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default TreningsGallery;
