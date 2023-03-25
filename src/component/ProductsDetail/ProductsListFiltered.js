import React from "react";
import './ProductList.css'
import ProductsCardV from "../Cards/ProductsCardV";
import ProductCard from "../Cards/ProductCard";

export default function ProductList({products,isDetailedView, addProductToCart}) {
  
 
const addProductToCartFiltered=(_id)=>{
  addProductToCart(_id)
}
  
  return (
    <div className="products-detail-box">
       {isDetailedView ? ( <ul className="list-data ">
        {products.map((product, index) => (
          
          <li key={product._id}>
            {" "}
            <ProductCard {...products[index]} onAddProduct={addProductToCartFiltered} />
            <a href=""></a>
          </li>
        ))}
      </ul> ) : (<ul className="grid-data ">
        {products.map((product, index) => (
          <li key={product._id}>
            {" "}
            <ProductsCardV {...products[index]} onAddProduct={addProductToCartFiltered} />
            <a href=""></a>
          </li>
        ))}
      </ul>)}
      

      
    </div>
  );
}
