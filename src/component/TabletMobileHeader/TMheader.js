import React, { useState } from "react";
import "./TMheader.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";

import CallIcon from "@mui/icons-material/Call";
import SideMenubar from "../SideMenubar/SideMenubar";
import Search from "./../../pages/Search/Search"

export default function TMheader() {
  
   
  return (
    <div className="main-tablet-header">
      <div className="container-tablet-fluid">
        <div className="main-header-tablet-content ">
          <div className="main-header-tablet__right col-1  right">
              <SideMenubar />
          </div>
          
          <div className="main-header-tablet__left col-11 left">
            <Search />
            <ShoppingCartIcon fontSize="large" sx={{ color: "#00539B" }} className="shop-icon"/>
            <RequestQuoteIcon fontSize="large" sx={{ color: "#00539B" }} className="qoute-icon"/>
            
            <CallIcon
              fontSize="large"
              sx={{ color: "#00539B" }}
              className="call-icon"
            />
            <hr />

            
           
                        
            
          </div>
          
          
        </div>
      </div>
    </div>
  );
}
