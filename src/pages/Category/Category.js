import React from 'react'
import './Category.css'
import Header from './../../component/Header/Header'
import Breadcrumb from '../../component/Breadcrumb/Breadcrumb'
import ProductsDetail from '../../component/ProductsDetail/ProductsDetail'
import Footer from './../../component/Footer/Footer'

export default function Category() {
  return (
    <>
    <div className="main-row-header">
      <Header />
    </div>  
    <div className="breadcrumb-container">
      <Breadcrumb />
    </div>
    
    
     <div className="page-main">
       
       <div className="category-view">
         <div className="category-listing">
           <div className="category-info-top">
            <div className="category-image"></div>
            <div className="category-info__container ">
              <span className='category-info-title'><h3>title</h3></span>
              <span className='category-info-text'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde mollitia, accusantium blanditiis placeat inventore soluta maiores aut fugiat laboriosam distinctio excepturi cum asperiores sunt doloribus hic voluptatibus ipsam non dicta?C</p></span>
            </div>
           </div>
       </div>
         
         <ProductsDetail />
       </div>

     </div>
     <div className="category-footer">
       <Footer />
     </div>
    
     
    </>
    
  )
}

