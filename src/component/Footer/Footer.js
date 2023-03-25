import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faRss} from '@fortawesome/free-solid-svg-icons'
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from "@mui/material";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-widgets">
          <div className="social-app-row ">
            <ul>
                <li>
                  <a href=""><FontAwesomeIcon icon={faRss} size={"1x"} color={" #fff"} className="rss"/></a>
                </li>
                <li>
                  <a href=""><FontAwesomeIcon icon={faYoutube} size={"1x"} color={" #fff"}className="youtube"/></a>
                </li>  
                <li>
                  <a href=""><FontAwesomeIcon icon={faInstagram} size={"1x"} color={" #fff"} className="instagram"/></a>
                </li>                   
                <li>
                 <a href=""><TwitterIcon fontSize="large" sx={{ color: " #fff"}}   className="twitter"/></a> 
                </li>
                <li>
                  <a href=""><img src="/images/facebook.svg" alt=""  className="facebook"/>
                 </a>
                </li>
             </ul>
          </div>
          <div className="footer-links-row col-8">
            <ul >
              <li><Link to="">درباره ما</Link></li>
              <li><Link to=""> تماس با ما</Link></li>
              <li><Link to=""> آدرس دفتر</Link></li>
              <li><Link to="">خدمات</Link></li>
              <li><Link to="">شزایط و ضوابط </Link></li>
            </ul> 
            <ul className="row-2 col-6"> 
              <li className="item-6"><Link to="">درخواست مشاوره</Link></li>
              <li className="item-7"><Link to="">درخواست کاتالوگ</Link></li>
              <li className="item-8"><Link to="">سئوالات متداول </Link></li>
            </ul>
          </div>
          <div className="more-info-row col-6">نام شرکت</div>
          <div className="footer__copyright">
            <span className="footer__copyright-text">
              کلیه حقوق برای ............ محفوظ است.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
