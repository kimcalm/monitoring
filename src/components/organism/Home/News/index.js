import SearchDate from "../../../molecules/Home/News/SearchDate";
import NewsList from "../../../molecules/Home/News/NewsList";
import NewsWordcloud from "../../../molecules/Home/News/WordCloud";
import NewsData from "../../../../assets/newsData/headlines.json"

import React, { useState, useEffect } from "react";

function News() {
  const today = new Date()
  const stDate = new Date(today.getFullYear(), today.getMonth(), today.getDate()-1)

  const [startDate, setStartDate] = useState(stDate);
  const [endDate, setEndDate] = useState(stDate);

  const handleSearch = (firstDate, secondDate) => {
    setStartDate(firstDate)
    setEndDate(secondDate)
  };

  // 모든 뉴스기사들 불러오기
  const newsData = NewsData["Articles"]


  // 사용자 검색에 따른 뉴스 조회 변경
  const [filteredNews, setFilteredNews] = useState([]);
  useEffect(() => {
    const filterNewsByDate = () => {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const result = new Object();

      Object.keys(NewsData["Articles"]).forEach(date => {
        const currentDate = new Date(date.substring(0, 4), date.substring(5, 7)-1, date.substring(8, 10));
        
        if (currentDate >= start && currentDate <= end) {
          result[currentDate] = NewsData["Articles"][date].infos;
        }
      });

      setFilteredNews(result);
    };

    filterNewsByDate();
  }, [startDate, endDate]);

  // console.log(filteredNews)
  
  // 선택한 키워드 하위 → 상위 컴포넌트 이동
  const [selectedWord, setSelectedWord] = useState(null);

    const handleWordClick = (event, word) => {
        setSelectedWord(word.text);
        console.log(selectedWord)
    };


  const mainKeywords = setFilteredNews;

  return (
    <>
      <div>
        <div className="bg-slate-100 flex">
          <SearchDate onSearch={handleSearch} />
        </div>
        {/* <p className="bg-slate-100 flex">props 여부 확인 : {startDate.toLocaleDateString()}~{endDate.toLocaleDateString()}</p> */}
        <div className="bg-slate-100 flex">
          <div>
            <p className="text-3xl">주요 키워드</p>
            <NewsWordcloud data={filteredNews} onWordClick={handleWordClick}/>
          </div>
          <div>
            <p className="text-3xl">주요 뉴스</p>
            <NewsList data={filteredNews} word={selectedWord}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;