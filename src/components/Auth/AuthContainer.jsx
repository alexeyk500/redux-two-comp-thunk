import React from 'react';
import Auth from './Auth';

import {connect} from 'react-redux';
import {setEmail, setPassword} from './../../store/Auth/actions'

function AuthContainer (props){
  return (
    <Auth
      email={props.email}
      password={props.password}
      setEmail={props.setEmail}
      setPassword={props.setPassword}
    />
  )
}

const mapStateToProps = (state) => {
  return(
    {
      email: state.auth.email,
      password: state.auth.password,
    }
  )
}

const mapDispatchToProps = {
  setEmail,
  setPassword,
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)


