import React, { useState } from "react";
import "./LoginForm.scss";
import { Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();


  const [girisYapildi, setGirisYapildi] = useState(false);

  const onFinish = (values) => {
    console.log("Received values:", values);

    // Form alanlarını kontrol et
    if (!values.phone) {
      message.error("Lütfen telefon numaranızı girin.");
      return;
    }

    setGirisYapildi(true);
  };

  // Formun referansını oluşturun
  const [form] = Form.useForm();

const loginClick = () =>{
  navigate("/citiesDetail");

} 

  return (
    <div className="loginForm">
      <h3>Giriş Yap</h3>
      {girisYapildi ? null : <p>E-postanızı ve şifrenizi girin  devam edin</p>}
      <Form form={form} name="login" onFinish={onFinish}>
      <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "Geçerli bir E-posta adresi giriniz!",
            },
            {
              required: true,
              message: "Lütfen E-posta adresinizi giriniz!",
            },
          ]}
        >
          <Input />
          </Form.Item>
          <Form.Item
          name="password"
          label="Şifre"
          rules={[
            {
              required: true,
              message: "Lütfen şifrenizi giriniz!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        {/* "girisYapildi" durumuna göre mesajı görüntüle */}
        {girisYapildi ? (
          <div style={{ color: "green" }}>Giriş yapıldı!</div>
        ) : (
          <button type="submit" className="signUp" onClick={loginClick}>
            Devam
          </button>
        )}
        <hr className="formLine" />
        <span>veya</span>
        <br />
        <button className="continue">Cep Telefonu ile devam et</button>
      </Form>
    </div>
  );
};

export default LoginForm;
