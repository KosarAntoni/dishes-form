import React from "react";

const Input = ({input, label, type, meta: {touched, error, warning}, ...props}) => (
    <div>
        <label
            className="label"
        >
            {label}
        </label>

        <div>
            <input
                className={touched && error ? "input is-danger" : "input"}
                {...input}
                placeholder={label}
                type={type}
                {...props}/>
            {touched && ((error && <span className="help is-danger">{error}</span>)
                || (warning &&
                    <span>{warning}</span>))
            }
        </div>
    </div>
)

export default Input;
