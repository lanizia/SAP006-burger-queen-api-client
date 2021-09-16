import {useState} from 'react';

const UsedForm = (callback, validate) => {
    const [values, setValues] = useState({
        nome:null,
        email: '',
        password:'',
        role:'',
        restaurant:'niqs burger'
    });
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

    return {handleChange, values, handleSubmit, errors}
}

export default UsedForm;