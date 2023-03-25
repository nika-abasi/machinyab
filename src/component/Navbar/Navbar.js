import React, { useState, useEffect } from "react";
import "./Navbar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0);
  const [allMenus, setAllMenus] = useState([]);
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:4000/v1/menus`)
      .then((res) => res.json())
      .then((menus) => {
        setAllMenus(menus);
      });
  }, []);
  // console.log("allMenus", allMenus);

  return (
    <div
      className={`main-header-nav ${!isVisible ? "show" : "none"}`}
      height={height}
    >
      <div className="container-fluid-nav">
        <div className="main-nav-content-nav">
          <div className="main-nav-right col-4">
            <ul id="menu">
              {allMenus.slice(0, 3).map((menu, index) => (
                <li className="parent" key={menu._id}>
                  <Link to="/category-info">{menu.title}</Link>
                  <KeyboardArrowDownIcon sx={{ color: "#EBAE1F" }} />
                  <ul className="child">
                    {menu.submenus.map((submenu) => (
                      <li className="parent" key={submenu._id}>
                        <a href="#">{submenu.title}</a>
                        <ul className="child level-1 ">
                          <li>
                            <a href="#">car</a>
                          </li>
                          <li>
                            <a href="#">Bike Race</a>
                          </li>
                          <li>
                            <a href="#">Fishing</a>
                          </li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className="main-nav-centre col-4">
            <div className="request-quote ">
              <a href=""> ارسال درخواست</a>
            </div>
            <div
              className={`main-header__left_nav ${
                !isVisible ? "visibleLogo" : "none"
              }`}
              height={height}
            >
              <img src="" alt="" className="main-header-logo-nav" />
            </div>
          </div>
          <div className="main-nav-left col-4">
            <ul id="menu">
              {allMenus.slice(3, 6).map((leftMenu, index) => (
                <li className="parent" key={leftMenu._id}>
                  <Link to="/category-info">{leftMenu.title}</Link>
                  <KeyboardArrowDownIcon sx={{ color: "#EBAE1F" }} />
                  <ul className="child">
                    {leftMenu.submenus.map((submenu2) => (
                      <li className="parent" key={submenu2._id}>
                        <Link to="#">{submenu2.title}</Link>
                        <ul className="child level-1 ">
                        
                           <li>
                            <a href="#">{submenu2.title}</a>
                          </li>
                      
                           
                         
                          
                       <li>
                            <a href="#">Bike Race</a>
                          </li>
                          <li>
                            <a href="#">Fishing</a>
                          </li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
