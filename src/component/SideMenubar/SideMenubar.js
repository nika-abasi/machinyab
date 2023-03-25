import React, { useState } from "react";
import "./SideMenubar.css";
import CloseIcon from "@mui/icons-material/Close";
import SortIcon from '@mui/icons-material/Sort';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import LaptopIcon from '@mui/icons-material/Laptop';
import TvIcon from '@mui/icons-material/Tv';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

import ToggleBtn from './../../component/ToggleButtons/ToggleBtn'

export default function SideMenubar() {
  const [isActive, setIsActive] = useState(true);

  const openSearchHandler = (event) => {

    setIsActive((current) => !current);
   };

   /*toggle language btn*/
  const [alignment, setAlignment] = React.useState('left');
  const [devices, setDevices] = React.useState(() => ['phone']);

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const handleDevices = (event, newDevices) => {
    if (newDevices.length) {
      setDevices(newDevices);
    }
  };
  return (
    <div className="menuBtn-container">
      <button onClick={openSearchHandler} className="ham-btn-icon">
        {isActive ? (
          <CloseIcon fontSize="large" sx={{ color: "#00539B" }} />
        ) : (
          <SortIcon className="sort-icon" fontSize="large" sx={{ color: "#00539B" }} />
        )}
      </button>
      
      <div className={isActive ? "sidemenu-container-active" : "sidemenu-container"}    >
          
           
                <li id="log-in-li"><a href="">ورود | ثبت نام</a></li>
                <li><a href=""><span>equipment</span><ArrowCircleLeftIcon   fontSize="large" sx={{ color: "#00539B" }} className="arrow-icon" /></a></li>

                <li><a href=""><span>equipment</span><ArrowCircleLeftIcon   fontSize="large" sx={{ color: "#00539B" }} className="arrow-icon" /></a></li>

                
                <li><a href=""><span>equipment</span><ArrowCircleLeftIcon   fontSize="large" sx={{ color: "#00539B" }} className="arrow-icon" /></a></li>
                

                <li><a href=""><span>equipment</span><ArrowCircleLeftIcon   fontSize="large" sx={{ color: "#00539B" }} className="arrow-icon" /></a></li>

                
                <li><a href=""><span>equipment</span><ArrowCircleLeftIcon   fontSize="large" sx={{ color: "#00539B" }} className="arrow-icon" /></a></li>
                

                <li><a href=""><span>equipment</span><ArrowCircleLeftIcon   fontSize="large" sx={{ color: "#00539B" }} className="arrow-icon" /></a></li>
                <li id="contact-li">
                  <span>21-88558555</span>
                  <span id="btn-lang-toggle"><ToggleBtn  /></span>
                </li>
                  
                
                
           
      </div>
     
    </div>
 );
}
    
  