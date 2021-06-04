import React from 'react';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import {connect} from "react-redux";
import Input from "./Input";
import Radio from "./Radio";

const required = value => (value || typeof value === 'number' ? undefined : 'Required')

let Form = ({handleSubmit, pristine, reset, submitting, typeValue, isLoading}) => {
    return (
        <form className="box" onSubmit={handleSubmit}>
            <div className="block">
                <Field
                    name="name"
                    type="text"
                    component={Input}
                    label="Dish name"
                    validate={required}
                />
                <Field
                    name="preparation_time"
                    type="time"
                    component={Input}
                    label="Preparation Time"
                    validate={required}
                    value="00:00:00"
                    step="1"
                />
            </div>

            <div className="block">
                <h2 className="label">Type</h2>
                <div className="control">
                    <Radio value="pizza">Pizza</Radio>
                    <Radio value="soup">Soup</Radio>
                    <Radio value="sandwich">Sandwich</Radio>
                </div>
            </div>

            {typeValue === "pizza" &&
            <div className="block">
                <Field
                    name="no_of_slices"
                    type="number"
                    component={Input}
                    label="# of slices"
                    parse={(value) => Number(value)}
                    validate={required}
                />
                <Field
                    name="diameter"
                    type="number"
                    component={Input}
                    label="Diameter"
                    step="0.1"
                    parse={(value) => Number(value)}
                    validate={required}
                />
            </div>
            }

            {typeValue === "soup" &&
            <div className="block">
                <Field
                    name="spiciness_scale"
                    type="number"
                    component={Input}
                    label="Spiciness scale"
                    min="1"
                    max="10"
                    parse={(value) => Number(value)}
                    validate={required}
                />
            </div>
            }

            {typeValue === "sandwich" &&
            <div className="block">
                <Field
                    name="slices_of_bread"
                    type="number"
                    component={Input}
                    label="Slices of bread"
                    parse={(value) => Number(value)}
                    validate={required}
                />
            </div>
            }

            <div className="field is-grouped">
                <p className="control">
                    <button
                        className={`button is-primary ${isLoading && "is-loading"}`}
                        type="submit"
                        disabled={pristine || submitting}
                    >
                        Submit
                    </button>
                </p>
                <p className="control">
                    <button
                        className="button"
                        type="button"
                        disabled={pristine || submitting}
                        onClick={reset}
                    >
                        Clear
                    </button>
                </p>
            </div>
        </form>

    );
};

const selector = formValueSelector('dish');
Form = connect(state => {
        const typeValue = selector(state, 'type');
        return {
            typeValue,
        };
    }
)(Form);

export default reduxForm(
    {
        form: 'dish',
    }
)(Form);
