const validateInfo = (values, data) => {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'Podaj nazwę użytkowanika';
  } else if (values.username.length < 4) {
    errors.username = 'Nazwa musi mieć conajmniej 4 znaki';
  }

  data.forEach((user) => {
    if (user.username === values.username) {
      return (errors.username = 'Nazwa jest zajęta');
    }
  });

  if (!values.password) {
    errors.password = 'Podaj hasło';
  } else if (values.password.length < 6) {
    errors.password = 'Hasło musi mieć więcej niż 6 znaków';
  }

  if (!values.password2) {
    errors.password2 = 'Potwierdź hasło';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Niepoprawne hasło';
  }

  return errors;
};

export default validateInfo;
