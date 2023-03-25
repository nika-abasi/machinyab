import React from 'react'
import './Breadcrumb.css'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';



export default function Breadcrumb() {
  return (
    <section className="breadcrumb">
      <div className="container">
        <div className="breadcrumb__content">
          <div className="breadcrumb__home-content-icon">
            <i className="fas fa-home breadcrumb__home-icon"></i>
          </div>
          <ul className="breadcrumb__list">
           
              <li className="breadcrumb__item" >
                <Link to='/' className='breadcrumb__home-icon'><HomeIcon
                 style={{color: '#00539B'}} sx={{ "& :hover": { color: "#EBAE1F" } }}/></Link>
                <Link to='' className="breadcrumb__link" style={{textDecoration: 'none'}}>
                     <span className='item-link'>قطعات الکتریکی</span>
                </Link>
                <Link to='' className="breadcrumb__link" style={{textDecoration: 'none'}}>
                     <span className='item-link'>قطعات الکتریکی</span>
                </Link>
              </li>
       
          </ul>
        </div>
      </div>
    </section>
  )
}
