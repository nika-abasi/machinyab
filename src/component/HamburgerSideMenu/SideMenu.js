import React from "react";
import "./SideMenu.css";
import { slide as Menu } from 'react-burger-menu'
import SortIcon from '@mui/icons-material/Sort';

export default function SideMenu() {
    
  return (
    <div id="outer-container">
      <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <div className="login-btn"  isOpen={ false } >
          <ul>
            <li>
              <a href="">ورود | ثبت نام</a>
            </li>
          </ul>
        </div>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="home" className="menu-item" href="/">
          nemi
        </a>
        <a id="home" className="menu-item" href="/">
          Gdded
        </a>
        <a id="home" className="menu-item" href="/">
          Title
        </a>
       
      </Menu>
      <main id="page-wrap">
        <SortIcon
          className="sort-icon"
          fontSize="large"
          sx={{ color: "#00539B" }}
        />
      </main>
    </div>
  );
}
