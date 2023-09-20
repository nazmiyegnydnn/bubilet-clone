import React, { useState } from "react";
import './SignUpForm.scss'
import {
    Form,
    Input,
    Checkbox,
    Button,
    Select
  } from 'antd';


const SignUpForm = () => {
  const [size, setSize] = useState("large"); // default is 'middle'
  const { Option } = Select;
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="90">+90</Option>
        <Option value="44">+44</Option>
        <Option value="55">+55</Option>
      </Select>
    </Form.Item>
  );
  return (
    <div className="signUpForm">
    <Form.Item
    name="email"
    label="E-mail"
    rules={[
      {
        type: 'email',
        message: 'The input is not valid E-mail!',
      },
      {
        required: true,
        message: 'Please input your E-mail!',
      },
    ]}
  >
    <Input />
  </Form.Item>
  <hr className="formLine"></hr>
  <Form.Item
    name="password"
    label="Password"
    rules={[
      {
        required: true,
        message: 'Please input your password!',
      },
    ]}
    hasFeedback
  >
    <Input.Password />
  </Form.Item>
  <hr className="formLine"></hr>
  <Form.Item
  name={['user', 'name']}
  label="Name"
  rules={[
    {
      required: true,
    },
  ]}
>
  <Input />
</Form.Item>
<hr className="formLine"></hr>
<Form.Item
    name="phone"
    label="Phone Number"
    rules={[
      {
        required: true,
        message: 'Please input your phone number!',
      },
    ]}
  >
    <Input
      addonBefore={prefixSelector}
      style={{
        width: '100%',
      }}
    />
  </Form.Item>
  <hr className="formLine"></hr>
  <Checkbox>
      I have read the <a href="">agreement</a>
    </Checkbox>
    <br></br>
    <Button type="primary" htmlType="submit">
      Kayıt Ol
    </Button>
        
    </div>
  )
}

export default SignUpForm