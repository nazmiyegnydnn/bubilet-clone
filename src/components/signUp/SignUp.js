import React, {useState}from "react";
import "./SignUp.scss";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import SignUpText from "../signUpText/SignUpText";
import SignUpForm from "../signUpForm/SignUpForm";

const SignUp = () => {

  const textToPass = "Bubilet Üye Ol , Hoş geldiniz hızlı bir şekilde Üye olabilirsiniz.";
  return (
    <div className="signUp">
      <div className="signUpHeader">
        <Header text={textToPass}/>
      </div>
      <div className="signUpMain">
        <SignUpText />
        <SignUpForm />
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
