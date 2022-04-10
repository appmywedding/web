import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function Input({ placeholder, id, name, type, autoComplete, required, onChange, defaultValue, htmlFor, className }) {

    const [classNames, setClassNames] = useState("appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm")

    useEffect(() => {
        setClassNames((classNames) => `${classNames} ${className}`)
    }, [className])

    return (
        <div>
            <label htmlFor={htmlFor} className="sr-only">{placeholder}</label>
            <input onChange={onChange} defaultValue={defaultValue} id={id} name={name} type={type} autoComplete={autoComplete} required={required} className={classNames} placeholder={placeholder} />
        </div>)
};

Input.defaultProps = {
    placeholder: '',
    defaultValue: '',
    type: '',
    autoComplete: '',
    name: '',
    required: false,
    htmlFor: '',
    className: '',
};

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    autoComplete: PropTypes.string,
    required: PropTypes.bool,
    htmlFor: PropTypes.string,
    className: PropTypes.string,
};


