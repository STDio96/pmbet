import React from 'react';

const SelectUser = ({ users, changeSelectedUserId }) => {
    if (users.length === 0) {
        return 'Loading...'
    } else {
        return <select className="custom-select" onChange={changeSelectedUserId}>
            {users.map((user) => {
                return <option key={user.id} value={user.id}>
                    {user.name}
                </option>
            })}
        </select>
    }
}

export default SelectUser;
