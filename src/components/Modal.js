import React from "react";

const Modal = ({message, handleClose, isError}) => (
    <div className={`modal ${message ? "is-active" : ""}`}>
        <div className="modal-background"/>
        <div className="modal-content column is-4">
            <article className={`message ${isError ? "is-danger" : "is-success"}`}>
                <div className="message-header">
                    <p>Success</p>
                    <button
                        onClick={() => handleClose()}
                        className="delete"
                        aria-label="delete"/>
                </div>
                <div className="message-body">
                    {message}
                </div>
            </article>
        </div>
    </div>
);

export default Modal;