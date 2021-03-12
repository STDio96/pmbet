import React, { Component } from 'react';
import TodoItem from './TodoItem/TodoItem';

class Todos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            selectedUserId: 1,
            userTodos: [],
            lookingFor: ''
        };

        this.addUsers = this.addUsers.bind(this);
        this.addTodos = this.addTodos.bind(this);

        this.changeSelectedUserId = this.changeSelectedUserId.bind(this);
        this.createTodo = this.createTodo.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
    }

    addUsers(users) {
        this.setState({
            users: users,
            selectedUserId: users[0].id
        }, () => {
            this.loadUserTodos();
        })
    }

    loadUserTodos() {
        let id = this.state.selectedUserId;

        if (!id) {
            alert('Something went wrong. We can\'t find the user ID -_-');
            return;
        }

        fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
            .then((response) => response.json())
            .then((data) => this.addTodos(data))
            .catch((err) => {
                alert('something went wrong: ' + err);
                return;
            });
    }

    addTodos(todos) {
        this.setState({
            userTodos: todos
        })
    }

    changeSelectedUserId(e) {
        this.setState({
            selectedUserId: e.target.value
        }, () => {
            this.loadUserTodos();
        })
    }

    createTodo(e) {
        e.preventDefault();

        // т.к. input в форме первый (нулевой)
        let title = e.target[0].value;

        let request = {
            title: title,
            completed: false,
            userId: this.state.selectedUser,
        }

        fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify(request),
        }).catch((err) => {
            alert('something went wrong: ' + err);
            return;
        });

        this.setState({
            userTodos: [...this.state.userTodos, {
                id: Date.now(),
                title,
                completed: false,
                userId: this.state.selectedUser
            }]
        });

        e.target[0].value = '';
    }

    changeStatus(e) {
        e.preventDefault();

        console.log('changing todo\' status', e);
    }

    // system
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => this.addUsers(data))
    }

    componentDidUpdate(prevProps, prevState) {
        // TODO: not sure if I need it :)
    }

    render() {
        let { users, selectedUserId, userTodos } = this.state;
        let { createTodo, changeStatus } = this;

        console.log('users', users)
        return <div className='container w-50'>
            <select className="custom-select" onChange={this.changeSelectedUserId}>
                {users.map((user) => {
                    return <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                })}
            </select>
            <hr />
            Selected user: {selectedUserId} <hr />
            His todos:
            <div className="list-group">
                {userTodos.map((todo) => {
                    return <TodoItem key={todo.id} todoData={todo} onClick={changeStatus} />
                })}
            </div>

            <form onSubmit={createTodo}>
                <input type='text' placeholder='todo' />
                <button type='submit'>Send</button>
            </form>
        </div>
    }
}

export default Todos;