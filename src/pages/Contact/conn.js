// import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
// import React, { useState } from "react";
// import "./../../pages/Contact/Contact.css";
// import Header from "./../../component/Header/Header";
// import Footer from "./../../component/Footer/Footer";
// import FormControl from "@mui/material/FormControl";
// import Breadcrumb from "../../component/Breadcrumb/Breadcrumb";
// import InputLabel from "@mui/material/InputLabel";
// import NativeSelect from "@mui/material/NativeSelect";
// import { useForm } from "./../../hooks/useForm";
// import swal from "sweetalert";
// import { useNavigate } from "react-router-dom";
// import {
//   requiredValidator,
//   minValidator,
//   maxValidator,
//   emailValidator,
// } from "../../validators/rules";

// export default function Contact() {
//   const navigate = useNavigate();
//   const [submitted, setSubmitted] = useState(false);
//   const [firstNameData, setFirstNameData] = useState("");
//   const [lastNameData, setLastNameData] = useState("");
//   const [emailData, setEmailData] = useState("");
//   const [companyNameData, setCompanyNameData] = useState("");
//   const [jobTitleData, setJobTitleData] = useState("");
//   const [address, setAddress] = useState("");
//   const [postalCode, setPostalCode] = useState("");
//   const [telNoData, setTelNoData] = useState("");
//   const [allValid, setAllValid] = useState(false);
//   const[body,setBody]=useState("");

//   const [formState, onInputHandler] = useForm(
//     {
//       firstNameData: {
//         value: "",
//         isValid: false,
//       },
//       lastname: {
//         value: "",
//         isValid: false,
//       },
//       email: {
//         value: "",
//         isValid: false,
//       },
//       companyName: {
//         value: "",
//         isValid: false,
//       },
//       jobTitle: {
//         value: "",
//         isValid: false,
//       },
//       telNo: {
//         value: "",
//         isValid: false,
//       },
//       body: {
//         value: "",
//         isValid: false,
//       },
//     },
//     false
//   );

//   const submitHandler = (event) => {
//     event.preventDefault();
//     console.log("click", event);
//     setSubmitted(true);

//     if (
//       firstNameData.length !== 0 &&
//       lastNameData.length !== 0 &&
//       emailData.length !== 0 &&
//       companyNameData.length !== 0 &&
//       telNoData.length !== 0
//     ) {
//       setAllValid(true);
//     }
//     setTimeout(() => {
//       this.setState({
//         allValid: false,
//       });
//     }, 3000);
//   };

//   const newContactInfo = {
//     firstNameData: formState.inputs.firstNameData.value,
//     lastname: formState.inputs.lastname.value,
//     email: formState.inputs.email.value,
//     companyName: formState.inputs.companyName.value,
//     jobTitle: formState.inputs.jobTitle.value,
//     telNo: formState.inputs.telNo.value,
//     body:formState.inputs.telNo.value,
//   };

//   console.log("info",newContactInfo);
//   const firstNameValidation = (event) => {
//     // console.log(this);
//     setFirstNameData(event.target.value);
//   };

//   const lastNameValidation = (event) => {
//     console.log(this);
//     setLastNameData(event.target.value);
//   };
//   const companyNameValidation = (event) => {
//     console.log("company", this);
//     setCompanyNameData(event.target.value);
//   };
//   const emailValidation = (event) => {
//     console.log(this);
//     setEmailData(event.target.value);
//   };
//   const jobTitleValidation = (event) => {
//     console.log(this);
//     setJobTitleData(event.target.value);
//   };

//   const addressValidation = (event) => {
//     console.log(this);
//     setAddress(event.target.value);
//   };

//   const postalCodeValidation = (event) => {
//     console.log(this);
//     setPostalCode(event.target.value);
//   };

//   const telNoValidation = (event) => {
//     console.log(this);
//     setTelNoData(event.target.value);
//   };

//   const bodyValidation=(event)=>{
//     setBody(event.target.value)
//   }



//   // fetch("http://localhost:3000/v1/contact", {
//   //   method: "POST",
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //   },
//   //   body: JSON.stringify(newContactInfo),
//   // }).then((res) => {
//   //   if (res.ok) {
//   //     swal({
//   //       title: "پیغام شما با موفقیت به مدیران سایت ارسال شد",
//   //       icon: "success",
//   //       buttons: "اوکی",
//   //     }).then((value) => {
//   //       navigate("/");
//   //     });
//   //   }
//   // });

//   return (
//     <>
//       <div className="main-row-header">
//         <Header />
//       </div>
//       <div className="breadcrumb-container">
//         <Breadcrumb />
//       </div>
//       <div className="contact-main-container">
//         <h3>فرم ارسال سفارش و تماس</h3>
//         <p>
//           لطفا فرم زیر را تکمیل کنید. درخواست شما به یکی از اعضای تیم فروش و
//           خدمات مشتریان متخصص ما اختصاص داده می شود. شما باید ظرف 24 ساعت پاسخ
//           دریافت کنید. اگر به کمک فوری نیاز دارید، لطفاً با شماره 800-828-1470
//           با ما تماس بگیرید. از توجه شما سپاسگزاریم!
//         </p>
//         <h4>نوع درخواست</h4>
//         <p>لطفا یکی از گزینه های زیر را انتخاب کنید:</p>
//       </div>
//       <FormControl
//         sx={{ m: 2, marginRight: 67, marginTop: -7 }}
//         variant="standard"
//         onSubmit={submitHandler}
//       >
//         <InputLabel htmlFor="demo-customized-select-native">
//           نوع درخواست
//         </InputLabel>
//         <NativeSelect
//         // id="demo-customized-select-native"
//         // value={requestType}
//         // onChange={handleChange}
//         // input={<BootstrapInput />}
//         >
//           <option aria-label="None" value="" />
//           <option value={10}>درخواست سرویس و کالیبراسیون</option>
//           <option value={20}>درخواست سفارش کالای نو/کارکرده</option>
//           <option value={30}>درخواست کالای متفرقه</option>
//           <option value={40}>تماس با ما/تماس با پشتیبانی مشتریان</option>
//         </NativeSelect>
//       </FormControl>

