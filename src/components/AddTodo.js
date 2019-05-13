import React, { Component } from "react";

class AddTodo extends Component {
  getTodoTitle = () => {
    const title = document.getElementById("todoTitle").value;
    this.props.addTodo(title);
    document.getElementById("todoTitle").value= "";
  };

  render() {
    return (
      <div>
        <input
          id="todoTitle"
          type="text"
          placeholder="Add new ToDo item"
          style={this.textStyle}
        />
        <button onClick={this.getTodoTitle} style={this.buttonStyle}>
          Add
        </button>
      </div>
    );
  }

  textStyle = {
    width: "78.6%",
    height: "30px",
  };

  buttonStyle = {
    width: "21%",
    height: "34px",
    backgroundColor: "#191919",
    pull: "right",
    color: "#fff"
  };
}

export default AddTodo;
