import React from 'react';

const withTodoItem = (Component) => {
    class WithTodoItem extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                completed: this.props.todoData.completed
            }

            this.markAsCompleted = this.markAsCompleted.bind(this);
        }

        markAsCompleted() {
            // console.log('props:', this.props);
            let id = this.props.todoData.id;
            let completed = this.state.completed;

            fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PATCH',
                body: JSON.stringify({ completed: !completed })
            }).then((response) => {
                // console.log('response:', response);
                // в реальном примере тут стоило бы проверить ответ и все такое, но тут еще нюанс в том, что IDшка может быть такая, которой нет на сервере API, поэтому просто меняю статус после запроса
                // + сервер всегда возвращает оригинальный статус TODOшки
                this.props.todoData.completed = !completed;
                // state меняю, чтобы компонент перерендерился, чтобы не передавать выше ничего и обновить только конкретный элемент, а не перезаписувать стейт parent'а
                this.setState({
                    completed: !this.state.completed
                });
            }).catch(err => {
                console.error('something went wrong:', err);
            })
        }

        render() {
            let { markAsCompleted } = this;

            return <Component markAsCompleted={markAsCompleted} {...this.props} />
        }
    }

    return WithTodoItem;
}

export default withTodoItem;