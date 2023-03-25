import React from 'react'
import './ProductsCardV.css'
import Tooltip from '@mui/material/Tooltip';
import CompareIcon from "@mui/icons-material/Compare";
import ShareIcon from '@mui/icons-material/Share';



export default function ProductsCardV({  productCode,  productTitle,  TagNo,  manufacturer,  deliveryTime,  availableQty,  price,onAddProduct}) {

    const clickHandler= (id) =>{
  
        onAddProduct(id) 
        
      }
  return (
    <div className="card-container col-lg-11">
        <div className="card-img-left">
            <img src="/images/test2.jfif" alt="" />
        </div>
        <div className="card-body-content">
            <div className="card-body-headline">
                 <a href=""><h4>{productTitle}</h4></a>
                 <h5>{TagNo}</h5>
            </div>   
            <table className='table table-borderless table__height'>
                <tbody>
                    <tr >
                        <td > {productCode}</td>
                        <td className='font-weight'> :کد کالا</td>
                    </tr>
                    <tr >
                        <td> {manufacturer}</td>
                        <td className='font-weight'> :سازنده قطعه</td>
                    </tr>
                    <tr>
                        <td> {deliveryTime}</td>
                        <td className='font-weight'> :زمان تحویل </td>
                    </tr>
                </tbody>
            </table>
        </div>  
        <div className="tr-btns">
             <Tooltip title="مقایسه">
                <button className="compare(-icon-btn"><CompareIcon sx={{color:"#EBAE1F",fontSize: 25}}  onClick={()=>clickHandler()}/></button>
             </Tooltip>
             <Tooltip title="اشتراک محصول">
                <button className="compare-icon-btn"><ShareIcon sx={{color:"#EBAE1F",fontSize: 25}}/></button>
              </Tooltip>  
                 
              
        </div>
         
        <div className="product-aditional-info">
                
                <div className=" product-price-grid ">{price}$</div>
        </div>
        <div className="actione-wrapper">
                <div className="product-item-inner">
                   
                    <div className="product-item-qty"> 
                        <label htmlFor="product-qty" ></label>
                        <input type="number"  id='product-qty' 
                    className="qty  product-qty-input"  data-default-qty="1"  defaultValue="1" />
                    </div>
                    <div className='product-btn-grid'>
                        <a href="#" className="btn btn-primary btn-m active" role="button" aria-pressed="true">سبد خرید  +</a>
                        <a href="#" className="btn btn-secondary btn-m active" role="button" aria-pressed="true"> ارسال سفارش</a>
                    </div>
                
                </div>
        </div>
    </div>
  )
}

