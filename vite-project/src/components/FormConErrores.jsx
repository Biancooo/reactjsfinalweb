import React, { useState, useEffect } from 'react';

const FormConErrores = ({ extraProp }) => {
    const [formValues, setFormValues] = useState({
        nombre: '',
        email: '',
        genero: '',
    });

    //mañana refactorizar 👇

    const [formErrors, setFormErrors] = useState({
        nombre: '',
        email: '',
        genero: '',
        misc: null,
    });

    const handleChange1 = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleChange2 = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    //funcion de validacion...
    const validateForm = () => {
        let isValid = true;
        const errors = {
            nombre: '',
            email: '',
            genero: '',
        };

        if (!formValues.nombre) {
            errors.nombre = 'El nombre es requerido';
            isValid = false;
        }

        if (!formValues.email) {
            errors.email = 'El email es requerido';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            errors.email = 'El formato del email es incorrecto';
            isValid = false;
        }

        if (!formValues.genero) {
            errors.genero = 'El género es requerido';
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const xyz = (e) => {
        if (validateForm()) {
            alert('Formulario enviado con éxito');
            // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servidor
        } else {
            e.preventDefault();
            alert('Hay errores!');
        }
    };

    const showHello = () => {
        alert('¡Hola!');
    };

    return (
        <form onSubmit={xyz}>
            <div>
                <label>
                    Nombre:
                    <input
                        type="text"
                        name="nombre"
                        value={formValues.nombre}
                        onChange={handleChange1}
                    />
                </label>
                {formErrors.nombre && <div>{formErrors.nombre}</div>}
            </div>

            <div>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange2}
                    />
                </label>
                {formErrors.email && <div>{formErrors.email}</div>}
            </div>

            <div>
                <label>
                    Género:
                    <select
                        name="genero"
                        value={formValues.genero}
                        onChange={handleChange1}
                    >
                        <option value="">Selecciona un género</option>
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                    </select>
                </label>
                {formErrors.genero && <div>{formErrors.genero}</div>}
            </div>

            <button type="submit">Enviar</button>
        </form>
    );
};

export default FormConErrores;
