// import React, { useState, useEffect } from "react";
// import "./SortProducts.css";

// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// const ProductsData = [
//   {
//     id: 1,
//     productCode: "El1401200",
//     productTitle: "Transmitter",
//     TagNo: "SE4155",
//     manufacturer: "Sprint",
//     productTechnicalInfo: "powe2000 -pressure20",
//     status: "not available",
//     deliveryTime: "3weeks",
//     availableQty: 3,
//     price: 200,
//     subIndusry: "oil & gas",
//     classification: "instrument",
//     productCondition: "used",
//     soled: 0,
//   },
//   {
//     id: 2,
//     productCode: "El1401200",
//     productTitle: "Azobin",
//     TagNo: "SE4155",
//     manufacturer: "Figma",
//     productTechnicalInfo: "powe2000 -pressure20",
//     status: "available",
//     deliveryTime: "3weeks",
//     availableQty: 13,
//     price: 200,
//     subIndusry: "oil & gas",
//     classification: "instrument",
//     productCondition: "new",
//     soled: 0,
//   },
//   {
//     id: 3,
//     productCode: "Gl1401200",
//     productTitle: "Zigma",
//     TagNo: "gE4155",
//     manufacturer: "LIMA",
//     productTechnicalInfo: "Gowe2000 -pressure20",
//     status: "available",
//     deliveryTime: "1weeks",
//     availableQty: 1,
//     price: 0,
//     subIndusry: "Agriculture",
//     classification: "tools",
//     productCondition: "new",
//     soled: 0,
//   },

//   {
//     id: 4,
//     productCode: "El1401200",
//     productTitle: "pressure meter",
//     TagNo: "f4155",
//     manufacturer: "Sprint",
//     productTechnicalInfo: "fwe2000 -pressure20",
//     status: "not available",
//     deliveryTime: "2weeks",
//     availableQty: 0,
//     price: 2000,
//     subIndusry: "mtal",
//     classification: "instrument",
//     productCondition: "used",
//     soled: 1,
//   },
//   {
//     id: 5,
//     productCode: "Gl1401200",
//     productTitle: "navar",
//     TagNo: "gE4155",
//     manufacturer: "anahita",
//     productTechnicalInfo: "Gowe2000 -pressure20",
//     status: "available",
//     deliveryTime: "1weeks",
//     availableQty: 1,
//     price: 50000,
//     subIndusry: "Agriculture",
//     classification: "tools",
//     productCondition: "New",
//     soled: 0,
//   },
// ];
// export default function SortProducts({}) {
//   const [showList,setShowList]=useState('false')
//   const [products, setProducts] = useState([]);
//   const [status, setStatus] = useState("default");
//   const [statusTitle, setStatusTitle] = useState("مرتب سازی بر اساس ");

//   const statusTitleChangeHandler = (event) => {
//     setStatusTitle(event.target.textContent);
//   };

//   const openListHandler=()=>{
//     setShowList('true')
//     console.log(showList);
//   }

//   const asumptionProductOrderHandler = () => {
//     const sortedIdProducts = [...ProductsData].sort((a, b) => a.id - b.id);
//     setProducts(sortedIdProducts);
//     console.log(sortedIdProducts);
//   };

//   const titleSortHandler = () => {
//     const sortedTitle = [...ProductsData].sort((a, b) => {
//       if (a.productTitle.toLowerCase() < b.productTitle.toLowerCase())
//         return -1;
//       if (a.productTitle.toLowerCase() > b.productTitle.toLowerCase()) return 1;
//       return 0;
//     });
//     setProducts(sortedTitle);
//     console.log(sortedTitle);
//   };

//   const newProductsSortHandler = () => {
//     const filteredNewProducts = [...ProductsData]
//       .filter((product) => product.productCondition.toLowerCase() === "new")
//       .sort((a, b) => a.productTitle.localeCompare(b.productTitle));

//     setProducts(filteredNewProducts);
//     console.log(filteredNewProducts);
//   };
//   const usedProductsSortHandler = () => {
//     const filteredUsedProducts = [...ProductsData]
//       .filter((product) => product.productCondition.toLowerCase() === "used")
//       .sort((a, b) => a.productTitle.localeCompare(b.productTitle));

