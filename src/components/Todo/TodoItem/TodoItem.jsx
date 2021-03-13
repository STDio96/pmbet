import React from 'react';
import withTodoItem from '../enhancers/withTodoItem';

const TodoItem = ({ todoData, markAsCompleted, lookingFor }) => {
    // console.log('looking for in component:', lookingFor)

    let formatedTitle = '';
    let title = todoData.title;

    formatedTitle = { __html: title.replaceAll(lookingFor, `<span style='background-color: red; color: black;'>${lookingFor}</span>`) };

    return <button
                type="button"
                className={`list-group-item list-group-item-action py-1 ${todoData.completed ? 'active' : ''}`}
                onClick={markAsCompleted}
                dangerouslySetInnerHTML={formatedTitle}></button>
}

export default withTodoItem(TodoItem);
