import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import useFetch from './useFetch';

const useRegister = (URL, validate) => {
  const [values, setValues] = useState({
    username: '',
    password: '',
    password2: '',
  });
  const [errors, setErrors] = useState({});
  const { data } = useFetch(URL);
  const isFirstRun = useRef(true);
  const history = useHistory();

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
      const user = { username: values.username, password: values.password };
      fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      })
        .then((res) => {
          if (res.ok) return res.json();
        })
        .then((data) => {
          if (data) history.push('/login');
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useRegister;