//     setProducts(filteredUsedProducts);
//     console.log(filteredUsedProducts);
//   };

//   const sortedPriceHandler = () => {
//     const sortedPrice = [...ProductsData].sort((a, b) => a.price - b.price);
//     setProducts(sortedPrice);
//     console.log(sortedPrice);
//   };
//   const availableProductsSortHandler = () => {
//     const filteredAvailableProducts = [...ProductsData]
//       .filter((product) => product.status.toLowerCase() === "available")
//       .sort((a, b) => a.productTitle.localeCompare(b.productTitle));

//     setProducts(filteredAvailableProducts);
//     console.log(filteredAvailableProducts);
//   };
//   const brandSortHandler = () => {
//     const sortedByBrand = [...ProductsData].sort((a, b) => {
//       if (a.manufacturer.toLowerCase() < b.manufacturer.toLowerCase())
//         return -1;
//       if (a.manufacturer.toLowerCase() > b.manufacturer.toLowerCase()) return 1;
//       return 0;
//     });
//     setProducts(sortedByBrand);
//     console.log(sortedByBrand);
//   };

//   const maxSoledProductsHandler = () => {
//     const maxSoled = [...ProductsData].sort((a, b) => b.soled - a.soled);
//     setProducts(maxSoled);
//     console.log(maxSoled);
//   };

//   console.log("filter",products);
//   return (
//     <div className="products-top-bar__selection"   >
//       <div className="products-top-bar__selection-title" onClick={openListHandler}>
//         {statusTitle}
//         <KeyboardArrowDownIcon sx={{ color: "#EBAE1F" }}
       
//         />
//       </div>
//       {showList ? (<ul
//         className="products-top-bar__selection-list"
//         defaultValue={"Default"}
//         onChange={(e) => setStatus(e.target.value)}
//       >
//         <li
//           value="Default"
//           disabled
//           onClick={(event) => {
//             setStatus("مرتب سازی پیش فرض");
//             statusTitleChangeHandler(event);
//             asumptionProductOrderHandler(event);
//           }}
//         >
//           {" "}
//           پیش فرض
//         </li>
//         <li
//           value="title"
//           onClick={(event) => {
//             setStatus("«نام محصول ");
//             statusTitleChangeHandler(event);
//             titleSortHandler(event);
//           }}
//         >
//           نام کالا
//         </li>

//         <li
//           value="status"
//           onClick={(event) => {
//             setStatus("کالای نو");
//             statusTitleChangeHandler(event);
//             newProductsSortHandler(event);
//           }}
//         >
//           فقط کالای نو
//         </li>
//         <li
//           value="status"
//           onClick={(event) => {
//             setStatus(" کالای دست دوم");
//             statusTitleChangeHandler(event);
//             usedProductsSortHandler(event);
//           }}
//         >
//           فقط کالای دست دوم
//         </li>
//         <li
//           value="price"
//           onClick={(event) => {
//             setStatus("قیمت");
//             statusTitleChangeHandler(event);
//             sortedPriceHandler(event);
//           }}
//         >
//           قیمت
//         </li>
//         <li
//           value="availability"
//           onClick={(event) => {
//             setStatus("کالای موجود  ");
//             statusTitleChangeHandler(event);
//             availableProductsSortHandler(event);
//           }}
//         >
//           کالای موجود
//         </li>
//         <li
//           value="brand"
//           onClick={(event) => {
//             setStatus(" برند  ");
//             statusTitleChangeHandler(event);
//             brandSortHandler(event);
//           }}
//         >
//           برند
//         </li>
//         <li
//           value="max-order"
//           onClick={(event) => {
//             setStatus("بیشترین سفارشات   ");
//             statusTitleChangeHandler(event);
//             maxSoledProductsHandler(event);
//           }}
//         >
//           بیشترین سفارش
//         </li>
//       </ul>) : ''}
      
//     </div>
//   );
// }
