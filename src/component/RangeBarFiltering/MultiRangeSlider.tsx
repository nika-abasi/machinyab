import React, { useRef, useState ,useEffect} from "react";
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";
import "./MultiRangeSlider.css";

export default function MultiRangeNav({ callback }) {
	
  const [minValue, setMinValue] = useState(25);
  const [maxValue, setMaxValue] = useState(75);
  const [range,setRange]=useState('')

	const min_value = minValue
	const max_value=maxValue
    const range_price=range

  

  
	const handleCallback = () =>
		callback([min_value,max_value,range])
	
 

  
  
  
 
//   function setUserHandler(){
// 	setMinValue(minValue)
// 	setMaxValue(maxValue)
// 	console.log("m",minValue,"mx",maxValue);
	
//   }

  return (
    <div className="App">
      <div className="multi-range-slider-container">
        <MultiRangeSlider
          min={0}
          max={1000}
          className="direction"
          minValue={minValue}
          maxValue={maxValue}
          ruler="none"
          label="false"
		  range={range}
          onInput={(e: ChangeResult) => {
            setMinValue(e.minValue);
            setMaxValue(e.maxValue);
          }}
        //   onChange={setUserValue
        //   }
        ></MultiRangeSlider>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "25px",
          }}
        >
          {/* <div style={{ margin: '10px' }}>onInput:</div>  */}
          <div style={{ marginTop: "-70px" }} >${maxValue}</div>
          <div style={{ marginTop: "-70px" }} >${minValue}</div>
        </div>
          <div className="action-row">
          <button onClick={(e)=>{
			handleCallback(e)

		}}
			>ثبت</button>
          <div className="totalQty">10000 ایتم یافت شد</div>
          
         </div> 
         
      </div>
    </div>
  );
}



{/* <MultiRangeSlider
                      min={0}
                      max={1000}
                      step={0}
                      minValue={minValue}
                      maxValue={maxValue}
                      callback={newRangePrice}
                      callback={maxcallback}
                      callback={mincallback}
                      onInput={(e) => {
                        handleInput(e);
                      }}
                     
                     /> */}
