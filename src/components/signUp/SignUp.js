import React, { useState } from "react";
import './SignUp.scss'
import Logo from '../../images/logo-beyaz.svg'
import { Radio } from "antd";
import Footer  from '../footer/Footer'
import {
    Form,
    Input,
    Select,
    Checkbox,
    Button
  } from 'antd';


const SignUp = () => {
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
    <div className='signUp'>
    <div className='signUpHeader'>
        <div className='bubiletLogo'>
            <img src={Logo}/>
            <h3>Bubilet Üye Ol</h3>
            <p>Hoş geldiniz, hızlı bir şekilde üye olabilirsiniz.</p>
        </div>
        <div className='bubiletSignUp'>
        <div className="login">
        <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
          <Radio.Button value="large"><svg width="100%" height="100%" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                <path d="M17 2.8335C15.599 2.8335 14.2296 3.24893 13.0647 4.02725C11.8999 4.80558 10.992 5.91184 10.4559 7.20615C9.91973 8.50046 9.77946 9.92469 10.0528 11.2987C10.3261 12.6728 11.0007 13.9349 11.9913 14.9255C12.9819 15.9161 14.2441 16.5907 15.6181 16.8641C16.9921 17.1374 18.4164 16.9971 19.7107 16.461C21.005 15.9249 22.1112 15.017 22.8896 13.8521C23.6679 12.6873 24.0833 11.3178 24.0833 9.91683C24.0833 8.03821 23.3371 6.23654 22.0087 4.90816C20.6803 3.57977 18.8786 2.8335 17 2.8335ZM17 14.1668C16.1594 14.1668 15.3377 13.9176 14.6388 13.4506C13.9399 12.9836 13.3952 12.3198 13.0735 11.5432C12.7518 10.7666 12.6677 9.91211 12.8317 9.0877C12.9956 8.26328 13.4004 7.506 13.9948 6.91163C14.5892 6.31725 15.3464 5.91248 16.1709 5.74849C16.9953 5.58451 17.8498 5.66867 18.6264 5.99034C19.403 6.31201 20.0667 6.85675 20.5337 7.55566C21.0007 8.25456 21.25 9.07626 21.25 9.91683C21.25 11.044 20.8022 12.125 20.0052 12.922C19.2082 13.7191 18.1272 14.1668 17 14.1668ZM29.75 29.7502V28.3335C29.75 25.7034 28.7052 23.1811 26.8455 21.3214C24.9857 19.4616 22.4634 18.4168 19.8333 18.4168H14.1667C11.5366 18.4168 9.01426 19.4616 7.15452 21.3214C5.29479 23.1811 4.25 25.7034 4.25 28.3335V29.7502H7.08333V28.3335C7.08333 26.4549 7.82961 24.6532 9.15799 23.3248C10.4864 21.9964 12.288 21.2502 14.1667 21.2502H19.8333C21.712 21.2502 23.5136 21.9964 24.842 23.3248C26.1704 24.6532 26.9167 26.4549 26.9167 28.3335V29.7502H29.75Z" fill="currentColor"></path>
              </svg>Üye Ol</Radio.Button>
          <Radio.Button value="small">→| Üye Girişi</Radio.Button>
        </Radio.Group>
        </div>
        </div>
    </div>
    <div className="signUpMain">
        <div className="signUpText">
            <div className="signUpTextDetail">
            <svg width="100%" height="100%" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M47.5579 29.228C46.9139 28.706 45.9709 28.803 45.4479 29.446L36.3079 40.683L30.3539 35.717C29.7169 35.186 28.7709 35.272 28.2409 35.908C27.7099 36.544 27.7959 37.49 28.4319 38.02L35.5529 43.958C35.8619 44.215 36.2589 44.338 36.6579 44.299C37.0559 44.261 37.4239 44.064 37.6779 43.752L47.7759 31.337C48.2969 30.695 48.2009 29.75 47.5579 29.228Z" fill="currentColor"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6113 37.109C10.6113 22.473 22.4733 10.609 37.1113 10.609C51.7503 10.609 63.6113 22.474 63.6113 37.109C63.6113 51.744 51.7503 63.609 37.1113 63.609C22.4733 63.609 10.6113 51.744 10.6113 37.109ZM13.6113 37.109C13.6113 50.067 24.1543 60.609 37.1113 60.609C50.0703 60.609 60.6113 50.067 60.6113 37.109C60.6113 24.151 50.0703 13.609 37.1113 13.609C24.1543 13.609 13.6113 24.151 13.6113 37.109Z" fill="currentColor"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M71.1945 40.326L72.8855 47.161C72.8855 47.161 73.0615 48.155 73.0615 48.65C73.0595 49.862 72.7425 51.054 72.1885 52.12C71.6325 53.183 70.8335 54.133 69.7825 54.788L63.7985 58.499C63.0165 58.98 61.9905 59.834 61.0685 60.772C60.1425 61.707 59.3015 62.743 58.8285 63.532L55.1915 69.56C54.5425 70.63 53.5875 71.448 52.5175 72.019C51.4435 72.586 50.2385 72.914 49.0125 72.916C48.5425 72.916 48.0705 72.867 47.6045 72.758L40.7505 71.151C39.8875 70.946 38.6155 70.826 37.3445 70.828C35.9855 70.825 34.5965 70.964 33.6765 71.195L26.8405 72.886C26.3485 73.008 25.8485 73.063 25.3525 73.063C24.1395 73.061 22.9475 72.744 21.8815 72.189C20.8195 71.633 19.8695 70.833 19.2155 69.783L15.5045 63.8C15.0225 63.017 14.1695 61.992 13.2315 61.069C12.2975 60.143 11.2605 59.302 10.4735 58.829L4.44245 55.192C3.37245 54.542 2.55445 53.589 1.98345 52.518C1.41545 51.444 1.08845 50.24 1.08545 49.013C1.08645 48.546 1.13445 48.071 1.24745 47.597L1.24545 47.605L2.85245 40.751C3.05745 39.887 3.17745 38.615 3.17445 37.344C3.17745 35.985 3.03845 34.598 2.80945 33.676L1.11745 26.842C0.995453 26.35 0.940453 25.849 0.939453 25.352C0.942453 24.141 1.25845 22.948 1.81345 21.883C2.36945 20.819 3.17045 19.869 4.22145 19.215L10.2055 15.504C10.9865 15.023 12.0125 14.169 12.9355 13.231C13.8615 12.296 14.7025 11.26 15.1755 10.471L18.8125 4.443C19.4615 3.373 20.4145 2.554 21.4865 1.984C22.5585 1.416 23.7635 1.088 24.9905 1.086C25.4585 1.086 25.9315 1.136 26.3985 1.245L33.2535 2.852C34.1155 3.056 35.3865 3.177 36.6575 3.175C38.0165 3.177 39.4035 3.038 40.3275 2.808L47.1615 1.116C47.6535 0.994999 48.1535 0.938999 48.6505 0.938999C49.8625 0.940999 51.0535 1.258 52.1195 1.813C53.1835 2.369 54.1325 3.169 54.7875 4.219L58.4975 10.203C58.9795 10.985 59.8345 12.01 60.7725 12.933C61.7065 13.86 62.7425 14.701 63.5305 15.173L69.5605 18.811C70.6295 19.46 71.4485 20.414 72.0185 21.485C72.5865 22.559 72.9125 23.763 72.9165 24.989C72.9155 25.458 72.8655 25.93 72.7585 26.395L72.7575 26.398L71.1505 33.252C70.9464 34.116 70.8255 35.387 70.8275 36.658C70.8245 38.017 70.9624 39.404 71.1945 40.326ZM68.2015 52.237C68.7025 51.929 69.1885 51.388 69.5285 50.731C69.8725 50.077 70.0634 49.318 70.0604 48.649C70.0604 48.372 70.0314 48.113 69.9725 47.88H69.9734L68.2814 41.048C67.9654 39.76 67.8285 38.211 67.8255 36.657C67.8265 35.204 67.9495 33.771 68.2285 32.566L69.8354 25.712V25.714C69.8875 25.49 69.9155 25.245 69.9145 24.987C69.9174 24.315 69.7205 23.548 69.3664 22.889C69.0174 22.226 68.5205 21.682 68.0095 21.377L61.9805 17.74C60.8855 17.076 59.7345 16.12 58.6625 15.065C57.5935 14.007 56.6255 12.868 55.9475 11.781L52.2365 5.798C51.9295 5.296 51.3875 4.81 50.7305 4.469C50.0765 4.125 49.3185 3.934 48.6495 3.936C48.3745 3.936 48.1165 3.966 47.8815 4.025L41.0465 5.717C39.7595 6.031 38.2105 6.169 36.6555 6.172C35.2025 6.17 33.7705 6.05 32.5655 5.77L25.7105 4.163C25.4875 4.11 25.2455 4.083 24.9875 4.083C24.3145 4.081 23.5485 4.278 22.8895 4.631C22.2265 4.98 21.6825 5.478 21.3775 5.989L17.7405 12.018C17.0765 13.113 16.1215 14.264 15.0665 15.335C14.0085 16.404 12.8695 17.374 11.7815 18.051L5.79745 21.762C5.29545 22.07 4.80945 22.61 4.46945 23.268C4.12545 23.922 3.93345 24.68 3.93645 25.349C3.93545 25.624 3.96645 25.883 4.02445 26.118L5.71745 32.954C6.03045 34.238 6.16845 35.787 6.17145 37.342C6.16845 38.794 6.04945 40.227 5.76945 41.433L4.16145 48.287V48.294C4.10845 48.509 4.08145 48.75 4.08245 49.011C4.07945 49.683 4.27645 50.45 4.63045 51.109C4.97945 51.772 5.47745 52.317 5.98845 52.621L12.0185 56.258C13.1135 56.922 14.2645 57.878 15.3355 58.934C16.4045 59.991 17.3735 61.131 18.0505 62.218L21.7625 68.202C22.0695 68.703 22.6105 69.188 23.2665 69.529C23.9205 69.873 24.6785 70.065 25.3485 70.062C25.6225 70.062 25.8825 70.032 26.1165 69.973L32.9515 68.282C34.2375 67.966 35.7865 67.829 37.3415 67.827C38.7945 67.829 40.2265 67.949 41.4335 68.229L48.2875 69.836C48.5085 69.888 48.7525 69.915 49.0115 69.915C49.6835 69.918 50.4505 69.72 51.1105 69.367C51.7725 69.018 52.3175 68.52 52.6225 68.009L56.2595 61.981C56.9225 60.886 57.8785 59.735 58.9335 58.664C59.9915 57.595 61.1305 56.625 62.2185 55.948L68.2015 52.237Z" fill="currentColor"></path>
              </svg>
              <div className="serviceText">
                <h3>Kaliteli Hizmet</h3>
                <p>Hiçbir konuda mağduriyet yaşatmadan, sizin memnuniyetiniz için çalışıyoruz.</p>
              </div>
            </div>
            <hr className="signUpLine"></hr>
            <div className="signUpTextDetail">
            <svg width="100%" height="100%" viewBox="0 0 74 56" fill="none" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M72.3574 39.5992C73.2737 38.8027 73.8593 37.6925 73.9993 36.4865C73.8593 35.2805 73.2737 34.1703 72.3574 33.3737C71.9432 32.9933 71.6064 32.5365 71.3655 32.0283C71.3128 31.4405 71.3748 30.848 71.5479 30.2838C71.9268 29.1667 71.8821 27.9495 71.4225 26.8632C70.708 25.9028 69.6575 25.2472 68.4808 25.0274C67.915 24.8973 67.3803 24.6571 66.9073 24.3205C66.5754 23.8448 66.3356 23.3111 66.2004 22.747C65.9806 21.5703 65.325 20.5198 64.3646 19.8053C63.2783 19.3456 62.0611 19.301 60.944 19.6799C60.3808 19.8581 59.7874 19.9201 59.1995 19.8623C58.6897 19.6186 58.2296 19.2822 57.8427 18.8703C57.0515 17.9454 55.9393 17.3546 54.7299 17.217C53.5263 17.3544 52.4188 17.9407 51.6286 18.8589C51.2416 19.2708 50.7815 19.6072 50.2717 19.8509C49.6839 19.9035 49.0914 19.8416 48.5272 19.6685C47.4102 19.2896 46.1929 19.3342 45.1066 19.7939C44.1462 20.5084 43.4906 21.5589 43.2709 22.7356C43.1408 23.3014 42.9005 23.8361 42.5639 24.3091C42.0899 24.6414 41.5553 24.8777 40.9905 25.0046C39.8141 25.2326 38.7651 25.8912 38.0487 26.8518C37.5891 27.938 37.5444 29.1553 37.9233 30.2724C38.0435 30.735 38.1161 31.2088 38.14 31.6862C37.6007 31.8333 37.0455 31.9137 36.4867 31.9257C31.4584 31.9257 27.365 26.3045 27.365 19.3834C27.365 12.4624 31.4584 6.8412 36.4867 6.8412C40.9334 6.8412 44.7189 11.2196 45.4829 17.2513C45.5647 17.881 46.1416 18.3251 46.7713 18.2432C47.401 18.1614 47.8451 17.5845 47.7633 16.9548C47.3797 13.0475 45.5252 9.4321 42.5753 6.8412H60.5449C61.0017 9.08089 62.752 10.8312 64.9917 11.288V17.103C64.9917 17.7327 65.5022 18.2432 66.1319 18.2432C66.7617 18.2432 67.2721 17.7327 67.2721 17.103V10.2618C67.2721 9.63209 66.7617 9.1216 66.1319 9.1216C64.2428 9.1216 62.7113 7.59014 62.7113 5.70099C62.7113 5.07128 62.2008 4.56079 61.5711 4.56079H11.4022C10.7725 4.56079 10.262 5.07128 10.262 5.70099C10.262 7.59014 8.73053 9.1216 6.84137 9.1216C6.21166 9.1216 5.70117 9.63209 5.70117 10.2618V28.5051C5.70117 29.1348 6.21166 29.6453 6.84137 29.6453C8.73053 29.6453 10.262 31.1767 10.262 33.0659C10.262 33.6956 10.7725 34.2061 11.4022 34.2061H36.3954C35.8311 34.8363 35.501 35.6415 35.4605 36.4865C35.6005 37.6925 36.1861 38.8027 37.1024 39.5992C37.5166 39.9797 37.8534 40.4365 38.0943 40.9447C38.147 41.5325 38.085 42.125 37.9119 42.6892C37.533 43.8062 37.5777 45.0235 38.0373 46.1098C38.7519 47.0702 39.8024 47.7257 40.9791 47.9455C41.5449 48.0756 42.0795 48.3158 42.5525 48.6524C42.8844 49.1281 43.1242 49.6619 43.2595 50.2259C43.4792 51.4026 44.1348 52.4531 45.0952 53.1676C46.1815 53.6273 47.3988 53.6719 48.5158 53.2931C49.08 53.12 49.6725 53.058 50.2603 53.1106C50.7701 53.3544 51.2302 53.6908 51.6172 54.1026C52.4083 55.0276 53.5206 55.6183 54.7299 55.7559C55.9335 55.6185 57.041 55.0322 57.8313 54.114C58.2182 53.7022 58.6783 53.3658 59.1881 53.122C59.7759 53.0694 60.3684 53.1314 60.9326 53.3045C62.0496 53.6833 63.2669 53.6387 64.3532 53.1791C65.3136 52.4645 65.9692 51.414 66.1889 50.2373C66.3191 49.6715 66.5593 49.1369 66.8959 48.6638C67.3699 48.3315 67.9045 48.0952 68.4694 47.9683C69.6457 47.7404 70.6947 47.0817 71.4111 46.1212C71.8707 45.0349 71.9154 43.8176 71.5365 42.7006C71.3634 42.1364 71.3014 41.5439 71.3541 40.9561C71.5971 40.4429 71.938 39.982 72.3574 39.5992ZM7.98102 27.4789V11.288C10.2207 10.8312 11.971 9.08089 12.4278 6.84121H30.443C26.897 10.0289 24.9364 14.6176 25.0841 19.3834C24.9364 24.1493 26.897 28.738 30.443 31.9257H12.4278C11.971 29.686 10.2207 27.9357 7.98102 27.4789ZM69.1992 40.3404C69.5154 39.4757 70.0265 38.6954 70.6929 38.06C70.7609 37.9803 70.8317 37.8993 70.9029 37.8179C71.3205 37.3403 71.7532 36.8453 71.7532 36.4751C71.7532 36.0572 71.2335 35.4907 70.7464 34.96C70.7285 34.9405 70.7106 34.921 70.6929 34.9016C70.0243 34.2681 69.5128 33.4872 69.1992 32.6212C69.0309 31.6835 69.0816 30.7197 69.3474 29.8049C69.5415 29.221 69.5884 28.5983 69.4842 27.992C69.2904 27.6613 68.5037 27.3991 67.8081 27.1824C66.8933 26.9635 66.0421 26.534 65.3225 25.9282C64.7208 25.2058 64.2918 24.3557 64.0683 23.4426C63.863 22.7812 63.5894 21.9603 63.2587 21.7665C62.6524 21.6622 62.0297 21.7092 61.4458 21.9033C60.531 22.1691 59.5671 22.2198 58.6295 22.0515C57.7635 21.7379 56.9826 21.2264 56.3491 20.5578C56.3297 20.54 56.3102 20.5222 56.2907 20.5043C55.7599 20.0172 55.1935 19.4975 54.7756 19.4975C54.3577 19.4975 53.7913 20.0172 53.2605 20.5043C53.241 20.5222 53.2216 20.54 53.2021 20.5578C52.5686 21.2264 51.7877 21.7379 50.9217 22.0515C49.9841 22.2198 49.0202 22.1691 48.1054 21.9033C47.5216 21.7092 46.8989 21.6622 46.2925 21.7665C45.9697 21.9557 45.7121 22.7426 45.4985 23.3952L45.483 23.4426C45.264 24.3574 44.8346 25.2086 44.2287 25.9282C43.5064 26.5299 42.6563 26.9589 41.7431 27.1824C41.0818 27.3877 40.2608 27.6613 40.067 27.992C39.9628 28.5983 40.0098 29.221 40.2038 29.8049C40.4755 30.7187 40.5263 31.6839 40.352 32.6212C40.3203 32.735 40.2783 32.8456 40.2266 32.9518C40.2082 33.0321 40.1774 33.109 40.1354 33.1799C39.7916 33.8137 39.3619 34.3969 38.8584 34.913C38.8406 34.9324 38.8227 34.9519 38.8048 34.9714C38.3178 35.5022 37.798 36.0686 37.798 36.4865C37.798 36.9044 38.3178 37.4708 38.8048 38.0016C38.8227 38.0211 38.8406 38.0405 38.8584 38.06C39.527 38.6935 40.0384 39.4743 40.352 40.3404C40.5263 41.2776 40.4755 42.2429 40.2038 43.1567C40.0098 43.7405 39.9628 44.3632 40.067 44.9696C40.2608 45.3002 41.0476 45.5625 41.7431 45.7791C42.658 45.998 43.5091 46.4275 44.2287 47.0334C44.8304 47.7557 45.2594 48.6058 45.483 49.519C45.6882 50.1803 45.9618 51.0013 46.2925 51.1951C46.8989 51.2993 47.5216 51.2523 48.1054 51.0583C48.7257 50.9064 49.36 50.8186 49.9982 50.796C50.3096 50.7946 50.62 50.8329 50.9217 50.91C51.7877 51.2237 52.5686 51.7351 53.2021 52.4037C53.2215 52.4215 53.241 52.4394 53.2605 52.4573C53.7913 52.9443 54.3577 53.4641 54.7756 53.4641C55.1935 53.4641 55.76 52.9443 56.2907 52.4573C56.3102 52.4394 56.3297 52.4215 56.3491 52.4037C56.9826 51.7351 57.7635 51.2237 58.6295 50.91C59.5671 50.7417 60.531 50.7925 61.4458 51.0583C62.0297 51.2523 62.6524 51.2993 63.2587 51.1951C63.5816 51.0059 63.8392 50.2189 64.0528 49.5663L64.0683 49.519C64.2872 48.6041 64.7167 47.753 65.3225 47.0334C66.0449 46.4317 66.895 46.0027 67.8081 45.7791C68.4695 45.5739 69.2904 45.3002 69.4842 44.9696C69.5884 44.3632 69.5415 43.7405 69.3474 43.1567C69.0816 42.2419 69.0309 41.278 69.1992 40.3404Z" fill="currentColor"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M53.5912 31.9257C53.5912 33.8148 52.0598 35.3463 50.1706 35.3463C48.2815 35.3463 46.75 33.8148 46.75 31.9257C46.75 30.0365 48.2815 28.5051 50.1706 28.5051C52.0598 28.5051 53.5912 30.0365 53.5912 31.9257ZM51.3103 31.9257C51.3103 31.296 50.7998 30.7855 50.1701 30.7855C49.5403 30.7855 49.0298 31.296 49.0298 31.9257C49.0298 32.5554 49.5403 33.0659 50.1701 33.0659C50.7998 33.0659 51.3103 32.5554 51.3103 31.9257Z" fill="currentColor"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M55.8691 41.0473C55.8691 39.1582 57.4006 37.6267 59.2897 37.6267C61.1789 37.6267 62.7104 39.1582 62.7104 41.0473C62.7104 42.9365 61.1789 44.4679 59.2897 44.4679C57.4006 44.4679 55.8691 42.9365 55.8691 41.0473ZM58.149 41.0473C58.149 41.677 58.6595 42.1875 59.2892 42.1875C59.9189 42.1875 60.4294 41.677 60.4294 41.0473C60.4294 40.4176 59.9189 39.9071 59.2892 39.9071C58.6595 39.9071 58.149 40.4176 58.149 41.0473Z" fill="currentColor"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M60.7599 28.8357L47.0775 42.5182C46.8616 42.7323 46.7402 43.0237 46.7402 43.3277C46.7402 43.6317 46.8616 43.9232 47.0775 44.1372C47.2916 44.3531 47.583 44.4745 47.887 44.4745C48.1911 44.4745 48.4825 44.3531 48.6966 44.1372L62.379 30.4548C62.8261 30.0077 62.8261 29.2828 62.379 28.8357C61.9319 28.3886 61.207 28.3886 60.7599 28.8357Z" fill="currentColor"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M33.0659 36.4865H2.28041V2.28041H70.6926V22.8041C70.6926 23.4338 71.2031 23.9443 71.8328 23.9443C72.4625 23.9443 72.973 23.4338 72.973 22.8041V1.1402C72.973 0.510486 72.4625 0 71.8328 0H1.1402C0.510486 0 0 0.510486 0 1.1402V37.6267C0 38.2564 0.510486 38.7669 1.1402 38.7669H33.0659C33.6956 38.7669 34.2061 38.2564 34.2061 37.6267C34.2061 36.997 33.6956 36.4865 33.0659 36.4865Z" fill="currentColor"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.543 20.5236C12.543 18.6345 14.0744 17.103 15.9636 17.103C17.8527 17.103 19.3842 18.6345 19.3842 20.5236C19.3842 22.4128 17.8527 23.9442 15.9636 23.9442C14.0744 23.9442 12.543 22.4128 12.543 20.5236ZM14.8228 20.5236C14.8228 21.1533 15.3333 21.6638 15.963 21.6638C16.5927 21.6638 17.1032 21.1533 17.1032 20.5236C17.1032 19.8939 16.5927 19.3834 15.963 19.3834C15.3333 19.3834 14.8228 19.8939 14.8228 20.5236Z" fill="currentColor"></path>
              </svg>
              <div className="serviceText">
              <h3>En Uygun Fiyat</h3>
              <p>İnternet siteleri arasında en uygun fiyatı size garanti ediyoruz.</p>
              </div>
            </div>
            <hr className="signUpLine"></hr>
            <div className="signUpTextDetail">
            <svg width="100%" height="100%" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M67.7927 20.0516L71.7314 23.9903C74.1185 26.3774 74.1185 30.3161 71.612 32.7032L32.583 71.7323C30.1959 74.1193 26.2572 74.1193 23.8701 71.7323L20.0508 67.9129C19.5733 67.3161 19.454 66.4806 19.9314 65.8839C22.4379 62.4226 22.0798 57.8871 19.0959 54.9032C16.112 51.9194 11.5766 51.5613 8.23463 54.0677C7.5185 54.5452 6.80237 54.5452 6.2056 53.9484L2.26689 50.0097C-0.120212 47.6226 -0.120212 43.6839 2.26689 41.2968L41.4153 2.26774C43.8024 -0.119357 47.7411 -0.119357 50.1282 2.26774L53.9475 6.08709C54.425 6.68387 54.5443 7.51935 54.0669 8.11613C51.5604 11.5774 51.9185 16.1129 54.9024 19.0968C57.8862 22.0806 62.4217 22.4387 65.7637 19.9323C66.4798 19.4548 67.1959 19.4548 67.7927 20.0516ZM23.1536 66.4806L26.1375 69.4645C27.3311 70.6581 29.3601 70.6581 30.5536 69.4645L57.5278 42.371L52.5149 37.3581L54.6633 35.2097L59.6762 40.2226L69.4633 30.4355C70.6569 29.2419 70.6569 27.3322 69.4633 26.1387L66.4794 23.1548C62.0633 25.7806 56.4536 25.0645 52.7536 21.3645C49.173 17.6645 48.4569 12.1742 50.9633 7.6387L47.9794 4.65483C46.7859 3.46128 44.8762 3.46128 43.6827 4.65483L33.8956 14.4419L38.9085 19.4548L36.7601 21.6032L31.7472 16.5903L4.65364 43.6839C3.46009 44.8774 3.46009 46.7871 4.65364 47.9806L7.63751 50.9645C12.0536 48.3387 17.6633 49.0548 21.3633 52.7548C24.944 56.4548 25.6601 61.9451 23.1536 66.4806Z" fill="currentColor"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M40.1953 24.9511L42.3896 22.7568L51.2512 31.6183L49.0569 33.8126L40.1953 24.9511Z" fill="currentColor"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M25.1914 34.9586L27.4701 32.6799L41.311 46.5208L39.0323 48.7995L25.1914 34.9586Z" fill="currentColor"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.918 41.2936L24.1123 39.0993L34.9149 49.902L32.7206 52.0962L21.918 41.2936Z" fill="currentColor"></path>
              </svg>
              <div className="serviceText">
              <h3>Bilet Almanın En Kolay Yolu</h3>
              <p>Çıktı almana gerek kalmadan, biletlerin hem sms hem de e-posta ile adresine gelsin.</p>
              </div>
            </div>
            <hr className="signUpLine"></hr>
            <div className="signUpBottomDetail">
                <p>Bubilet hesabınız varsa giriş yapabilirsiniz.</p>
                <button>Giriş Yap</button>
            </div>
        </div>
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
    </div>
    <Footer/>
    </div>
  )
}

export default SignUp