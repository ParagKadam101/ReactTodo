import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {

    render() {
        return this.props.todos.map(todoItem => (
            <TodoItem key={todoItem.id} todoItem={todoItem} onCompleteStateChange={this.props.onCompleteStateChange} deleteTodo={this.props.deleteTodo}/>
        ));
    }
}

export default Todos;