"use client"

import React, { useState } from "react";
import DatePicker, {DateObject} from "react-multi-date-picker";
import InputIcon from "react-multi-date-picker/components/input_icon"
import "react-multi-date-picker/styles/colors/green.css";
import "./dateRange.scss"

const RangeDatePickerComponent = () => {
  const [values, setValues] = useState([
    new DateObject().subtract(4, "days"),
    new DateObject().add(4, "days")
  ]);

  const [range, setRange] = useState({start: null, end: null});

  const handleDateChange = (dates: any) => {
    setValues(dates);
    if (dates && dates.length === 2){
      setRange({start: dates[0], end: dates[1]});
    } else {
      setRange({ start: null, end: null });
    }
  }

  return(
    <div>
      <DatePicker
        value={values}
        format="MM/DD/YYYY"
        onChange={handleDateChange}
        range
        rangeHover
        className="green"
        numberOfMonths={2}
        showOtherDays
        render={<InputIcon/>}
        dateSeparator=" - "
        inputClass="rmdp-input"
        >
          <div className="datepicker_options">
            <p className="datepicker_date">
              {range.start ? range.start.format("MM/DD/YYYY") : " "} -{" "}
              {range.end ? range.end.format("MM/DD/YYYY") : " "}
            </p>
            <button className="datepicker_btn_cancel">Cancel</button>
            <button className="datepicker_btn_apply">Apply</button>
          </div>
      </DatePicker>
    </div>
  );
}

export default RangeDatePickerComponent