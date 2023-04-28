import { Input } from 'antd'
import React, { useContext } from 'react'
import useInput from '../../hooks/use-input'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import AuthContext from '../../store/Contexts/auth-context'

function Login() {
  const navigate = useNavigate()
  const authCtx = useContext(AuthContext)

  const { value: username, onChangeValue: changeUsername } = useInput()
  const { value: pwd, onChangeValue: changePwd } = useInput()
  
  const onHandleSubmit = (event) => {
    authCtx.onLogIn()
    navigate('/dashboard')
  } 

  return (
    <>
      <h4> Login </h4>
      <Input value={ username } onChange={ changeUsername } placeholder='Enter Username' />
      <Input value={ pwd } onChange={ changePwd } placeholder='Enter Password' type='password' />
      <Button size='large' variant='success' onClick={ onHandleSubmit }>Submit</Button>
    </>
  )
}

export default Login