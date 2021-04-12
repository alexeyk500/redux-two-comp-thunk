import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import RootReducer from './store/rootReducer';
import {Provider} from 'react-redux';
import AuthContainer from './components/Auth/AuthContainer';
import TodoPartContainer from './components/TodoPart/TodoPartContainer';
import thunk from 'redux-thunk';
import {HashRouter, Route} from 'react-router-dom';


const store = createStore(RootReducer, applyMiddleware(thunk))

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div>
          <Route exact path='/' component={AuthContainer} />
          <p></p>
          <Route path='/todo' component={TodoPartContainer} />
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
