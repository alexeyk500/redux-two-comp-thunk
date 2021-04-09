import React from 'react';
import {Redirect} from 'react-router-dom';

function Auth (props) {
  const onChangeEmail = (event) => {
    props.setEmail(event.target.value)
  }

  const onChangePassword = (event) => {
    props.setPassword(event.target.value)
  }

  if (props.password === '123') {
    return <Redirect to='/todo' />
  }

  return(
    <div>
      <form>
        <div>
          <h3>Authorisation Form</h3>
          <input
            type='text'
            value={props.email}
            onChange={onChangeEmail}
            placeholder='email'
          />
        </div>
        <div>
          <input
            type='text'
            value={props.password}
            onChange={onChangePassword}
            placeholder='password'
          />
        </div>
        <button
          type='submit'
          onClick={(event)=>event.preventDefault()}>Authorisation</button>
      </form>
    </div>
  )
}

export default Auth;
