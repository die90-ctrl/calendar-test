"use client"

import React, { useState } from "react";
import DatePicker, {DateObject} from "react-multi-date-picker";
import InputIcon from "react-multi-date-picker/components/input_icon"
import "react-multi-date-picker/styles/colors/green.css";

const RangeDatePickerComponent = () => {
  const [values, setValues] = useState([
    new DateObject().subtract(4, "days"),
    new DateObject().add(4, "days")
  ])

  // const handleDateChange = (dates: any) => {
  //   if (dates && dates.length === 2){
  //     setRange({start: dates[0], end: dates[1]});
  //   }
  // }

  return(
    <div>
      <DatePicker
        value={values}
        onChange={setValues}
        range
        rangeHover
        className="green"
        numberOfMonths={2}
        showOtherDays
        render={<InputIcon/>}
        dateSeparator=" - "
      >
        <button style={{ margin: "5px", border: "none" }}>OK</button>
      </DatePicker>
    </div>
  );
}

export default RangeDatePickerComponent