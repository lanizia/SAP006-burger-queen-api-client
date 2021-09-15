import {useState, useEffect} from 'react';

const UsedForm = (callback, validate) => {
    const [values, setValues] = useState({
        nome:null,
        email: '',
        password:'',
        role:'',
        restaurant:'niqs burger'
    });
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting ] = useState(false)
    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values, 
            [name]: value
        });
    };
    const handleSubmit = e => {
        e.preventDefault();
       
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    useEffect(() => {
       
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback(values)
        }
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [errors,isSubmitting]
    );

    return {handleChange, values, handleSubmit, errors}
}

export default UsedForm;