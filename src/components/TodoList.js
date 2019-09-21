import React, { Component } from 'react'
import TodoItem from './TodoItem'

export class TodoList extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4">TodoList</h1>
        <TodoItem/>
      </div>
    )
  }
}

export default TodoList
