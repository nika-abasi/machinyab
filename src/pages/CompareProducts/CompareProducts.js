import React,{useContext,useState,useEffect} from 'react'
import {   useLocation,  Link,  Routes,  Route,  useNavigate,} from 'react-router-dom';
import AuthContext from "./../../component/Context/AuthContext"
import { Redirect } from "react-router-dom";
import ProductsCardV from "./../../component/Cards/ProductsCardV"
import './CompareProducts.css'
import Header from './../../component/Header/Header'
import Footer from './../../component/Footer/Footer'
export default function CompareProducts() {
  
   
const[newData,setNewData]=useState([])
const location = useLocation();
const data = location.state


useEffect(() => {
  setNewData(data)

  }, [])


//  console.log("data",newData);
 const navigate = useNavigate();
 


  return (
  <>
  
  <div className="main-row-header">
      <Header />
    </div>  
    <div className="products-compare-box">
    
     
        <ul className="grid-data ">
             {newData && newData.map((item, index) => (
             <li key={item.id}>
                {" "}
                <ProductsCardV {...newData[index]}/> 
                <a href=""></a>
              </li>))}
         </ul>
        {/* <button onClick={() => navigate(-1)}>close</button> */}
    </div>
    <div className="category-footer">
       <Footer />
     </div>
  
  </>
    

   
    
      
           

    
  )
}
