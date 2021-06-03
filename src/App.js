import Form from "./components/Form";
import React, {useState} from "react";
import axios from "axios";
import Modal from "./components/Modal";

const initialValues = {
    preparation_time: "00:00:00"
}

const App = () => {
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const handleSubmit = (data) => {
        if (data) axios.post('https://frosty-wood-6558.getsandbox.com:443/dishes', data)
            .then(response => setSuccess(response.message))
            .catch(response => setError(response.message))
    }

    return(
        <div className="container">
            <div className="column is-half is-offset-one-quarter">
                <h1 className="title">Dish Form</h1>
                <Form
                    onSubmit={handleSubmit}
                    initialValues={initialValues}
                />
            </div>

            <Modal
                message={success}
                handleClose={() => setSuccess('')}
            />

            <Modal
                message={error}
                handleClose={() => setError('')}
                isError
            />
        </div>
    )
}

export default App;