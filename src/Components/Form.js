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
            <div className="d-flex justify-content-center">
                <div className="d-flex row" id="responsive-width">
                    <div className="col-sm-11 mb-3">
                        <input
                            className="form-control"
                            type="number"
                            value={inputValue}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-sm-1">
                        <button
                            className="btn btn-primary ml-n2"
                            onClick={() => submitForm()}
                        >
                            Submit
                            </button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Form;