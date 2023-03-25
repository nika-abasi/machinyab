import React,{useState} from "react";
import './ProductList.css'
import ProductsCardV from "../Cards/ProductsCardV";
import ProductCard from "../Cards/ProductCard";


export default function ProductList({products,isDetailedView,addProductToCart}) {

//   const [compareItems, setCompareItems] = useState([]);
// let compareBasket=[]

// const addProductToCart=(productId)=>{
//   let mainProduct=products.find(product=>{
//     return productId === product.id
//   })
//   // console.log("main",mainProduct);

//   setCompareItems(prevItems=>{

//   return {
      
//       compareBasket: [{...prevItems.compareBasket, mainProduct}]
//     } 

// }
   
    
//   )
//   // ;console.log("main", compareItems);
// }
  
  



  return (
    <div className="products-detail-box">
       {isDetailedView ? ( <ul className="list-data ">
        {products.map((product, index) => (
          
          <li key={product._id}>
            {" "}
            <ProductCard {...products[index]} onAddProduct={addProductToCart} />
           
            <a href=""></a>
          </li>
        ))}
      </ul> ) : (<ul className="grid-data ">
        {products.map((product, index) => (
          <li key={product._id}>
            {" "}
            <ProductsCardV {...products[index]} onAddProduct={addProductToCart} />
            <a href=""></a>
          </li>
        ))}
      </ul>)}
     

      
    </div>
  );
}
