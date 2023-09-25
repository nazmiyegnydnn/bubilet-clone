import React from "react";
import "./LoginText.scss";
import { useNavigate } from "react-router-dom";

const LoginText = () => {
  const navigate = useNavigate();

  const loginClick = () => {
    navigate("/signUp");
  };

  return (
    <div className="loginText">
      <p>Bubilet hesabınız yok mu?</p>
      <p className="exclamation">Buradan tıklayarak oluşturun!</p>
      <h3>Eğlenceyi kaçırma indirimli biletler seni bekliyor.</h3>
      <button onClick={loginClick}>Hemen Üye Ol</button>
    </div>
  );
};

export default LoginText;
