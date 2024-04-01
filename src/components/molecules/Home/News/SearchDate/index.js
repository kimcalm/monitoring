import React, { useState } from "react";

import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import ko from 'date-fns/locale/ko'; 

import '../../../../../css/datepicker.css';


function SearchDate() {
  
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
      <>
      <div className="flex">
        <div>검색일자</div>
        
        <DatePicker
        showIcon
			  selected={startDate}
			  onChange={(date) => setStartDate(date)}
        locale={ko}
			  dateFormat="yyyy-MM-dd(eee)"
			/>

      <p>~</p>

      <DatePicker
      showIcon
			  selected={endDate}
			  onChange={(date) => setEndDate(date)}
        locale={ko}
			  dateFormat="yyyy-MM-dd(eee)"
			/>
      </div>
      </>
    );
  }

  export default SearchDate;