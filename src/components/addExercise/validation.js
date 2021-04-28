const validation = (values, data) => {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = 'Podaj nazwę ćwiczenia';
  }

  data.forEach((exercise) => {
    if (
      exercise.name === values.name &&
      exercise.username === JSON.parse(localStorage.getItem('username'))
    ) {
      return (errors.name = 'Ćwiczenie już istnieje');
    }
  });

  if (!values.category) {
    errors.category = 'Wybierz kategorie';
  }

  if (!values.bodyPart) {
    errors.bodyPart = 'Wybierz partie mieśni';
  }

  return errors;
};

export default validation;
