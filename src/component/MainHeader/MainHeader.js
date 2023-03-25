import React, { useState, useEffect } from "react";
import "./MainHeader.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { blue } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";


const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: "#00539B",
    },
  },
});
export default function MainHeader() {

  const [searchValue, setSearchValue] = useState('')
  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0);
  const navigate = useNavigate()

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  const goToSearchPage = () => {
    navigate(`/search/${searchValue}`)
  }

  const listenToScroll = () => {
    let heightToHideFrom = 40;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <div className={`main-header ${!isVisible ? 'fix' : 'hide'}`} height={height}>
      
        <div className={`main-header-content ${!isVisible ? 'change-height' : 'hide'}`} height={height}>
          <div className="main-header__right col-md-3 right">
            <ShoppingCartIcon fontSize="large" sx={{ color: "#00539B" }} />
            <RequestQuoteIcon fontSize="large" sx={{ color: "#00539B" }} />
            <ul>
              <li>
                <a href="">ورود | ثبت نام</a>
              </li>
            </ul>
          </div>
          <div className="main-header__centre col-7 center">
            <nav className="navbar ">
              <form className="container-fluid">
                <div className={`input-group  ${!isVisible ? 'scroll-margin' : 'hide'}`}height={height}>
                  <input
                    type="text"
                    className="form-control "
                    placeholder="Search keyword, Model or Item"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={(event) => setSearchValue(event.target.value)}
                    value={searchValue}
                  />
                  <button 
                  className="search-btn" 
                  onClick={goToSearchPage}
                 
                 >
                    <SearchIcon fontSize="large" sx={{ color: "#00539B" }} />{" "}
                  </button>
                </div>
              </form>
            </nav>
          </div>
          <div className={`main-header__left col-2 left ${!isVisible ? 'hideLogo' : 'null'}`}  height={height}>
            <img src="" alt="" className="main-header-logo" />
          </div>
          <div className={`main-bar__phone ${!isVisible ? 'showTel' : 'null'}`}  height={height}>
                <span>021-888555189</span>
                <a href="">تماس با ما</a>
               
          </div>
        </div>
      
    </div>
  );
}
