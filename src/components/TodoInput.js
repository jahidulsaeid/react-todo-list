import React, { Component } from 'react'

export class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              <i className="fas fa-book" />
            </div>
          </div>
          <input
            type="text"
            className="form-control text-capitalize"
            placeholder="add todo item"
            value={item}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-block btn-primary mt-3 text-uppercase"
        >
          Add item
        </button>
      </form>
    </div>
    )
  }
}

export default TodoInput
