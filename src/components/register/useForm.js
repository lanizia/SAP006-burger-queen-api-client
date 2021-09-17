<<<<<<< HEAD
import { useState, useEffect } from 'react';
=======
import {useState} from 'react';
>>>>>>> 519e7ff92430086679ea2d0990e24fa2904d5c0b

const UsedForm = (callback, validate) => {
  const [values, setValues] = useState({
    nome: null,
    email: '',
    password: '',
    role: '',
    restaurant: 'niqs burger',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
<<<<<<< HEAD
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback(values);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [errors, isSubmitting],
  );
=======
    const [errors, setErrors] = useState({})
    
    const handleChange = e => {
        const {name, value} = e.target
        setValues(currentValues => ({
            ...currentValues, 
            [name]: value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const newErrors = validate(values);
        setErrors(newErrors);

        if(Object.keys(newErrors).length === 0) {
            await callback(values)
        }
    };
>>>>>>> 519e7ff92430086679ea2d0990e24fa2904d5c0b

  return { handleChange, values, handleSubmit, errors };
};

export default UsedForm;
