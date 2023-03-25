import React from "react";
import Header from './../../component/Header/Header'
import Footer from './../../component/Footer/Footer'
import Breadcrumb from '../../component/Breadcrumb/Breadcrumb'
import Input from "../../component/Form/Input";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
} from "../../validators/rules";

import "./Contact.css";
import { useForm } from "../../hooks/useForm";
import Button from "../../component/Form/Button";

export default function Contact() {
  const navigate = useNavigate();
  const [formState, onInputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      
      email: {
        value: "",
        isValid: false,
      },
      phone: {
        value: "",
        isValid: false,
      },
      body: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const addNewContact = (event) => {
    event.preventDefault();

    const newContactInfo = {
      name: formState.inputs.name.value,
      email: formState.inputs.email.value,
      phone: formState.inputs.phone.value,
      body: formState.inputs.body.value,
    };
console.log("info",newContactInfo);
    

fetch("http://localhost:3000/v1/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContactInfo),
    }).then((res) => {
      if (res.ok) {
        swal({
          title: "پیغام شما با موفقیت ارسال شد",
          icon: "success",
          buttons: "اوکی",
        }).then((value) => {
          navigate("/");
        });
      }
    });
  };

  return (
    <>
     <div className="main-row-header">
      <Header />
    </div>  
    <div className="breadcrumb-container">
      <Breadcrumb />
    </div>

      <section className="login-register">
        <div className="login register-form">
          <span className="login__title">ارتباط با ما</span>
          <span className="login__subtitle">
              جهت تماس با ما اطلاعات زیر را وارد نمایید،کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت.    
          </span>
          <form action="#" className="login-form">
            <div className="login-form__username login-form__parent">
              <Input
                onInputHandler={onInputHandler}
                element="input"
                id="name"
                className="login-form__username-input"
                type="text"
                placeholder="نام و نام خانوادگی"
                validations={[
                  requiredValidator(),
                  minValidator(6),
                  maxValidator(20),
                ]}
              />
              <i className="login-form__username-icon fa fa-user"></i>
            </div>
            <div className="login-form__password login-form__parent">
            
              <Input
                onInputHandler={onInputHandler}
                element="input"
                id="email"
                className="login-form__password-input"
                type="text"
                placeholder="آدرس ایمیل"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(40),
                  emailValidator(),
                ]}
              />
              <i className="login-form__password-icon fa fa-envelope"></i>
            </div>
            <div className="login-form__phone-number login-form__parent">
              <Input
                onInputHandler={onInputHandler}
                element="input"
                id="phone"
                className="login-form__password-input"
                type="text"
                placeholder="شماره تماس"
                validations={[
                  requiredValidator(),
                  minValidator(10),
                  maxValidator(11),
                ]}
              />
              <i className="login-form__password-icon fa fa-phone"></i>
            </div>
            <div className="login-form__text login-form__parent">
              <Input
                onInputHandler={onInputHandler}
                element="textarea"
                id="body"
                className="login-form__text-input"
                placeholder="متن خود را وارد کنید"
                validations={[requiredValidator(), minValidator(10)]}
              />
            </div>
            <Button
              className={`login-form__btn ${
                formState.isFormValid === true
                  ? "login-form__btn-success"
                  : "login-form__btn-error"
              }`}
              type="submit"
              onClick={addNewContact}
              disabled={!formState.isFormValid}
            >
              <span className="login-form__btn-text">ارسال</span>
            </Button>
          </form>
        </div>
      </section>
      <div className="category-footer">
       <Footer />
     </div>
     
    </>
  );
}
