import { Component } from "react";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      text: "",
    };
  }

  addTodoItem = () => {
    const todos = [...this.state.todos, this.state.text];
    this.setState({ todos: todos });
  };

  removeTodoItem = (todo) => {
    const todos = this.state.todos.filter((item) => item !== todo);
    this.setState({ todos: todos });
  };

  handleTextChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <>
        <input value={this.state.text} onChange={this.handleTextChange} />
        <button onClick={this.addTodoItem}>Add</button>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index} onClick={() => this.removeTodoItem(todo)}>
              {todo}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
