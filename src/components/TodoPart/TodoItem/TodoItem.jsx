import React from 'react';

function TodoItem (props) {

  const onChangeCheckbox = () =>{
    props.changeStatusTodo(props.todo.id)
  }

  const onClickDeletetodo =() =>{
    props.deleteTodo(props.todo.id)
  }

  let textStyle = {}
  if (props.todo.completed) {
    textStyle={textDecoration: 'line-through solid red'}
  }
  console.log(textStyle)
  return (
    <li style={textStyle} key={props.todo.id}>
      <span>
        <input
          type ='checkbox'
          onChange = {onChangeCheckbox}
          checked = {props.todo.completed}
        />
        &nbsp;
        {props.index}
        &nbsp;
        {props.todo.title}
        &nbsp;
      </span>
      <button onClick={onClickDeletetodo}>&times;</button>
    </li>
  )
}

export default TodoItem;
