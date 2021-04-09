import React from 'react';
import TodoItem from './TodoItem/TodoItem';
import Loader from './../Loader/Loader';

function TodoList (props) {
  const onChangenewTodoTitle = (event) => {
    props.setNewTodoTitle(event.target.value)
  }

  const onClickAddTodo = (event) => {
    event.preventDefault();
    props.addTodo({id: Date.now(), title: props.newTodoTitle, completed: false});
    props.setNewTodoTitle('');
  }

  return(
    <div>
      <h3>My Todo List</h3>
      <form>
        <input
          type='text'
          value={props.newTodoTitle}
          onChange={onChangenewTodoTitle}
          placeholder='Title for Todo'
        />
        <button type='submit' onClick={onClickAddTodo} >Add Todo</button>
      </form>
      <hr />
      <ul>
      {props.isLoading && < Loader />}
      {props.todos.length?
        props.todos.map((todo, index)=>{
          return (
            <TodoItem
              key={todo.id}
              index={index+1}
              todo={todo}
              changeStatusTodo = {props.changeStatusTodo}
              deleteTodo = {props.deleteTodo}
            />
          )
        })
        : props.isLoading? null :<p>No Todos ...</p>
      }
      </ul>
      <hr />
      <div>
      <button onClick={props.getTodoThunk}>Load Todo</button>
      </div>

    </div>
  )
}

export default TodoList
