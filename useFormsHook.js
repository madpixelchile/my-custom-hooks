import { useState } from 'react';

export const useFormsHook = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value //Así se ahorra un condicional y aplicamos el cambio al item deseado [clase 119]
        })
    }

    const onResetForm = ()=>{
        setFormState(initialForm);
    }

    // console.log(formState);

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }

}

