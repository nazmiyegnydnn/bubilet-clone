import React, { useState } from "react";
import "./LoginForm.scss";
import { Form, Input, Select, message } from "antd";

const LoginForm = () => {
  const { Option } = Select;
  const prefixSelector = (
    <Form.Item name="prefix" noStyle initialValue="90">
      <Select
        style={{
          width: 100,
        }}
      >
        <Option value="90">+90</Option>
        <Option value="44">+44</Option>
        <Option value="55">+55</Option>
      </Select>
    </Form.Item>
  );

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

  return (
    <div className="loginForm">
      <h3>Giriş Yap</h3>
      {girisYapildi ? null : <p>Telefon numaranızı girin ve devam edin</p>}
      <Form form={form} name="login" onFinish={onFinish}>
        <Form.Item
          name="phone"
          label="Telefon Numarası"
          rules={[
            {
              required: true,
              message: "Lütfen telefon numaranızı giriniz!",
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
          />
        </Form.Item>

        {/* "girisYapildi" durumuna göre mesajı görüntüle */}
        {girisYapildi ? (
          <div style={{ color: "green" }}>Giriş yapıldı!</div>
        ) : (
          <button type="submit" className="signUp">
            Devam
          </button>
        )}
        <hr className="formLine" />
        <span>veya</span>
        <br />
        <button className="continue">E-Posta ile devam et</button>
      </Form>
    </div>
  );
};

export default LoginForm;
