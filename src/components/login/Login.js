import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import LoginForm from '../loginForm/LoginForm'
import './Login.scss'
import LoginText from '../loginText/LoginText'

const Login = () => {
  const textToPassLogin = "Bubilet Üye Girişi , Hoş geldiniz hesabınıza giriş yapabilirsiniz";
  return (
    <div className='login'>
    <Header textLogin={textToPassLogin}/>
    <LoginText/>
    <LoginForm/>
    <Footer/>
    </div>
  )
}

export default Login