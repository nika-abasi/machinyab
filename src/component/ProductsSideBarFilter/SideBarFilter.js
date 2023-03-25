import React, { useState,useEffect,useContext } from "react";
import "./SideBarFilter.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import "./../RangeBarFiltering/MultiRangeSlider.css";
import { Link ,useNavigate,createSearchParams} from "react-router-dom";
import AuthContext from "./../Context/AuthContext";


export default function SideBarFilter({
  minValue,
  maxValue,
  setMinValue,
  setMaxValue,
  setCondition,
  newRangeHandler,
  products,
  brands,
  onFilterChange,
  handleMotorCatg,
  categories,
  filteredBrands,
  filteredCategories,
  removeProductFromCart,
  onClearProducts
}) 


{
 
  const [expanded, setExpanded] = useState(false);
  const [toggleName,setName]=useState(false)

 
 const contextData = useContext(AuthContext)
//  const navigate = useNavigate();
 
 
 const selectedItem=contextData.newCompareList
console.log("this",selectedItem);
//  const mySelected=contextData.newCompareList
// let params = new URLSearchParams();
//  params.append(mySelected, 'val1');




//  let navigate = useNavigate(); 
//  const routeChange = () =>{ 
//   navigate({
//     pathname: '/Compare-info/compare',
//     // search: `?${createSearchParams(params)}`,
//   });
//  }
 


// useEffect(() => {
//   localStorage.setItem('items', JSON.stringify(selectedItem));
// }, [selectedItem]);

//  console.log('select',ArrayData);
//////////////////////////////////
 const slicedBrands= brands.filter((item, index) => index < 6)
//  console.log("b",slicedBrands);

const [displayProduct, setDisplayProduct] = useState(products)
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  
const showMoreHandler=()=>{

  setName(!toggleName)
 
}
 

const removeHandler=(item)=>{
  removeProductFromCart(item)

}

const clearTotalProducts=()=>{
  onClearProducts()
}


  return (
    <>
    
      <div className="sidebar main ">
        <div className="block-title">
          <span>محدود کردن نتایج بر اساس</span>
        </div>
        <div className="filter-options">
          <div className="filter-options-item active">
            <div>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    sx={{
                      width: "33%",
                      flexShrink: 0,
                      fontSize: 20,
                      marginRight: 2,
                    }}
                  >
                    قیمت
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="range-slider">
                    <div className="App">
                      <div className="multi-range-slider-container">
                        <MultiRangeSlider
                          min={0}
                          max={90000}
                          step={200}
                          className="direction"
                          minValue={minValue}
                          maxValue={maxValue}
                          ruler="none"
                          label="false"
                          // range={range}
                          onInput={(e: ChangeResult) => {
                            setMinValue(e.minValue);
                            setMaxValue(e.maxValue);
                          }}
                          onChange={(e: ChangeResult) => {
                            setMinValue(e.minValue);
                            setMaxValue(e.maxValue);
                           
                          }}
                        ></MultiRangeSlider>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "25px",
                          }}
                        >
                          {/* <div style={{ margin: '10px' }}>onInput:</div>  */}
                          <div style={{ marginTop: "-70px" }}>${maxValue}</div>
                          <div style={{ marginTop: "-70px" }}>${minValue}</div>
                        </div>
                        <div className="action-row">
                          <button
                            onClick={() => {
                              setCondition("رنج قیمت");
                              newRangeHandler();

                            }}
                          >
                            ثبت
                          </button>
                          <div className="totalQty">
                            {products.length} ایتم یافت شد
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography
                    sx={{
                      width: "33%",
                      flexShrink: 0,
                      fontSize: 20,
                      marginRight: 2,
                    }}
                  >
                    برندها
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {toggleName ? 
                  <div className="selection-box">
                    {brands.map((brand,index) => (
                     
                      <FormGroup
                        sx={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                        key={brand.id}
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              defaultChecked={false}
                              onChange={onFilterChange }
                              value={brand}
                             
                            />
                          }
                          label={brand}
                        />
                         
                         <span className="count-badge" >{filteredBrands[index].length}</span>  
                         
                      </FormGroup>
                    ))}
                  </div> :
                   <div className="selection-box">
                    {slicedBrands.map((brand,index) => (
                     
                      <FormGroup
                        sx={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                        key={brand._id}
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              defaultChecked={false}
                              onChange={onFilterChange }
                              value={brand}
                             
                            />
                          }
                          label={brand}
                        />
                         
                         <span className="count-badge" >{filteredBrands[index].length}</span>  
                         
                      </FormGroup>
                    ))}
                  </div>}
                  {/* <div className="selection-box">
                    {slicedBrands.map((brand,index) => (
                     
                      <FormGroup
                        sx={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                        key={brand}
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              defaultChecked={false}
                              onChange={onFilterChange }
                              value={brand}
                             
                            />
                          }
                          label={brand}
                        />
                         
                         <span className="count-badge" >{filteredBrands[index].length}</span>  
                         
                      </FormGroup>
                    ))}
                  </div> */}
                  <button className="more-filter" onClick={showMoreHandler}
                  > {toggleName ? "موارد کمتر " : "موارد بیشتر "}</button>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography sx={{
                      width: "33%",
                      flexShrink: 0,
                      fontSize: 20,
                      marginRight: 2,
                    }}>
                  زیرمجموعه
                  </Typography>
                  
                </AccordionSummary>
                <AccordionDetails>
                <div className="selection-box">
                    {categories.map((category,index) => (
                      <FormGroup
                        sx={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                        key={category.id}
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              defaultChecked={false}
                              onChange={handleMotorCatg}
                              value={category}
                             
                            />
                          }
                          label={category}
                        />
                        <span className="count-badge">{filteredCategories[index].length}</span>
                      </FormGroup>
                    ))}
                  </div>
                  
                </AccordionDetails>
              </Accordion>
              <Accordion
               expanded={true}
                // expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
                sx={{ marginTop: -1}}
              >
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                > 
                  <Typography component="span" sx={{ 
                    width: "100%",
                      flexShrink: 0,
                      fontSize: 20,
                      marginRight: 2, 
                  
                      }}>
                    مقایسه محصولات
                     <hr style={{marginRight:-32}}/> 
                     {contextData.newCompareList.length ? "" : <p style={{fontSize:15, marginTop: -15,marginBottom: "-15px"}}>محصولی برای مقایسه انتخاب نشده است 
                    </p> }
                      
                  </Typography>
                

                </AccordionSummary> 
                <AccordionDetails>
                  <div>
                  {contextData.newCompareList.map((item,index)=>(
                     <>
                     
                     <div className="compare-item" key={item.id}>
                      <button className="close-icon-btn"><CloseOutlinedIcon onClick={()=>removeHandler()} /></button>
                        <span>{item.name}</span>
                       <span>{item.partNo}</span> 
                    
                      
                    </div>
                     </>
                    
                    
                  ))}
                   {contextData.newCompareList.length ? <div className="compare-product-btns">
                     
                          {/* <button   className="compare-btn"
                          onClick={()=>  setProductsToCompare()                             
                          } >

                           </button>  */}
                          <Link to="/category-info/compare" 
                            state={selectedItem}
                        className="compare-link-btn"  >مقایسه</Link >
                            
                          <button className="clear-btn" onClick={()=>{
                            clearTotalProducts()
                          
                          }}>حذف همه</button>
                    </div> : ""}
                   
                 
                   
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar additional "></div>
    </>
  );
}