//       <span className="divider"></span>

//       <div className="form-container">
//         <form
//           className="register-form"
//           autoComplete="off"
//           onSubmit={submitHandler}
//         >
//           {submitted && allValid && (
//             <div className="success-message">درخواست شما با موفقیت ثبت شد.</div>
//           )}

//           <input
//             onInputHandler={onInputHandler}
//             id="first-name"
//             className="form-field"
//             type="text"
//             placeholder="نام*"
//             name="firstName"
//             value={firstNameData}
//             onChange={(event) => {
//               firstNameValidation(event);
//             }}
//             validations={[
//               requiredValidator(),
//               minValidator(6),
//               maxValidator(20),
//             ]}
//           />
//           {submitted && firstNameData.length === 0 && (
//             <span className="error-message" id="first-name-error">
//               لطفا نام خود را وارد نمایید
//             </span>
//           )}
//           <input
//           onInputHandler={onInputHandler}
//             id="last-name"
//             className="form-field"
//             type="text"
//             placeholder="نام خانوادگی *"
//             name="lastName"
//             value={lastNameData}
//             onChange={lastNameValidation}
//           />
//           {submitted && firstNameData.length === 0 && (
//             <span className="error-message" id="first-name-error">
//               لطفا فامیلی خود را وارد نمایید
//             </span>
//           )}

//           <input
//           onInputHandler={onInputHandler}
//             id="companyName"
//             className="form-field"
//             type="text"
//             placeholder="نام شرکت* "
//             name="companyName"
//             value={companyNameData}
//             onChange={(event) => {
//               companyNameValidation(event);
//             }}
//           />
//           {submitted && companyNameData.length === 0 && (
//             <span className="error-message" id="last-name-error">
//               لطفا نام شرکت را وارد نمایید
//             </span>
//           )}

//           <input
//           onInputHandler={onInputHandler}
//             id="email"
//             className="form-field"
//             type="text"
//             placeholder="*ایمیل"
//             name="email"
//             value={emailData}
//             onChange={(event) => {
//               emailValidation(event);
//             }}
//           />
//           {submitted && emailData.length === 0 && (
//             <span className="error-message" id="email-error">
//               لطفا ایمیل خود را وارد نمایید
//             </span>
//           )}

//           <input
//           onInputHandler={onInputHandler}
//             id="jobTitle"
//             className="form-field"
//             type="text"
//             placeholder="سمت شغلی"
//             name="jobTitle"
//             value={jobTitleData}
//             onChange={(event) => {
//               jobTitleValidation(event);
//             }}
//           />
//           {submitted && jobTitleData.length === 0 && (
//             <span className="error-message" id="last-name-error">
//               لطفا سمت خود را وارد نمایید
//             </span>
//           )}
//           <input
//           onInputHandler={onInputHandler}
//             id="address"
//             className="form-field"
//             type="text"
//             placeholder="آدرس"
//             name="address"
//             value={address}
//             onChange={(event) => {
//               addressValidation(event);
//             }}
//           />
//           {submitted && address.length === 0 && (
//             <span className="error-message" id="last-name-error">
//               لطفا ادرس خود را وارد نمایید
//             </span>
//           )}
//           <input
//           onInputHandler={onInputHandler}
//             id="postalCode"
//             className="form-field"
//             type="text"
//             placeholder="کد پستی"
//             name="postalCode"
//             value={postalCode}
//             onChange={(event) => {
//               postalCodeValidation(event);
//             }}
//           />
//           {submitted && postalCode.length === 0 && (
//             <span className="error-message" id="last-name-error">
//               لطفاکد پستی را وارد نمایید
//             </span>
//           )}
//           <input
//           onInputHandler={onInputHandler}
//             id="telNo"
//             className="form-field"
//             type="text"
//             placeholder=" شماره تلفن*"
//             name="telNo"
//             value={telNoData}
//             onChange={(event) => {
//               telNoValidation(event);
//             }}
//           />

//           <div className="login-form__text login-form__parent">
//             <input
//               onInputHandler={onInputHandler}
//               element="textarea"
//               id="body"
//               className="login-form__text-input"
//               placeholder="متن خود را وارد کنید"
//               validations={[requiredValidator(), minValidator(10)]}
//               onChange={(event) => {
//                 bodyValidation(event);
//               }}
//             />
//           </div>

//           {submitted && telNoData.length === 0 && (
//             <span className="error-message" id="last-name-error">
//               لطفا شماره تماس خود را وارد نمایید
//             </span>
//           )}

//           <button className="form-field" type="submit">
//             ثبت سفارش
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }
