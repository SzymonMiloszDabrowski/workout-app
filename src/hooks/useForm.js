import { useState, useEffect, useRef } from 'react';
import useFetch from './useFetch';

const useForm = (URL, validate) => {
  const [values, setValues] = useState({
    name: '',
    category: '',
    bodyPart: '',
  });
  const [errors, setErrors] = useState({});
  const { data } = useFetch(URL);
  const isFirstRun = useRef(true);
  const [isValidate, setIsValidate] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values, data));
  };

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    if (Object.keys(errors).length === 0) {
      const username = JSON.parse(localStorage.getItem('username'));
      const exercise = {
        name: values.name,
        category: values.category,
        bodyPart: values.bodyPart,
        username: username,
      };
      fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(exercise),
      }).then(() => {
        setIsValidate(true);
        setValues({
          name: '',
          category: '',
          bodyPart: '',
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  return { handleChange, values, handleSubmit, errors, isValidate };
};

export default useForm;
