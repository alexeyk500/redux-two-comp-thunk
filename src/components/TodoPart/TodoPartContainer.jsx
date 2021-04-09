import React from 'react';
import TodoPart from './TodoPart';
import {connect} from 'react-redux';
import {
  changeStatusTodo,
  setNewTodoTitle,
  addTodo,
  deleteTodo,
  setTodo,
  setIsLoading,
} from './../../store/TodoPart/actions';
import {getTodoThunk} from './../../store/TodoPart/reducers'

function TodoPartContainer (props) {
  return (
    < TodoPart
      todos = {props.todos}
      newTodoTitle = {props.newTodoTitle}
      isLoading = {props.isLoading}
      changeStatusTodo = {props.changeStatusTodo}
      setNewTodoTitle = {props.setNewTodoTitle}
      addTodo = {props.addTodo}
      deleteTodo = {props.deleteTodo}
      getTodo = {props.getTodo}
      setTodo = {props.setTodo}
      setIsLoading = {props.setIsLoading}
      getTodoThunk = {props.getTodoThunk}
    />
  )
}

const mapStateToProps = (state) =>{
  return(
    {
      todos: state.todoPart.todos,
      newTodoTitle: state.todoPart.newTodoTitle,
      isLoading: state.todoPart.isLoading,
    }
  )
}

const mapDispatchToProps = {
  changeStatusTodo,
  setNewTodoTitle,
  addTodo,
  deleteTodo,
  setTodo,
  setIsLoading,
  getTodoThunk,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPartContainer);
