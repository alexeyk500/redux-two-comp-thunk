import axios from 'axios';
import {setTodo, setIsLoading} from './actions'
import {
  CHANGE_STATUS_TODO,
  SET_NEW_TODO_TITLE,
  ADD_TODO,
  DELETE_TODO,
  SET_TODO,
  SET_IS_LOADING,
} from './actions';

const initialState = {
  todos: [
    {id:1, title:'Купить Хлеба', completed:false},
    {id:2, title:'Купить Молока', completed:true},
    {id:3, title:'Купить Памперсы', completed:false},
  ],
  newTodoTitle: '',
  isLoading: false,
}

function TodoReducer (state=initialState, action) {
  switch (action.type) {
    case SET_NEW_TODO_TITLE : {
      return {...state, newTodoTitle: action.payload}
    }
    case ADD_TODO: {
      return (
        {
          ...state, todos: [...state.todos, action.payload]
        }
      )
    }
    case CHANGE_STATUS_TODO: {
      return {
        ...state,
        todos: state.todos.map(todo=>{
          if (todo.id === action.payload) {
            todo.completed = !todo.completed
          }
          return todo
        })
      }
    }
    case DELETE_TODO : {
      return {
        ...state,
        todos: state.todos.filter(todo=> todo.id !== action.payload)
      }
    }
    case SET_TODO : {
      return {...state, todos: action.payload}
    }
    case SET_IS_LOADING : {
      return {...state, isLoading: action.payload}
    }

    default: return state
  }
}

export const getTodoThunk = () => {
  return (dispatch) =>{
    dispatch(setIsLoading(true))
    dispatch(setTodo([]))
    setTimeout(()=>{
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => {
        dispatch(setTodo(response.data))
        dispatch(setIsLoading(false))
        }
      // fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      // .then(response => response.json())
      // .then(json => {
      //   dispatch(setTodo(json))
      //   dispatch(setIsLoading(false))
      // })
    )},500)
  }
}

export default TodoReducer;
