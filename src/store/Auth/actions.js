export const CHANGE_EMAIL = 'CHANGE_EMAIL'
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD'

export const setEmail = (email) => {
  return ({
    type: CHANGE_EMAIL,
    payload: email,
  })
}

export const setPassword = (password) => {
  return ({
    type: CHANGE_PASSWORD,
    payload: password,
  })
}
