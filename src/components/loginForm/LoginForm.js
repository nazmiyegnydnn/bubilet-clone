import React from "react";
import "./LoginForm.scss";
import { useSelector,useDispatch } from "react-redux";
import { Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import {handleLoggedin} from '../../appSlice'



const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedin } = useSelector((state) => state.app);


  const onFinish = async (values) => {
    const userStorageData = JSON.parse(localStorage.getItem("userData"))
    if( userStorageData.email === values.email && userStorageData.password === values.password){
      await dispatch(handleLoggedin(true));
      await navigate('/')
    }else{
      dispatch(handleLoggedin(false));
    }
  };

  // Formun referansını oluşturun
  const [form] = Form.useForm();



  return (
    <div className="loginForm">
      <h3>Giriş Yap</h3>
      {isLoggedin === false ? '' : <p>E-postanızı ve şifrenizi girin  devam edin</p>}
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
        {/* "isLoggedin" durumuna göre mesajı görüntüle */}
        {isLoggedin ? (
          <div style={{ color: "green" }}>Giriş yapıldı!</div>
        ) : (
          <button type="submit" className="signUp">
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
