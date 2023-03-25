import React ,{useState} from 'react'
import './ListGrid.css'
import styled from "styled-components";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import { Tooltip } from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


 const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
      "& .MuiToggleButtonGroup-grouped": {
        width: 45,
        height: 45,
      },
    }));

   
    
export default function ListGrid({ProductsData,openListHandler,showList,handleAlignment,currentView,asumptionProductOrderHandler,titleSortHandler,newProductsSortHandler,usedProductsSortHandler,availableProductsSortHandler,brandSortHandler,maxSoledProductsHandler,sortedPriceHandler,setCondition}) {
   
    const [statusTitle, setStatusTitle] = useState("مرتب سازی بر اساس ");
    const [products, setProducts] = useState([]);

    const statusTitleChangeHandler = (event) => {
        setStatusTitle(event.target.textContent);
      };

   
      

  
      
  return (
   
     <>
     <StyledToggleButtonGroup
            value={currentView}
            exclusive
             onChange={handleAlignment}
            aria-label="text alignment"
            color="primary"
          >
            <ToggleButton
              value="list"
              aria-label="left aligned"
              sx={{ border: "none", background: "white" }}
            >
              <Tooltip title="List">
                <ViewListIcon sx={{ fontSize: 40 }} />
              </Tooltip>
            </ToggleButton>

            <ToggleButton
              value="grid"
              aria-label="left aligned"
              sx={{ border: "none", background: "white" }}
            >
              <Tooltip title="grid">
                <ViewModuleIcon sx={{ fontSize: 40 }} />
              </Tooltip>
            </ToggleButton>
          </StyledToggleButtonGroup>

          <div className="products-top-bar__selection" onClick={openListHandler} >
            <span className="products-top-bar__selection-title">
            {statusTitle}

              <KeyboardArrowDownIcon sx={{ color: "#EBAE1F" }} />
            </span>
            {showList ? (
              <ul
                className="products-top-bar__selection-list"
                defaultValue={"Default"}
                onChange={(e) => setCondition(e.target.value)}
              >
                <li
                  value="Default"
                  disabled
                  onClick={(event) => {
                    setCondition("مرتب سازی پیش فرض");
                    statusTitleChangeHandler(event);
                    asumptionProductOrderHandler(event);
                  }}
                >
                  {" "}
                  پیش فرض
                </li>
                <li
                  value="title"
                  onClick={(event) => {
                    setCondition("«نام محصول ");
                    statusTitleChangeHandler(event);
                    titleSortHandler(event);
                  }}
                >
                  نام کالا
                </li>

                <li
                  value="status"
                  onClick={(event) => {
                    setCondition("کالای نو");
                    statusTitleChangeHandler(event);
                    newProductsSortHandler(event);
                  }}
                >
                  فقط کالای نو
                </li>
                <li
                  value="status"
                  onClick={(event) => {
                    setCondition(" کالای دست دوم");
                    statusTitleChangeHandler(event);
                    usedProductsSortHandler(event);
                  }}
                >
                  فقط کالای دست دوم
                </li>
                <li
                  value="price"
                  onClick={(event) => {
                    setCondition("قیمت");
                    statusTitleChangeHandler(event);
                    sortedPriceHandler(event);
                    console.log("sorted");
                  }}
                >
                  قیمت
                </li>
                <li
                  value="availability"
                  onClick={(event) => {
                    setCondition("کالای موجود  ");
                    statusTitleChangeHandler(event);
                    availableProductsSortHandler(event);
                    console.log("clicked");
                  }}
                >
                  کالای موجود
                </li>
                <li
                  value="brand"
                  onClick={(event) => {
                    setCondition(" برند  ");
                    statusTitleChangeHandler(event);
                    brandSortHandler(event);
                  }}
                >
                  برند
                </li>
                <li
                  value="max-order"
                  onClick={(event) => {
                    setCondition("بیشترین سفارشات   ");
                    statusTitleChangeHandler(event);
                    maxSoledProductsHandler(event);
                  }}
                >
                  بیشترین سفارش
                </li>
              </ul>
            ) : null}
          </div>
     </>
          

      

  )
}
