import React, { useState } from "react";

import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import ko from 'date-fns/locale/ko';

import '../../../../../css/datepicker.css';


function SearchDate({ onSearch }) {
  const [startDate, setStartDate] = useState(new Date(new Date().setDate(new Date().getDate() - 1)));
  const [endDate, setEndDate] = useState(new Date(new Date().setDate(new Date().getDate() - 1)));

  // 버튼 클릭시 상위 컴포넌트로 프롭스하기
  const handleSearch = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);
    onSearch(start, end);
  };


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
          maxDate={endDate}
        />

        <p>~</p>

        <DatePicker
          showIcon
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          locale={ko}
          dateFormat="yyyy-MM-dd(eee)"
          minDate={startDate}
          maxDate={new Date()}
        />

        <button onClick={handleSearch}>검색</button>

      </div>
    </>
  );
}

export default SearchDate;