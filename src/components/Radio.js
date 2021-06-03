import {Field} from "redux-form";
import React from "react";

const Radio = ({value, children}) => (
    <label className="radio">
        <Field name="type" component="input" type="radio" value={value}/>
        <span className="ml-1">{children}</span>
    </label>
)

export default Radio;