import React, { Component } from 'react';
import SearchField from './SearchField/SearchField';
import CreteTodoForm from './CreteTodoForm/CreteTodoForm';
import TodoItem from './TodoItem/TodoItem';
import SelectUser from './SelectUser/SelectUser';

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
        this.searchText = this.searchText.bind(this);
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
            selectedUserId: e.target.value,
            userTodos: []
        }, () => {
            this.loadUserTodos();
        })
    }

    createTodo(title) {
        let request = {
            title: title,
            completed: false,
            userId: this.state.selectedUser,
        }

        fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify(request),
        }).then((data) => {
            this.setState({
                userTodos: [...this.state.userTodos, {
                    id: Date.now(),
                    title: title,
                    completed: false,
                    userId: this.state.selectedUser
                }]
            });
        }).catch((err) => {
            alert('something went wrong: ' + err);
            return;
        });
    }

    searchText(text) {
        console.log('searching for:', text);
        this.setState({
            lookingFor: text
        });
    }

    // system
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => this.addUsers(data))
    }

    render() {
        let { users, userTodos } = this.state;
        let { createTodo, changeSelectedUserId, searchText } = this;

        // console.log('users', users)
        return <div className='container w-75'>
            <div className='row'>
                <div className='col-3'>
                    <SelectUser users={users} changeSelectedUserId={changeSelectedUserId} />
                </div>
                <div className='col-6'>
                    <CreteTodoForm onSubmit={createTodo} />
                </div>
                <div className='col-3'>
                    <SearchField onChange={searchText} />
                </div>
            </div>
            <div className='row mt-2'>
                <div className='col-12'>
                    {userTodos.length === 0 && 'Loading...'}
                    {userTodos.length > 0 &&
                        <div className="list-group">
                            <h4>Todos</h4>
                            {userTodos.map((todo) => {
                                return <TodoItem key={todo.id} todoData={todo} lookingFor={this.state.lookingFor} />
                            })}
                        </div>
                    }
                </div>
            </div>
        </div>
    }
}

export default Todos;