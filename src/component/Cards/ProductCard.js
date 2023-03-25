import { cardActionAreaClasses } from "@mui/material";
import React,{useState} from "react";
import "./ProductCard.css";
import CompareIcon from "@mui/icons-material/Compare";
import ShareIcon from '@mui/icons-material/Share';
import Tooltip from '@mui/material/Tooltip';

export default function ProductCard({
  productCode,
  name,
  TagNo,
  manufacturer,
  deliveryTime,
  availableQty,
  price,
  id,
  onAddProduct
}) {
 
 
  const clickHandler= () =>{
  onAddProduct(id) 
  
}

  return (
    <div className="card-container-list">
      <img src="/images/test2.jfif" alt="" className="card-img-left-list" />
      <div className="card-body-content-list">
        <div className="card-body-headline">
          <a href="">
            <h4>{name}</h4>
          </a>
          <h5>{TagNo}</h5>
        </div>
        <table className="table table-borderless table__height">
          <tbody>
            <tr>
              <td> {productCode}</td>
              <td className="font-weight"> :کد کالا</td>
            </tr>
            <tr>
              <td> {manufacturer}</td>
              <td className="font-weight"> :سازنده قطعه</td>
            </tr>
            <tr>
              <td> {deliveryTime} </td>
              <td className="font-weight"> :زمان تحویل </td>
            </tr>
            
          </tbody>
          
        </table>
        <div className="tr-btns">
             <Tooltip title="مقایسه">
                <button className="compare-icon-btn"><CompareIcon sx={{color:"#EBAE1F",fontSize: 25}}  onClick={()=>clickHandler(id)}/></button>
             </Tooltip>
             <Tooltip title="اشتراک محصول">
                <button className="compare-icon-btn"><ShareIcon sx={{color:"#EBAE1F",fontSize: 25}}/></button>
              </Tooltip>  
                 
              
            </div>
        </div>
      <div className="product-aditional-info-list">
        <div className="product-item-qty-list">
          <label htmlFor="product-qty"></label>
          <input
            type="number"
            id="product-qty"
            className="qty  product-qty-input"
            defaultValue="1"
            data-default-qty="1"
          />
        </div>
      </div>
      <div className="actione-wrapper-list">
        <div className="product-item-inner-list">
          <span className="product-price">{price}$</span>

          <a
            href="#"
            className="btn btn-primary btn-m active"
            role="button"
            aria-pressed="true"
          >
            سبد خرید+
          </a>
          <a
            href="#"
            className="btn btn-secondary btn-m active"
            role="button"
            aria-pressed="true"
          >
            {" "}
            ارسال سفارش
          </a>
        </div>
      </div>
    </div>
  ); 
}
