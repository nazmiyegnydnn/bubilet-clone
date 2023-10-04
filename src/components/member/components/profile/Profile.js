import React, { useState } from "react";
import "./Profile.scss";
import { Form, Input, Select, Radio, Checkbox , DatePicker, Space  } from "antd";
import dayjs from 'dayjs';

const { Option } = Select;

const Profile = ({ value = {}, onChange }) => {
  const [currency, setCurrency] = useState("rmb");
  const [number, setNumber] = useState(0);
  const dateFormat = 'YYYY/MM/DD';

  const triggerChange = (changedValue) => {
    onChange?.({
      number,
      currency,
      ...value,
      ...changedValue,
    });
  };

  const onCurrencyChange = (newCurrency) => {
    if (!("currency" in value)) {
      setCurrency(newCurrency);
    }
    triggerChange({
      currency: newCurrency,
    });
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 60,
        }}
      >
        <Option value="90">+90</Option>
        <Option value="44">+44</Option>
        <Option value="55">+55</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className="profile">
      <h3>Profilini Düzenle</h3>
      <p>Kişisel bilgilerinizin doğru olduğundan emin olun!</p>
      <div className="profileForm">
        <div className="formLeft">
          <p>Adınız Soyadınız*</p>
          <Form.Item
            style={{
              width: 250,
            }}
            name="user"
            rules={[
              {
                required: true,
                message: "Lütfen adınızı ve soyadınızı giriniz!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <p>Ülke Kodu / Cep Telefonu Numaranız*</p>
          <Form.Item
            name="phone"
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
                width: 250,
              }}
            />
          </Form.Item>
          <p>Şehir</p>
          <Select
            value={value.currency || currency}
            style={{
              width: 100,
              margin: "0 8px",
            }}
            onChange={onCurrencyChange}
          >
            <Option value="rmb">Ankara</Option>
            <Option value="dollar">Adana</Option>
            <Option value="rmb">İstanbul</Option>
            <Option value="dollar">İzmir</Option>
          </Select>
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                required: true,
                message: "Lütfen boş alanları doldurun!",
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        "Lütfen boş alanları doldurun!"
                      ),
              },
            ]}
          >
            <Checkbox>
              <p>Fatura Güncelle</p>
            </Checkbox>
          </Form.Item>
        </div>
        <div className="formRight">
          <p>E-posta Adresiniz*</p>
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
          <Space direction="vertical" size={12}>
          <p>Doğum Tarihiniz*</p>
    <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />
  </Space>
          <Form.Item
            name="radio-button"
            label="Radio.Button"
            rules={[
              {
                required: true,
                message: "Please pick an item!",
              },
            ]}
          >
            <p>Cinsiyet*</p>
            <Radio.Group>
              <Radio.Button value="a">Erkek</Radio.Button>
              <Radio.Button value="b">Kadın</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <button className="update" >Güncelle</button>
          <button className="delete">Hesabı Sil</button>
        </div>
      </div>
      <h3>Şifrenizi Yenileyin</h3>
      <p>Eski şifrenizi girerek, yeni şifrenizi belirleyebilirsiniz!</p>
    <div className="passwordUpdate">
      <div className="currentPassword">
        <p>Mevcut Şifre</p>
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
      </div>
      <div className="newPassword">
      <p>Yeni Şifre</p>
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
        <button className="update" >Güncelle</button>
      </div>
    </div>
    </div>
  );
};

export default Profile;
