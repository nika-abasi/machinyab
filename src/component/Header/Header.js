import React, { useState, useEffect, useRef } from "react";
import Topbar from "../Topbar/Topbar";
import "./Header.css";
import MainHeader from './../../component/MainHeader/MainHeader'
import Navbar from "./../Navbar/Navbar";
import TMheader from "../TabletMobileHeader/TMheader";

export default function Header() {
  

  return (
    <div className="header">
      <Topbar />
      <MainHeader />
      <hr className="hr" />
      <Navbar  />
      <hr className="hr" />
      <TMheader />
    </div>
  );
}
