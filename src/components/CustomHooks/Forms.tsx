import React, { useState } from 'react';

export const useFormInput = () => {
    const [value, setValue]:any = useState('');
    const [validity, setValidity]:any = useState(true);
    const inputChangeHandler = (event:any) => {
        setValue(event.target.value);
        if(event.target.value.trim() === ''){
            setValidity(false);
        }
        else{
            setValidity(true);
        }
    };
    return { value: value, onChange: inputChangeHandler, validity };
}

