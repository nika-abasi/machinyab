import React, { useRef, useState,useEffect,usePrevious } from "react";
import { Link } from "react-router-dom";
import "./ProductListTable.css";
import Badge from "react-bootstrap/Badge";

export default function ProductListTable() {

  const [courses, setCourses] = useState([]);
  const secondColumnStart = Math.ceil(courses.length / 2);
console.log(secondColumnStart);

useEffect(() => {
  fetch(`http://localhost:4000/v1/courses`)
    .then((res) => res.json())
    .then((allCourses) => setCourses(allCourses));
   
}, []);
console.log(courses);


  let result = courses.map(({ category }) => category);

  let filteredCategories = [];
 
  result.forEach((item) => {
    let newArr = result.filter((el) => el.toLowerCase() === item.toLowerCase());
    filteredCategories.push(newArr);
    

  });
   console.log("result",result);
  console.log("arr",filteredCategories);

  


  return (
    <div className="product-list-table-container">
      <h3>دستگاه مورد درخواست خود را جستجو نمایید</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
        quisquam? Fugiat, cumque distinctio laudantium corrupti expedita, facere
        voluptatum nulla nobis maiores explicabo magnam tenetur laboriosam
        nesciunt blanditiis repellendus deserunt dolore?
      </p>

      <div className="table-container">
        <div >
          <table className="table table-hover table-bordered rtl ">
            <tbody>
              {courses.slice(0,secondColumnStart).map((product,index)=>(
                <tr className="tr-row" key={product._id}>
                <th style={{ width: "15%" }}>
                  <Badge  pill bg="primary" >
                  {filteredCategories[index].length}
                  </Badge>
                </th>
                <th  style={{ width: "80%"}}>
                  <Link to="" >
                    {product.category}
                  </Link>
                </th>
                   <th style={{ width: "5%" }}>
                  <span style={{ color: "#acacac"}}>{index+100}</span>
                </th>
              </tr>
              ))}

              
            </tbody>
          </table>
        </div>
        
        <div >
          <table className="table table-hover table-bordered rtl ">
            <tbody className="tbody-width">
              {courses.slice(secondColumnStart).map((product,index)=>(
                <tr className="tr-row" key={product._id}>
                  <th style={{ width: "15%" }}>
                  <Badge  pill bg="primary" >
                  {filteredCategories[index].length}
                  </Badge>
                </th>
                
                <th  style={{ width: "80%"}}>
                  <Link to="" >
                    {product.category}
                  </Link>
                </th>
                <th style={{ width: "5%" }}>
                  <span style={{ color: "#acacac"}}>{index+secondColumnStart+100}</span>
                </th>
                
              </tr>
              ))}
              
             
            
            </tbody>
          </table>
        </div>
      </div>
     
    </div>
  );
}
