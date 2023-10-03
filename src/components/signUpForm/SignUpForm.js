import React, { useState } from "react";
import "./SignUpForm.scss";
import { useDispatch } from "react-redux";
import { Form, Input, Checkbox, Button, Select, message } from "antd";
import { useNavigate } from "react-router-dom";
import { handleLoginClick } from "../../appSlice";

const SignUpForm = (props) => {
  const navigate = useNavigate();
  const [size, setSize] = useState("large");
  const { Option } = Select;
  const dispatch = useDispatch();


  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
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

  const onFinish = (values) => {
    message.success("Kayıt işlemi başarıyla tamamlandı!");
  // Form verilerini local storage'a kaydet
  localStorage.setItem("userData", JSON.stringify(values));
  alert("Veriler başarıyla kaydedildi.");

    form.resetFields(); // "form" değişkeni formun referansını tutuyor
    // '/memberProfile' sayfasına yönlendirme yapın
    dispatch(handleLoginClick(values.user.name));
    navigate("/memberProfile");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Lütfen tüm alanları doldurun!");
  };

 

  // Formun referansını oluşturuyoruz
  const [form] = Form.useForm();

  console.log(localStorage.getItem("userData"))

  return (
    <div className="signUpForm">
      <Form
        form={form} 
        name="signup"
        size={size}
        initialValues={{email: "qweokpqw"}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
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
        <hr className="formLine" />

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
        <hr className="formLine" />

        <Form.Item
          name={["user", "name"]}
          label="Ad-Soyad"
          rules={[
            {
              required: true,
              message: "Lütfen adınızı ve soyadınızı giriniz!",
            },
          ]}

        >
          <Input />
        </Form.Item>
        <hr className="formLine" />

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
        <hr className="formLine" />

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              required: true,
              message: "Lütfen sözleşmeyi okuduğunuzu onaylayın!",
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject("Lütfen sözleşmeyi okuduğunuzu onaylayın!"),
            },
          ]}
        >
          <Checkbox>
            <a href="/">Sözleşmeyi</a> okudum.
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button  type="primary" htmlType="submit">
            Kayıt Ol
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUpForm;
