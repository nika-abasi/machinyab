import React,{useState,useEffect} from "react";
import './Topbar.css'
import {GiCircle}  from "react-icons/gi";
import { Link } from "react-router-dom";



export default function Topbar() {
  

const [value,setValue]=useState('Fa')
const changeHandler =(event)=>{
  setValue(event.target.value)

}


  return (
    <>
    
      <div className="top-bar"  >
        <div className="container-fluid">
          <div className="top-bar__content">
            <div className="top-bar__right col-md-6 right">
              <div className="top-bar__language">
                 <button className="language-btn">FA</button> 
              </div>
              <div className="top-bar__phone">
                <span>021-888555189</span>
                <Link to="/Contact">تماس با ما</Link>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
