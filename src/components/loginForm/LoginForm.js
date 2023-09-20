import React from 'react'
import './LoginForm.scss'
import {
  Form,
  Input,
  Select
} from 'antd';


const LoginForm = () => {
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
    <div className='loginForm'>
     <h3>Giriş Yap</h3>
     <p>Telefon numaranızı girin ve devam edin</p>
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
  <button className='signUp'>Devam</button>
  <hr className="formLine"></hr>
  <span>veya</span><br></br>
  <button className='continue'>E-Posta ile devam et</button>
    </div>
  )
}

export default LoginForm