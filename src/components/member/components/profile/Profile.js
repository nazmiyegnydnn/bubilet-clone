import React, {useState} from "react";
import './Profile.scss'
import {  Form, Input, Select , Radio} from 'antd';
const { Option } = Select;


const Profile = ({ value = {}, onChange }) => {

    const [currency, setCurrency] = useState('rmb');
    const [number, setNumber] = useState(0);

    const triggerChange = (changedValue) => {
        onChange?.({
          number,
          currency,
          ...value,
          ...changedValue,
        });
      };

    const onCurrencyChange = (newCurrency) => {
        if (!('currency' in value)) {
          setCurrency(newCurrency);
        }
        triggerChange({
          currency: newCurrency,
        });
      };
      
  return (
    <div className='profile'>
        <h3>Profilini Düzenle</h3>
        <p>Kişisel bilgilerinizin doğru olduğundan emin olun!</p>
         <div className='profileForm'>
         <div className='formLeft'>
         <Form.Item
            style={{
                width: 250,
              }}
            name={['user', 'name']}
            label="Ad-Soyad"
            rules={[
              {
                required: true,
                message: 'Lütfen adınızı ve soyadınızı giriniz!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Telefon Numarası"
            rules={[
              {
                required: true,
                message: 'Lütfen telefon numaranızı giriniz!',
              },
            ]}
          >
            
          </Form.Item>
          
          <Select
                value={value.currency || currency}
                style={{
                width: 80,
                margin: '0 8px',
                }}
                onChange={onCurrencyChange}
            >
                <Option value="rmb">RMB</Option>
                <Option value="dollar">Dollar</Option>
            </Select>




         </div>
         <div className='formRight'>
            right
         </div>



            <Form.Item
      name="radio-button"
      label="Radio.Button"
      rules={[
        {
          required: true,
          message: 'Please pick an item!',
        },
      ]}
    >
      <Radio.Group>
        <Radio.Button value="a">item 1</Radio.Button>
        <Radio.Button value="b">item 2</Radio.Button>
      </Radio.Group>
    </Form.Item>
         </div>
    </div>
  )
}

export default Profile