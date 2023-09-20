import React from "react";
import './SignUp.scss'
import Footer  from '../footer/Footer'
import Header from '../header/Header'
import SignUpText from "../signUpText/SignUpText";
import SignUpForm from "../signUpForm/SignUpForm";



const SignUp = () => {


    
  return (
    <div className='signUp'>
    <div className='signUpHeader'>
        <Header/>
        {/* <div className='bubiletLogo'>
            <img src={Logo}/>
            <h3>Bubilet Üye Ol</h3>
            <p>Hoş geldiniz, hızlı bir şekilde üye olabilirsiniz.</p>
        </div> */}
        {/* <div className='bubiletSignUp'>
        <div className="login">
        <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
          <Radio.Button value="large"><svg width="100%" height="100%" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                <path d="M17 2.8335C15.599 2.8335 14.2296 3.24893 13.0647 4.02725C11.8999 4.80558 10.992 5.91184 10.4559 7.20615C9.91973 8.50046 9.77946 9.92469 10.0528 11.2987C10.3261 12.6728 11.0007 13.9349 11.9913 14.9255C12.9819 15.9161 14.2441 16.5907 15.6181 16.8641C16.9921 17.1374 18.4164 16.9971 19.7107 16.461C21.005 15.9249 22.1112 15.017 22.8896 13.8521C23.6679 12.6873 24.0833 11.3178 24.0833 9.91683C24.0833 8.03821 23.3371 6.23654 22.0087 4.90816C20.6803 3.57977 18.8786 2.8335 17 2.8335ZM17 14.1668C16.1594 14.1668 15.3377 13.9176 14.6388 13.4506C13.9399 12.9836 13.3952 12.3198 13.0735 11.5432C12.7518 10.7666 12.6677 9.91211 12.8317 9.0877C12.9956 8.26328 13.4004 7.506 13.9948 6.91163C14.5892 6.31725 15.3464 5.91248 16.1709 5.74849C16.9953 5.58451 17.8498 5.66867 18.6264 5.99034C19.403 6.31201 20.0667 6.85675 20.5337 7.55566C21.0007 8.25456 21.25 9.07626 21.25 9.91683C21.25 11.044 20.8022 12.125 20.0052 12.922C19.2082 13.7191 18.1272 14.1668 17 14.1668ZM29.75 29.7502V28.3335C29.75 25.7034 28.7052 23.1811 26.8455 21.3214C24.9857 19.4616 22.4634 18.4168 19.8333 18.4168H14.1667C11.5366 18.4168 9.01426 19.4616 7.15452 21.3214C5.29479 23.1811 4.25 25.7034 4.25 28.3335V29.7502H7.08333V28.3335C7.08333 26.4549 7.82961 24.6532 9.15799 23.3248C10.4864 21.9964 12.288 21.2502 14.1667 21.2502H19.8333C21.712 21.2502 23.5136 21.9964 24.842 23.3248C26.1704 24.6532 26.9167 26.4549 26.9167 28.3335V29.7502H29.75Z" fill="currentColor"></path>
              </svg>Üye Ol</Radio.Button>
          <Radio.Button value="small">→| Üye Girişi</Radio.Button>
        </Radio.Group>
        </div>
        </div> */}
    </div>
    <div className="signUpMain">
      <SignUpText/>
      <SignUpForm/>
 </div>
    <Footer/>
    </div>
  )
}

export default SignUp