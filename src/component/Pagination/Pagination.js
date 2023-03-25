import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import "./Pagination.css";

export default function Pagination({
  items,
  itemsCount,
  pathname,
  setShownCourses,
}) {
  const [pagesCount, setPagesCount] = useState(null); // 3
  const { page } = useParams();

  useEffect(() => {
    let endIndex = itemsCount * page;
    let startIndex = endIndex - itemsCount;
    let paginatedItems = items.slice(startIndex, endIndex);
    setShownCourses(paginatedItems);

    let pagesNumber = Math.ceil(items.length / itemsCount);
    setPagesCount(pagesNumber);
  }, [page, items]);

  return (
    <div className="courses-pagination">
      <ul className="courses__pagination-list">
        {Array(pagesCount)
          .fill(0)
          .map((item, index) => (
            <li className="courses__pagination-item" key={item}>
              {index + 1 === Number(page) ? (
                <Link
                  to={`${pathname}/${index + 1}`}
                  className="courses__pagination-link courses__pagination-link--active"
                >
                  {index + 1}
                </Link>
              ) : (
                <Link
                  to={`${pathname}/${index + 1}`}
                  className="courses__pagination-link"
                >
                  {index + 1}
                </Link>
              )}
            </li>
          ))}

       
      </ul>
    </div>
  );
}


// import  React,{useEffect,useState} from 'react';
// import { Link, useParams } from 'react-router-dom'
// import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// import './Pagination.css'

// export default function Pagination({items,
//   itemsCount,
//   pathname,
//   setShownCourses,}) {
//   const [todos, setTodos] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
  

//   let pageSize = 2;
//   let pagesNumbers;

//   // useEffect(() => {
//   //   fetch("https://jsonplaceholder.typicode.com/todos")
//   //     .then((res) => res.json())
//   //     .then((datas) => {
//   //       setTodos(datas);
//   //       let endIndex = pageSize * currentPage;
//   //       let startIndex = endIndex - pageSize;
//   //       let allShownTodos = datas.slice(startIndex, endIndex);
//   //       setShownCourses(allShownTodos);
//   //     });
//   // }, []);

//   // useEffect(() => {
//   //   let endIndex = pageSize * currentPage;
//   //   let startIndex = endIndex - pageSize;
//   //   let allShownTodos = items.slice(startIndex, endIndex);
//   //   setShownCourses(allShownTodos);
//   // }, [currentPage]);

//   // const changePaginate = (newPage) => {
//   //   setCurrentPage(newPage);
//   // };
//   const [pagesCount, setPagesCount] = useState(null); // 3
//   const { page } = useParams();

//   useEffect(() => {
//     let endIndex = itemsCount * page;
//     let startIndex = endIndex - itemsCount;
//     let paginatedItems = items.slice(startIndex, endIndex);
//     setShownCourses(paginatedItems);

//     let pagesNumber = Math.ceil(items.length / itemsCount);
//     setPagesCount(pagesNumber);
//   }, [page, items]);

//   const pagesCount = Math.ceil(todos.length / pageSize);
//   pagesNumbers = Array.from(Array(pagesCount).keys());
//   return (
//     <div className="courses-pagination">
//     <ul className="courses__pagination-list">
//       {Array(pagesCount)
//         .fill(0)
//         .map((item, index) => (
//           <li className="courses__pagination-item" key={item._id}>
//             {index + 1 === Number(page) ? (
//               <Link
//                 to={`${pathname}/${index + 1}`}
//                 className="courses__pagination-link courses__pagination-link--active"
//               >
//                 {index + 1}
//               </Link>
//             ) : (
//               <Link
//                 to={`${pathname}/${index + 1}`}
//                 className="courses__pagination-link"
//               >
//                 {index + 1}
//               </Link>
//             )}
//           </li>
//         ))}

//     </ul>
//   </div>
// );
// }
