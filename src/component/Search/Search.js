// import React,{useState} from 'react'
// import './Search.css'
// import SearchIcon from "@mui/icons-material/Search";
// import CloseIcon from "@mui/icons-material/Close";

// export default function Search() {
//     const [isActive, setIsActive] = useState();

//   const openSearchHandler = (event) => {
//     console.log('ok');
//     setIsActive((current) => !current);}
//   return (
//     <div className="search-icon">
//               <button onClick={openSearchHandler} className="search-btn-icon">
//                 {isActive ? (
//                   <CloseIcon fontSize="large" sx={{ color: "#00539B" }} />
//                 ) : (
//                   <SearchIcon fontSize="large" sx={{ color: "#00539B" }} />
//                 )}
//               </button>
//               {isActive && (
//                 <div className="input-group">
//                   <input
//                     type="text"
//                     className="form-control "
//                     placeholder="Search keyword, Model or Item"
//                     aria-label="Username"
//                     aria-describedby="basic-addon1"
//                   />
//                   <button className="search-btn">
//                     <SearchIcon fontSize="large" sx={{ color: "#00539B" }} />{" "}
//                   </button>
//                 </div>
//               )}
            
//     </div>
//   )
// }
