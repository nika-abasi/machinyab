import React from "react";
import "./ProductFilters.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function ProductFilters({ onFilterChange, brands,setCondition}) {
  return (
    <div className="selection-box">
      {brands.map((brand) => (
        <FormGroup
          sx={{ flexDirection: "row", justifyContent: "space-between" }}
          key={brand.id}
        >
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked={false}
                 onChange={(event)=>{
                    onFilterChange(event)
                    setCondition("رنج قیمت");
                 }}
                value={brand}
              />
            }
            label={brand}
          />
          <span className="count-badge">(99)</span>
        </FormGroup>
      ))}
    </div>
  );
}
