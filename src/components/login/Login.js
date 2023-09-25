import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import LoginForm from '../loginForm/LoginForm'
import './Login.scss'
import LoginText from '../loginText/LoginText'

const Login = () => {
  return (
    <div className='login'>
    <Header
    
    />
    <LoginText/>
    <LoginForm/>
    <Footer/>
    </div>
  )
}

export default Login