export const CHANGE_STATUS_TODO = 'CHANGE_STATUS_TODO';
export const SET_NEW_TODO_TITLE = 'SET_NEW_TODO_TITLE';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SET_TODO = 'SET_TODO';
export const SET_IS_LOADING = 'SET_IS_LOADING';

export const changeStatusTodo = (id) => {
  return (
    {
      type: CHANGE_STATUS_TODO,
      payload: id,
    }
  )
}

export const setNewTodoTitle = (title) => {
  return (
    {
      type: SET_NEW_TODO_TITLE,
      payload: title,
    }
  )
}

export const addTodo = (newTodo) => {
  return (
    {
      type: ADD_TODO,
      payload: newTodo,
    }
  )
}

export const deleteTodo = (todoId) => {
  return (
    {
      type: DELETE_TODO,
      payload: todoId,
    }
  )
}

export const setTodo = (todos) => {
  return (
    {
      type: SET_TODO,
      payload: todos,
    }
  )
}

export const setIsLoading = (status) => {
  return (
    {
      type: SET_IS_LOADING,
      payload: status
    }
  )
}
