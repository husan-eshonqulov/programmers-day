import React, { useState } from 'react';
import PropTypes from 'prop-types';

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
}

function Form(props) {
    const [inputValue, setInputValue] = useState(null);

    const handleChange = ({ target }) => {
        const { value } = target;
        setInputValue(value);
    }

    const submitForm = () => {
        props.handleSubmit(inputValue);
    }

    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <div className="d-flex">
                <input
                    className="form-control mr-2"
                    type="number"
                    value={inputValue}
                    onChange={handleChange}
                />
                <button
                    className="btn btn-primary ml-1"
                    onClick={() => submitForm()}
                >
                    Submit
                </button>
            </div>
        </form>
    );
}

export default Form;