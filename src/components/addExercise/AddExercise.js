import './addExercise.scss';
import Navbar from '../userNavbar/UserNavbar';
import useForm from '../../hooks/useForm';
import validation from './validation';

const AddExercise = () => {
  const URL = process.env.REACT_APP_EXERCISES_URL;
  const { handleChange, values, handleSubmit, errors, isValidate } = useForm(URL, validation);
  return (
    <div className="exerciseContainer">
      <Navbar />
      <div className="content">
        <div className="card">
          <h2>Dodaj ćwiczenie</h2>
          <form id="addExerciseForm" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Nazwa"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p className="warning">{errors.name}</p>}
            <select id="category" name="category" value={values.category} onChange={handleChange}>
              <option value="" defaultValue>
                Wybierz kategorie...
              </option>
              <option value="trening z obciążeniem">trening z obciążeniem</option>
              <option disabled>___</option>
              <option value="trening z masą ciała" disabled>
                trening z masą ciała
              </option>
              <option value="cardio na czas" disabled>
                cardio na czas
              </option>
              <option value="cardio na dystans" disabled>
                cardio na dystans
              </option>
            </select>
            {errors.category && <p className="warning">{errors.category}</p>}
            <select id="bodyPart" name="bodyPart" value={values.bodyPart} onChange={handleChange}>
              <option value="" defaultValue>
                Główna partia ciała...
              </option>
              <option value="klatka piersiowa">klatka piersiowa</option>
              <option value="barki">barki</option>
              <option value="biceps">biceps</option>
              <option value="triceps">triceps</option>
              <option value="przedramie">przedramie</option>
              <option value="plecy">plecy</option>
              <option value="pośladki">pośladki</option>
              <option value="brzuch">brzuch</option>
              <option value="uda przód">uda przód</option>
              <option value="uda tył">uda tył</option>
              <option value="łydki">łydki</option>
              <option value="fullbody">fullbody</option>
            </select>
            {errors.bodyPart && <p className="warning">{errors.bodyPart}</p>}
            {isValidate && <p className="success">Ćwiczenie zostało dodane</p>}
            <button type="submit" className="primaryBtn">
              Zapisz
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddExercise;
