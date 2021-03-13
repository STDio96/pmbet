import React, { useState } from 'react';

const CreteTodoForm = ({ onSubmit }) => {
    const [value, setValue] = useState('')

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (!value.trim()) {
            alert('Title couldn\'t be empty -_-');
            return;
        }

        onSubmit(value);
        setValue('');
    }

    return <form onSubmit={onFormSubmit}>
        <div className="input-group">
            <input
                type="text"
                className="form-control"
                value={value}
                onChange={(e) => { setValue(e.target.value) }}
                placeholder="Type new todo here" />
            <div className="input-group-append">
                <button className="btn btn-primary" type="submit">Create</button>
            </div>
        </div>
    </form>
}

export default CreteTodoForm;
