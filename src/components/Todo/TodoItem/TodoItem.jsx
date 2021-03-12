import React from 'react';
import withTodoItem from '../enhancers/withTodoItem';

const TodoItem = ({ todoData, onClick }) => {
    // console.log(todoData.title)
    return <button type="button" className={`list-group-item list-group-item-action py-1 ${todoData.completed ? 'active' : ''}`} onClick={onClick}>
        {todoData.title}
    </button>
}

export default withTodoItem(TodoItem);
