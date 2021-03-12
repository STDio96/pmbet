import React from 'react';

const withTodoItem = (Component) => {
    class WithTodoItem extends React.Component {
        constructor(props) {
            super(props);

            this.markAsCompleted = this.markAsCompleted.bind(this);
        }

        markAsCompleted() {
            console.log('props:', this.props);
        }

        render() {
            let { markAsCompleted } = this;

            return <Component markAsCompleted={markAsCompleted} {...this.props} />
        }
    }

    return WithTodoItem;
}

export default withTodoItem;