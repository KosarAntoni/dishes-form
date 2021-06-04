import Form from "./components/Form";
import React, {useState} from "react";
import axios from "axios";
import Modal from "./components/Modal";

const initialValues = {
    preparation_time: "00:00:00"
}

const renderObject = obj => {
    return (
        <ul>
            {Object.keys(obj).map((visit, index) => <li key={index}>{visit} : {obj[visit]}</li>)}
        </ul>
    )
}

const App = () => {
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = (data) => {
        setLoading(true)
        data && axios.post('https://frosty-wood-6558.getsandbox.com:443/dishes', data)
            .then(response => {
                setLoading(false)
                setSuccess(renderObject(response.data))
            })
            .catch(response => {
                setLoading(false)
                setError(response.message)
            })
    }

    return (
        <div className="container">
            <div className="column is-half is-offset-one-quarter">
                <h1 className="title">Dish Form</h1>
                <Form
                    onSubmit={handleSubmit}
                    initialValues={initialValues}
                    isLoading={loading}
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