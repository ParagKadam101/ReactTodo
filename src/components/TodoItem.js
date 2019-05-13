import React, { Component } from 'react';

class TodoItem extends Component {
    onCompleteStateChange = () => {
        this.props.onCompleteStateChange(this.props.todoItem.id);
    }

    getTitleStyle = () => {
        return {
            display: 'inline-block',
            textDecoration: this.props.todoItem.completed ? 'line-through' : 'none',
            padding: '10px'
        };
    }

    deleteTodo = () => {
        this.props.deleteTodo(this.props.todoItem.id);
    }

    render() {
        return (
            <div style={{background: '#f4f4f4', padding: '10px'}}>
                <input type="checkbox" onChange={this.onCompleteStateChange}></input>
                <h3 style={this.getTitleStyle()}>{this.props.todoItem.title}</h3>
                <button onClick={this.deleteTodo} style={this.deleteTodoStyle}>X</button>
            </div>
        );
    };

    deleteTodoStyle = {
        borderRadius: '40px',
        width:'40px',
        height: '37px',
        backgroundColor: '#ff0000',
        border: '1px solid',
        color: 'white',
        paddingLeft: '4px',
        paddingTop: '4px'
    }
}

export default TodoItem;