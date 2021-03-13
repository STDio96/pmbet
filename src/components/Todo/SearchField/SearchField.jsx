import React, { useState } from 'react';

const SearchField = ({ onChange }) => {
    const [value, setValue] = useState('');

    const changeValueHandler = (e) => {
        let value = e.target.value;

        setValue(value);
        onChange(value);
    };

    return <input type='text' className="form-control" placeholder='Search' value={value} onChange={changeValueHandler} />
}

export default SearchField;
